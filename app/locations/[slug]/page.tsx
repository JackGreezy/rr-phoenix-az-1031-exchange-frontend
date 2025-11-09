import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { getLocationBySlug, getAllLocations } from "@/lib/locations";
import {
  PRIMARY_CITY,
  PRIMARY_STATE_ABBR,
  SITE_DOMAIN,
} from "@/lib/config";
import { ArrowRightIcon } from "@/components/icons";
import { getLocationBatchData } from "@/lib/data-merger";
import { getLocationImageSrc } from "@/lib/utils";
import Image from "next/image";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const locations = getAllLocations();
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: `1031 Exchange Services in ${location.name} ${PRIMARY_STATE_ABBR}`,
    description: `1031 exchange support for investors in ${location.name}, ${PRIMARY_STATE_ABBR}. ${location.intro}`,
    alternates: {
      canonical: `${SITE_DOMAIN}/locations/${slug}`,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const batchData = getLocationBatchData(slug);

  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-8 sm:px-10 lg:px-16">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Locations", href: "/locations" },
            { label: location.name, href: `/locations/${slug}` },
          ]}
        />

        <article className="space-y-10 pt-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
            <Image
              src={getLocationImageSrc(slug)}
              alt={`${location.name}, ${PRIMARY_STATE_ABBR}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
            />
          </div>
          <header className="max-w-3xl space-y-4">
            <h1 className="font-playfair text-4xl font-bold text-[#2A2A2A] sm:text-5xl">
              1031 Exchange Services in {location.name}
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
                {location.intro}
              </p>
            )}
          </header>

          <div className="space-y-6">
            <h2 className="font-playfair text-3xl font-bold text-[#2A2A2A]">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {(batchData?.faqs ?? location.faq).map((faq, idx) => (
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
              Available Services
            </h2>
            <p className="text-base text-[#2A2A2A]/75">
              We provide comprehensive 1031 exchange support for investors in{" "}
              {location.name}, {PRIMARY_STATE_ABBR}. Our services include
              replacement property identification, timeline management, and
              compliance coordination.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#006E7F] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
            >
              View all services
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-3xl border border-white/70 bg-white/90 p-10 shadow-[0_32px_120px_rgba(24,24,24,0.08)]">
            <div className="space-y-6 text-center">
              <h2 className="font-playfair text-3xl font-bold text-[#2A2A2A]">
                Ready to discuss your exchange?
              </h2>
              <p className="text-base text-[#2A2A2A]/75">
                Connect with our team to discuss your 1031 exchange needs in{" "}
                {location.name}, {PRIMARY_STATE_ABBR}.
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
              href="/locations"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#006E7F] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
            >
              View all locations
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
            "@type": "Place",
            name: location.name,
            address: {
              "@type": "PostalAddress",
              addressLocality: location.name,
              addressRegion: PRIMARY_STATE_ABBR,
            },
            url: `${SITE_DOMAIN}/locations/${slug}`,
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
                  name: "Locations",
                  item: `${SITE_DOMAIN}/locations`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: location.name,
                  item: `${SITE_DOMAIN}/locations/${slug}`,
                },
              ],
            },
          }),
        }}
      />
    </div>
  );
}

