import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { COMPANY_NAME, SITE_DOMAIN, SUPPORT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${COMPANY_NAME}. Learn how we collect, use, and protect your personal information.`,
  alternates: {
    canonical: `${SITE_DOMAIN}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <div className="relative mx-auto max-w-4xl px-6 pb-24 pt-8 sm:px-10 lg:px-16">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Privacy Policy", href: "/privacy" },
          ]}
        />

        <article className="space-y-10 pt-8">
          <header className="space-y-4">
            <h1 className="font-playfair text-4xl font-bold text-[#2A2A2A] sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="text-base text-[#2A2A2A]/75 sm:text-lg">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </header>

          <div className="prose prose-lg max-w-none space-y-6 text-[#2A2A2A]">
            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-bold text-[#2A2A2A]">
                Introduction
              </h2>
              <p className="text-base leading-relaxed">
                {COMPANY_NAME} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-bold text-[#2A2A2A]">
                Information We Collect
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-inter text-lg font-semibold text-[#2A2A2A]">
                    Personal Information
                  </h3>
                  <p className="text-base leading-relaxed">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="mt-2 space-y-1 pl-6">
                    <li>Fill out contact forms or request consultations</li>
                    <li>Subscribe to our newsletter or communications</li>
                    <li>Use our online tools or calculators</li>
                    <li>Contact us via email or phone</li>
                  </ul>
                  <p className="mt-2 text-base leading-relaxed">
                    This information may include your name, email address, phone number, company name, and any other details you choose to provide.
                  </p>
                </div>
                <div>
                  <h3 className="font-inter text-lg font-semibold text-[#2A2A2A]">
                    Automatically Collected Information
                  </h3>
                  <p className="text-base leading-relaxed">
                    When you visit our website, we may automatically collect certain information about your device, including:
                  </p>
                  <ul className="mt-2 space-y-1 pl-6">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website addresses</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-bold text-[#2A2A2A]">
                How We Use Your Information
              </h2>
              <p className="text-base leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="mt-2 space-y-1 pl-6">
                <li>Respond to your inquiries and provide requested services</li>
                <li>Send you information about our services and updates</li>
                <li>Improve our website and user experience</li>
                <li>Analyze website usage and trends</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraud or unauthorized access</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-bold text-[#2A2A2A]">
                Information Sharing and Disclosure
              </h2>
              <p className="text-base leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="mt-2 space-y-1 pl-6">
                <li>With service providers who assist us in operating our website and conducting our business</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or merger</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-bold text-[#2A2A2A]">
                Data Security
              </h2>
              <p className="text-base leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-bold text-[#2A2A2A]">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-base leading-relaxed">
                We may use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-bold text-[#2A2A2A]">
                Your Rights
              </h2>
              <p className="text-base leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="mt-2 space-y-1 pl-6">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to object to processing of your information</li>
                <li>The right to data portability</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-bold text-[#2A2A2A]">
                Third-Party Links
              </h2>
              <p className="text-base leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-bold text-[#2A2A2A]">
                Children's Privacy
              </h2>
              <p className="text-base leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-bold text-[#2A2A2A]">
                Changes to This Privacy Policy
              </h2>
              <p className="text-base leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-bold text-[#2A2A2A]">
                Contact Us
              </h2>
              <p className="text-base leading-relaxed">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
              </p>
              <p className="text-base leading-relaxed">
                Email: <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[#006E7F] underline-offset-4 hover:underline">{SUPPORT_EMAIL}</a>
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}

