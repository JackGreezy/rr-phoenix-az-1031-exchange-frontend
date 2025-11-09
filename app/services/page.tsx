import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { servicesData } from "@/data/services";
import {
  COMPANY_NAME,
  PRIMARY_CITY,
  PRIMARY_STATE_ABBR,
  SITE_DOMAIN,
} from "@/lib/config";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "1031 Exchange Services",
  description: `Comprehensive 1031 exchange services for ${PRIMARY_CITY} investors. Replacement property identification, timeline management, and compliance support.`,
  alternates: {
    canonical: `${SITE_DOMAIN}/services`,
  },
};

export default function ServicesPage() {
  const services = servicesData;

  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-8 sm:px-10 lg:px-16">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
          ]}
        />

        <section className="space-y-10 pt-8">
          <header className="max-w-3xl space-y-4">
            <h1 className="font-playfair text-4xl font-bold text-[#2A2A2A] sm:text-5xl">
              Exchange Services
            </h1>
            <p className="text-base text-[#2A2A2A]/75 sm:text-lg">
              Comprehensive support for {PRIMARY_CITY} investors managing 1031
              exchanges. From replacement property identification to deadline
              tracking and compliance coordination.
            </p>
          </header>

          <div className="space-y-6">
            <div
              id="services-grid"
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-white/70 bg-white/70 p-6 shadow-[0_12px_40px_rgba(24,24,24,0.07)] transition hover:border-[#E6A445]/40 hover:shadow-[0_18px_48px_rgba(24,24,24,0.10)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                >
                  <div>
                    <h2 className="font-inter text-xl font-medium text-[#2A2A2A]">
                      {service.name}
                    </h2>
                    <p className="mt-3 text-sm text-[#2A2A2A]/75">
                      {service.short}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#006E7F]">
                    Learn more
                    <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div
            id="no-results-cta"
            className="hidden rounded-3xl border border-white/70 bg-white/90 p-10 shadow-[0_32px_120px_rgba(24,24,24,0.08)]"
          >
            <div className="space-y-6 text-center">
              <h2 className="font-playfair text-3xl font-bold text-[#2A2A2A]">
                We can help with that
              </h2>
              <p className="text-base text-[#2A2A2A]/75">
                Our team specializes in custom exchange solutions for {PRIMARY_CITY} investors.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E6A445] px-6 py-3 text-base font-semibold text-[#2A2A2A] transition hover:bg-[#C88735] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
              >
                Contact Us
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/70 bg-white/90 p-10 shadow-[0_32px_120px_rgba(24,24,24,0.08)]">
            <div className="space-y-6 text-center">
              <h2 className="font-playfair text-3xl font-bold text-[#2A2A2A]">
                Ready to discuss your exchange?
              </h2>
              <p className="text-base text-[#2A2A2A]/75">
                Connect with our team to discuss your 1031 exchange needs and replacement property objectives.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E6A445] px-6 py-3 text-base font-semibold text-[#2A2A2A] transition hover:bg-[#C88735] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
              >
                Contact Us
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "1031 Exchange Services",
            description: `Comprehensive 1031 exchange services for ${PRIMARY_CITY} investors`,
            url: `${SITE_DOMAIN}/services`,
            mainEntity: {
              "@type": "ItemList",
              itemListElement: services.map((service, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "Service",
                name: service.name,
                description: service.short,
                url: `${SITE_DOMAIN}/services/${service.slug}`,
                },
              })),
            },
          }),
        }}
      />
    </div>
  );
}

