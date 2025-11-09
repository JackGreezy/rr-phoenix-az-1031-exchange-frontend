import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { propertyTypesData } from "@/data/property-types";
import {
  PRIMARY_CITY,
  PRIMARY_STATE_ABBR,
  SITE_DOMAIN,
} from "@/lib/config";
import { ArrowRightIcon } from "@/components/icons";
import { getPropertyTypeImageSrc } from "@/lib/utils";
import Image from "next/image";

export const metadata: Metadata = {
  title: `1031 Exchange Property Types | ${PRIMARY_CITY} ${PRIMARY_STATE_ABBR}`,
  description: `Explore property types eligible for 1031 exchanges in ${PRIMARY_CITY}. Multifamily, industrial, retail, and more replacement property options.`,
  alternates: {
    canonical: `${SITE_DOMAIN}/property-types`,
  },
};

export default function PropertyTypesPage() {
  const propertyTypes = propertyTypesData;

  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-8 sm:px-10 lg:px-16">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Property Types", href: "/property-types" },
          ]}
        />

        <section className="space-y-10 pt-8">
          <header className="max-w-3xl space-y-4">
            <h1 className="font-playfair text-4xl font-bold text-[#2A2A2A] sm:text-5xl">
              Property Types
            </h1>
            <p className="text-base text-[#2A2A2A]/75 sm:text-lg">
              Explore eligible property types for 1031 exchanges in {PRIMARY_CITY}.
              From multifamily residential to commercial real estate, discover
              replacement property options that meet your investment objectives.
            </p>
          </header>

          <div className="space-y-6">
            <div
              id="property-types-grid"
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {propertyTypes.map((propertyType) => (
                <Link
                  key={propertyType.slug}
                  href={propertyType.route}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/70 bg-white/70 shadow-[0_12px_40px_rgba(24,24,24,0.07)] transition hover:border-[#E6A445]/40 hover:shadow-[0_18px_48px_rgba(24,24,24,0.10)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                >
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={getPropertyTypeImageSrc(propertyType.slug)}
                      alt={propertyType.name}
                      fill
                      className="object-cover transition group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h2 className="font-inter text-xl font-medium text-[#2A2A2A]">
                        {propertyType.name}
                      </h2>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#006E7F]">
                      Learn more
                      <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/70 bg-white/90 p-10 shadow-[0_32px_120px_rgba(24,24,24,0.08)]">
            <div className="space-y-6 text-center">
              <h2 className="font-playfair text-3xl font-bold text-[#2A2A2A]">
                Ready to discuss your exchange?
              </h2>
              <p className="text-base text-[#2A2A2A]/75">
                Connect with our team to discuss your 1031 exchange needs and replacement property objectives in {PRIMARY_CITY}.
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
            name: "1031 Exchange Property Types",
            description: `Eligible property types for 1031 exchanges in ${PRIMARY_CITY}`,
            url: `${SITE_DOMAIN}/property-types`,
            mainEntity: {
              "@type": "ItemList",
              itemListElement: propertyTypes.map((propertyType, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "Product",
                  name: propertyType.name,
                  url: `${SITE_DOMAIN}${propertyType.route}`,
                },
              })),
            },
          }),
        }}
      />
    </div>
  );
}

