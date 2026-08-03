import Link from "next/link";
import { ContactFormWrapper } from "./contact-form";
import { PhoneIcon } from "@/components/icons";
import { PHONE_NUMBER, PHONE_NUMBER_URI, SITE_DOMAIN } from "@/lib/config";

export const metadata = {
  title: "Free Phoenix 1031 Exchange Guidance | Contact Us",
  description: "Talk with a Phoenix 1031 exchange expert, request a free replacement property list, or start planning a direct, net-lease, or DST replacement.",
  alternates: { canonical: `${SITE_DOMAIN}/contact` },
};

export default function ContactPage() {
  return (
    <main className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
        <div className="mb-16 text-center">
          <span className="subheading mb-4 block">Free Exchange Guidance</span>
          <h1 className="heading-display text-white">
            Talk Through Your Phoenix Property Sale
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">
            Start with the sale, timing, management goals, and replacement-property priorities. The short form keeps it simple, or call now for immediate guidance.
          </p>
          <Link
            href={`tel:${PHONE_NUMBER_URI}`}
            className="mt-7 inline-flex items-center justify-center gap-2 bg-mansion-gold px-7 py-3 text-base font-semibold text-white transition hover:bg-mansion-gold-dark"
          >
            <PhoneIcon className="h-5 w-5" aria-hidden="true" />
            Call a 1031 Expert: {PHONE_NUMBER}
          </Link>
        </div>
        <ContactFormWrapper />
      </div>
    </main>
  );
}
