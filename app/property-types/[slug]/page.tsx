import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { getPropertyTypeBySlug, getAllPropertyTypes } from "@/lib/property-types";
import {
  COMPANY_NAME,
  PRIMARY_CITY,
  PRIMARY_STATE_ABBR,
  SITE_DOMAIN,
} from "@/lib/config";
import { ArrowRightIcon } from "@/components/icons";
import { getPropertyTypeBatchData } from "@/lib/data-merger";
import { getPropertyTypeImageSrc } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const propertyTypes = getAllPropertyTypes();
  return propertyTypes.map((propertyType) => ({
    slug: propertyType.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const propertyType = getPropertyTypeBySlug(slug);

  if (!propertyType) {
    return {
      title: "Property Type Not Found",
    };
  }

  return {
    title: `${propertyType.name} Properties for 1031 Exchange | ${PRIMARY_CITY} ${PRIMARY_STATE_ABBR}`,
    description: `Explore ${propertyType.name} properties as replacement options for your 1031 exchange in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}.`,
    alternates: {
      canonical: `${SITE_DOMAIN}/property-types/${slug}`,
    },
  };
}

export default async function PropertyTypePage({ params }: Props) {
  const { slug } = await params;
  const propertyType = getPropertyTypeBySlug(slug);

  if (!propertyType) {
    notFound();
  }

  const batchData = getPropertyTypeBatchData(slug);

  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-8 sm:px-10 lg:px-16">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Property Types", href: "/property-types" },
            { label: propertyType.name, href: `/property-types/${slug}` },
          ]}
        />

        <article className="space-y-10 pt-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
            <Image
              src={getPropertyTypeImageSrc(slug)}
              alt={propertyType.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
            />
          </div>
          <header className="max-w-3xl space-y-4">
            <h1 className="font-playfair text-4xl font-bold text-[#2A2A2A] sm:text-5xl">
              {propertyType.name} Properties for 1031 Exchange
            </h1>
            {batchData?.mainDescription ? (
              <div
                className="text-base text-[#2A2A2A]/75 sm:text-lg"
                dangerouslySetInnerHTML={{
                  __html: batchData.mainDescription,
                }}
              />
            ) : (
              <p className="text-base text-[#2A2A2A]/75 sm:text-lg">
                Explore {propertyType.name} properties as replacement options for your 1031 exchange in {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}.
              </p>
            )}
          </header>

          {batchData?.faqs && batchData.faqs.length > 0 && (
            <div className="space-y-6">
              <h2 className="font-playfair text-3xl font-bold text-[#2A2A2A]">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {batchData.faqs.map((faq, idx) => (
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
          )}

          {batchData?.inclusions && batchData.inclusions.length > 0 && (
            <div className="space-y-6">
              <h2 className="font-playfair text-3xl font-bold text-[#2A2A2A]">
                What We Include
              </h2>
              <ul className="space-y-3">
                {batchData.inclusions.map((inclusion, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-base text-[#2A2A2A]/75"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#006E7F]" />
                    <span>{inclusion}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="rounded-3xl border border-white/70 bg-white/90 p-10 shadow-[0_32px_120px_rgba(24,24,24,0.08)]">
            <div className="space-y-6 text-center">
              <h2 className="font-playfair text-3xl font-bold text-[#2A2A2A]">
                Ready to discuss your exchange?
              </h2>
              <p className="text-base text-[#2A2A2A]/75">
                Connect with our team to discuss {propertyType.name} replacement properties for your 1031 exchange in {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}.
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

          <div className="flex justify-center">
            <Link
              href="/property-types"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#006E7F] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
            >
              View all property types
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: `${propertyType.name} Properties for 1031 Exchange`,
            description: batchData?.mainDescription
              ? batchData.mainDescription.replace(/<[^>]*>/g, "").substring(0, 160)
              : `Explore ${propertyType.name} properties as replacement options for your 1031 exchange in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}.`,
            url: `${SITE_DOMAIN}/property-types/${slug}`,
            publisher: {
              "@type": "Organization",
              name: COMPANY_NAME,
              url: SITE_DOMAIN,
            },
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
                  name: "Property Types",
                  item: `${SITE_DOMAIN}/property-types`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: propertyType.name,
                  item: `${SITE_DOMAIN}/property-types/${slug}`,
                },
              ],
            },
            mainEntity: {
              "@type": "RealEstateAgent",
              name: COMPANY_NAME,
              url: SITE_DOMAIN,
            },
          }),
        }}
      />
    </div>
  );
}

