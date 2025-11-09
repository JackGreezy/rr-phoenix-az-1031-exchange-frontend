import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { getAllLocations } from "@/lib/locations";
import {
  PRIMARY_CITY,
  PRIMARY_STATE_ABBR,
  SITE_DOMAIN,
} from "@/lib/config";
import { ArrowRightIcon } from "@/components/icons";
import { getLocationImageSrc } from "@/lib/utils";
import Image from "next/image";

export const metadata: Metadata = {
  title: `1031 Exchange Locations | ${PRIMARY_CITY} ${PRIMARY_STATE_ABBR}`,
  description: `1031 exchange services across ${PRIMARY_CITY} and surrounding areas. Local expertise for investors in Arizona.`,
  alternates: {
    canonical: `${SITE_DOMAIN}/locations`,
  },
};

export default function LocationsPage() {
  const locations = getAllLocations();

  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-8 sm:px-10 lg:px-16">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Locations", href: "/locations" },
          ]}
        />

        <section className="space-y-10 pt-8">
          <header className="max-w-3xl space-y-4">
            <h1 className="font-playfair text-4xl font-bold text-[#2A2A2A] sm:text-5xl">
              Service Areas
            </h1>
            <p className="text-base text-[#2A2A2A]/75 sm:text-lg">
              We assist investors throughout {PRIMARY_CITY} and surrounding
              communities in {PRIMARY_STATE_ABBR} with every stage of their 1031
              exchange.
            </p>
          </header>

          <div className="space-y-6">
            <div
              id="locations-grid"
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/70 bg-white/70 shadow-[0_12px_40px_rgba(24,24,24,0.07)] transition hover:border-[#E6A445]/40 hover:shadow-[0_18px_48px_rgba(24,24,24,0.10)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                >
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={getLocationImageSrc(location.slug)}
                      alt={location.name}
                      fill
                      className="object-cover transition group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h2 className="font-inter text-xl font-medium text-[#2A2A2A]">
                        {location.name}
                      </h2>
                      <p className="mt-3 text-sm text-[#2A2A2A]/75">
                        {location.intro}
                      </p>
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

          <div
            id="no-results-cta"
            className="hidden rounded-3xl border border-white/70 bg-white/90 p-10 shadow-[0_32px_120px_rgba(24,24,24,0.08)]"
          >
            <div className="space-y-6 text-center">
              <h2 className="font-playfair text-3xl font-bold text-[#2A2A2A]">
                We serve all of {PRIMARY_STATE_ABBR}
              </h2>
              <p className="text-base text-[#2A2A2A]/75">
                Our team provides statewide support for 1031 exchanges across
                Arizona.
              </p>
              <Link
                href="/contact?projectType=Other"
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
                Connect with our team to discuss your 1031 exchange needs in {PRIMARY_CITY} and surrounding areas.
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
    </div>
  );
}

