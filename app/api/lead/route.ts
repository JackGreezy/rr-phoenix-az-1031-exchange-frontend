import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

async function verifyTurnstile(token: string): Promise<boolean> {
  if (!process.env.TURNSTILE_SECRET_KEY) {
    console.warn("TURNSTILE_SECRET_KEY not set, skipping verification");
    return true;
  }

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: token,
        }),
      }
    );

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error("Turnstile verification error:", error);
    return false;
  }
}

async function sendToZapier(data: Record<string, string>) {
  if (!process.env.ZAPIER_WEBHOOK_URL) {
    console.warn("ZAPIER_WEBHOOK_URL not set, skipping Zapier");
    return;
  }

  try {
    await fetch(process.env.ZAPIER_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error("Zapier webhook error:", error);
  }
}

async function sendEmail(data: Record<string, string>) {
  if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_TO_EMAIL) {
    console.warn("SendGrid not configured, skipping email");
    return;
  }

  const emailContent = Object.entries(data)
    .map(([key, value]) => `${key}: ${value || "(not provided)"}`)
    .join("\n");

  const msg = {
    to: process.env.SENDGRID_TO_EMAIL,
    from: process.env.SENDGRID_FROM_EMAIL || "noreply@example.com",
    subject: `New Lead: ${data.projectType || "Contact Form Submission"}`,
    text: emailContent,
    html: `
      <h2>New Lead Submission</h2>
      <table style="border-collapse: collapse; width: 100%;">
        ${Object.entries(data)
          .map(
            ([key, value]) =>
              `<tr>
                <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">${key}</td>
                <td style="padding: 8px; border: 1px solid #ddd;">${value || "(not provided)"}</td>
              </tr>`
          )
          .join("")}
      </table>
    `,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error("SendGrid error:", error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const turnstileToken = formData.get("cf-turnstile-response") as string;

    // Verify Turnstile token
    if (turnstileToken) {
      const isValid = await verifyTurnstile(turnstileToken);
      if (!isValid) {
        return NextResponse.json(
          { error: "Invalid captcha verification" },
          { status: 400 }
        );
      }
    }

    // Extract form data
    const data: Record<string, string> = {
      name: (formData.get("name") as string) || "",
      company: (formData.get("company") as string) || "",
      email: (formData.get("email") as string) || "",
      phone: (formData.get("phone") as string) || "",
      projectType: (formData.get("projectType") as string) || "",
      timeline: (formData.get("timeline") as string) || "",
      details: (formData.get("details") as string) || "",
      submittedAt: new Date().toISOString(),
    };

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.projectType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email via SendGrid
    await sendEmail(data);

    // Send to Zapier webhook
    await sendToZapier(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}

