import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import {
  getServiceBySlug,
  getRelatedServices,
  getAllServices,
} from "@/lib/services";
import {
  COMPANY_NAME,
  PRIMARY_CITY,
  PRIMARY_STATE_ABBR,
  SITE_DOMAIN,
} from "@/lib/config";
import { ArrowRightIcon } from "@/components/icons";
import { getServiceBatchData } from "@/lib/data-merger";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.name} | ${PRIMARY_CITY} 1031 Exchange Services`,
    description: service.shortDescription,
    alternates: {
      canonical: `${SITE_DOMAIN}/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const batchData = getServiceBatchData(slug);
  const relatedServices = getRelatedServices(slug, 4);
  const allServices = getAllServices();

  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-8 sm:px-10 lg:px-16">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.name, href: `/services/${slug}` },
          ]}
        />

        <article className="space-y-10 pt-8">
          <header className="max-w-3xl space-y-4">
            <h1 className="font-playfair text-4xl font-bold text-[#2A2A2A] sm:text-5xl">
              {service.name}
            </h1>
            <p className="text-base text-[#2A2A2A]/75 sm:text-lg">
              {service.shortDescription}
            </p>
          </header>

          <div className="prose prose-lg max-w-none space-y-6 text-[#2A2A2A]">
            <div className="space-y-4">
              <h2 className="font-playfair text-2xl font-bold text-[#2A2A2A]">
                Overview
              </h2>
              {batchData?.mainDescription ? (
                <div
                  className="text-base leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: batchData.mainDescription,
                  }}
                />
              ) : (
                <p className="text-base leading-relaxed">{service.overview}</p>
              )}
            </div>

            {service.highlights.length > 0 && (
              <div className="space-y-4">
                <h2 className="font-playfair text-2xl font-bold text-[#2A2A2A]">
                  Highlights
                </h2>
                <ul className="space-y-2 pl-6">
                  {service.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-base leading-relaxed">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(batchData?.inclusions?.length ?? service.deliverables.length) > 0 && (
              <div className="space-y-4">
                <h2 className="font-playfair text-2xl font-bold text-[#2A2A2A]">
                  {batchData?.inclusions ? "What's Included" : "Deliverables"}
                </h2>
                <ul className="space-y-2 pl-6">
                  {(batchData?.inclusions ?? service.deliverables).map((item, idx) => (
                    <li key={idx} className="text-base leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-[#006E7F]/20 bg-[#006E7F]/8 p-6 text-sm text-[#2A2A2A]/80">
            {batchData?.complianceNote ? (
              <p className="font-semibold text-[#006E7F]">
                {batchData.complianceNote}
              </p>
            ) : (
              <>
                <p className="font-semibold text-[#006E7F]">
                  Educational content only. Not tax or legal advice.
                </p>
                <p className="mt-2">
                  Consult a Qualified Intermediary and tax advisor before acting.
                </p>
              </>
            )}
          </div>

          <div className="space-y-6">
            <h2 className="font-playfair text-3xl font-bold text-[#2A2A2A]">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {(batchData?.faqs ?? service.faq).map((faq, idx) => (
                <details
                  key={idx}
                  className="group rounded-2xl border border-white/70 bg-white/80 p-6 shadow-[0_12px_40px_rgba(24,24,24,0.06)] transition focus-within:border-[#E6A445]/40"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-inter text-lg font-medium text-[#2A2A2A]">
                    <span>{faq.question}</span>
                    <ArrowRightIcon className="h-5 w-5 text-[#006E7F] transition group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 text-sm text-[#2A2A2A]/75">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-playfair text-3xl font-bold text-[#2A2A2A]">
              Related Services
            </h2>

            <div
              id="related-services-grid"
              className="grid gap-6 sm:grid-cols-2"
            >
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  href={`/services/${related.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-white/70 bg-white/70 p-6 shadow-[0_12px_40px_rgba(24,24,24,0.07)] transition hover:border-[#E6A445]/40 hover:shadow-[0_18px_48px_rgba(24,24,24,0.10)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                >
                  <div>
                    <h3 className="font-inter text-xl font-medium text-[#2A2A2A]">
                      {related.name}
                    </h3>
                    <p className="mt-3 text-sm text-[#2A2A2A]/75">
                      {related.shortDescription}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#006E7F]">
                    Explore
                    <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>

            <div
              id="no-related-results"
              className="hidden rounded-2xl border border-white/70 bg-white/80 p-6 text-center"
            >
              <p className="text-sm text-[#2A2A2A]/75">
                We can help with{" "}
                <span id="search-query-display" className="font-semibold"></span>
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#006E7F] underline-offset-4 hover:underline"
              >
                Contact us
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/70 bg-white/90 p-10 shadow-[0_32px_120px_rgba(24,24,24,0.08)]">
            <div className="space-y-6 text-center">
              <h2 className="font-playfair text-3xl font-bold text-[#2A2A2A]">
                Ready to get started?
              </h2>
              <p className="text-base text-[#2A2A2A]/75">
                Discuss your exchange timeline and replacement objectives with our{" "}
                {PRIMARY_CITY} team.
              </p>
              <Link
                href={`/contact?projectType=${encodeURIComponent(service.name)}#project-type`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E6A445] px-6 py-3 text-base font-semibold text-[#2A2A2A] transition hover:bg-[#C88735] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
              >
                Request Consultation
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </article>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.name,
            description: service.shortDescription,
            provider: {
              "@type": "Organization",
              name: COMPANY_NAME,
              url: SITE_DOMAIN,
            },
            areaServed: {
              "@type": "Country",
              name: "United States",
            },
            url: `${SITE_DOMAIN}/services/${slug}`,
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: SITE_DOMAIN,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Services",
                  item: `${SITE_DOMAIN}/services`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: service.name,
                  item: `${SITE_DOMAIN}/services/${slug}`,
                },
              ],
            },
          }),
        }}
      />
    </div>
  );
}

