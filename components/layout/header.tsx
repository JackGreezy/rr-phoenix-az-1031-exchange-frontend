"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { servicesData } from "@/data/services";
import { locationsData } from "@/data/locations";
import { propertyTypesData } from "@/data/property-types";
import { COMPANY_NAME, PHONE_NUMBER, PHONE_NUMBER_URI } from "@/lib/config";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, PhoneIcon } from "../icons";

type MenuKey = "services" | "locations" | "propertyTypes" | "tools" | null;

const primaryServices = servicesData.slice(0, 8);
const primaryLocations = [
  locationsData.find((loc) => loc.slug === "phoenix"),
  ...locationsData.filter((loc) => loc.slug !== "phoenix").slice(0, 7),
].filter(Boolean) as typeof locationsData;
const primaryPropertyTypes = propertyTypesData.slice(0, 8);

export function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenMenu(null);
      }
    }
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
  }, [pathname]);

  const navLinkClasses =
    "relative inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]";

  return (
    <header className="sticky top-0 z-40 border-b border-[#E6A445]/30 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <Link
          href="/"
          className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
        >
          <Image
            src="/1031-exchange-of-phoenix-az-logo.png"
            alt={COMPANY_NAME}
            width={200}
            height={60}
            className="h-auto w-auto max-h-12"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-4 lg:flex">
          <div
            onMouseEnter={() => setOpenMenu("services")}
            onMouseLeave={() => setOpenMenu(null)}
            className="relative"
          >
            <button
              type="button"
              className={cn(
                navLinkClasses,
                openMenu === "services"
                  ? "bg-[#006E7F]/10 text-[#006E7F]"
                  : "text-[#2A2A2A]",
              )}
              aria-haspopup="true"
              aria-expanded={openMenu === "services"}
              onFocus={() => setOpenMenu("services")}
              onClick={() =>
                setOpenMenu((prev) => (prev === "services" ? null : "services"))
              }
            >
              Services
              <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
            </button>
            {openMenu === "services" && (
              <div
                onMouseEnter={() => setOpenMenu("services")}
                onMouseLeave={() => setOpenMenu(null)}
                className="absolute left-0 top-full pt-3 w-80"
              >
                <div className="rounded-2xl border border-[#2A2A2A]/10 bg-white p-4 shadow-[0_20px_60px_rgba(24,24,24,0.08)]">
              <ul className="space-y-2">
                {primaryServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="block rounded-xl px-3 py-2 text-sm text-[#2A2A2A]/80 transition hover:bg-[#F5F3EF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                    >
                      <span className="font-semibold text-[#2A2A2A]">
                        {service.name}
                      </span>
                      <span className="mt-1 block text-xs text-[#2A2A2A]/70">
                        {service.short}
                      </span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services"
                    className="block rounded-xl bg-[#006E7F]/10 px-3 py-2 text-sm font-semibold text-[#006E7F] transition hover:bg-[#006E7F]/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                  >
                    View all services
                  </Link>
                </li>
              </ul>
                </div>
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => setOpenMenu("locations")}
            onMouseLeave={() => setOpenMenu(null)}
            className="relative"
          >
            <button
              type="button"
              className={cn(
                navLinkClasses,
                openMenu === "locations"
                  ? "bg-[#006E7F]/10 text-[#006E7F]"
                  : "text-[#2A2A2A]",
              )}
              aria-haspopup="true"
              aria-expanded={openMenu === "locations"}
              onFocus={() => setOpenMenu("locations")}
              onClick={() =>
                setOpenMenu((prev) =>
                  prev === "locations" ? null : "locations",
                )
              }
            >
              Locations
              <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
            </button>
            {openMenu === "locations" && (
              <div
                onMouseEnter={() => setOpenMenu("locations")}
                onMouseLeave={() => setOpenMenu(null)}
                className="absolute left-0 top-full pt-3 w-72"
              >
                <div className="rounded-2xl border border-[#2A2A2A]/10 bg-white p-4 shadow-[0_20px_60px_rgba(24,24,24,0.08)]">
              <ul className="space-y-2">
                {primaryLocations.map((location) => (
                  <li key={location.slug}>
                    <Link
                      href={`/locations/${location.slug}`}
                      className="block rounded-xl px-3 py-2 text-sm text-[#2A2A2A]/80 transition hover:bg-[#F5F3EF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                    >
                      <span className="font-semibold text-[#2A2A2A]">
                        {location.name}
                      </span>
                      <span className="mt-1 block text-xs text-[#2A2A2A]/70">
                        {location.type === "city"
                          ? `${location.name} 1031 Exchange Support`
                          : location.type === "district"
                            ? `${location.name} Exchange Services`
                            : `${location.name} Exchange Support`}
                      </span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/locations"
                    className="block rounded-xl bg-[#006E7F]/10 px-3 py-2 text-sm font-semibold text-[#006E7F] transition hover:bg-[#006E7F]/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                  >
                    View all locations
                  </Link>
                </li>
              </ul>
                </div>
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => setOpenMenu("propertyTypes")}
            onMouseLeave={() => setOpenMenu(null)}
            className="relative"
          >
            <button
              type="button"
              className={cn(
                navLinkClasses,
                openMenu === "propertyTypes" || pathname?.startsWith("/property-types")
                  ? "bg-[#006E7F]/10 text-[#006E7F]"
                  : "text-[#2A2A2A]",
              )}
              aria-haspopup="true"
              aria-expanded={openMenu === "propertyTypes"}
              onFocus={() => setOpenMenu("propertyTypes")}
              onClick={() =>
                setOpenMenu((prev) =>
                  prev === "propertyTypes" ? null : "propertyTypes",
                )
              }
            >
              Property Types
              <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
            </button>
            {openMenu === "propertyTypes" && (
              <div
                onMouseEnter={() => setOpenMenu("propertyTypes")}
                onMouseLeave={() => setOpenMenu(null)}
                className="absolute left-0 top-full pt-3 w-72"
              >
                <div className="rounded-2xl border border-[#2A2A2A]/10 bg-white p-4 shadow-[0_20px_60px_rgba(24,24,24,0.08)]">
              <ul className="space-y-2">
                {primaryPropertyTypes.map((propertyType) => (
                  <li key={propertyType.slug}>
                    <Link
                      href={propertyType.route}
                      className="block rounded-xl px-3 py-2 text-sm text-[#2A2A2A]/80 transition hover:bg-[#F5F3EF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                    >
                      <span className="font-semibold text-[#2A2A2A]">
                        {propertyType.name}
                      </span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/property-types"
                    className="block rounded-xl bg-[#006E7F]/10 px-3 py-2 text-sm font-semibold text-[#006E7F] transition hover:bg-[#006E7F]/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                  >
                    View all property types
                  </Link>
                </li>
              </ul>
                </div>
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => setOpenMenu("tools")}
            onMouseLeave={() => setOpenMenu(null)}
            className="relative"
          >
            <button
              type="button"
              className={cn(
                navLinkClasses,
                openMenu === "tools"
                  ? "bg-[#006E7F]/10 text-[#006E7F]"
                  : "text-[#2A2A2A]",
              )}
              aria-haspopup="true"
              aria-expanded={openMenu === "tools"}
              onFocus={() => setOpenMenu("tools")}
              onClick={() =>
                setOpenMenu((prev) => (prev === "tools" ? null : "tools"))
              }
            >
              Tools
              <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
            </button>
            {openMenu === "tools" && (
              <div
                onMouseEnter={() => setOpenMenu("tools")}
                onMouseLeave={() => setOpenMenu(null)}
                className="absolute left-0 top-full pt-3 w-72"
              >
                <div className="rounded-2xl border border-[#2A2A2A]/10 bg-white p-4 shadow-[0_20px_60px_rgba(24,24,24,0.08)]">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/tools/boot-calculator"
                    className="block rounded-xl px-3 py-2 text-sm text-[#2A2A2A]/80 transition hover:bg-[#F5F3EF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                  >
                    <span className="font-semibold text-[#2A2A2A]">Boot Calculator</span>
                    <span className="mt-1 block text-xs text-[#2A2A2A]/70">
                      Calculate boot and tax implications
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/exchange-cost-estimator"
                    className="block rounded-xl px-3 py-2 text-sm text-[#2A2A2A]/80 transition hover:bg-[#F5F3EF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                  >
                    <span className="font-semibold text-[#2A2A2A]">Exchange Cost Estimator</span>
                    <span className="mt-1 block text-xs text-[#2A2A2A]/70">
                      Estimate QI fees and closing costs
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/identification-rules-checker"
                    className="block rounded-xl px-3 py-2 text-sm text-[#2A2A2A]/80 transition hover:bg-[#F5F3EF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                  >
                    <span className="font-semibold text-[#2A2A2A]">
                      Identification Rules Checker
                    </span>
                    <span className="mt-1 block text-xs text-[#2A2A2A]/70">
                      Validate identification compliance
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools"
                    className="block rounded-xl bg-[#006E7F]/10 px-3 py-2 text-sm font-semibold text-[#006E7F] transition hover:bg-[#006E7F]/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                  >
                    View all tools
                  </Link>
                </li>
              </ul>
                </div>
              </div>
            )}
          </div>
          <Link
            href="/about"
            className={cn(
              navLinkClasses,
              pathname === "/about"
                ? "bg-[#006E7F]/10 text-[#006E7F]"
                : "text-[#2A2A2A]",
            )}
          >
            About
          </Link>
          <Link
            href="/blog"
            className={cn(
              navLinkClasses,
              pathname?.startsWith("/blog")
                ? "bg-[#006E7F]/10 text-[#006E7F]"
                : "text-[#2A2A2A]",
            )}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-full bg-[#006E7F] px-5 text-sm font-semibold text-white transition hover:bg-[#005563] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
          >
            Contact Team
          </Link>
        </nav>
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href={`tel:${PHONE_NUMBER_URI}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#006E7F]/40 text-[#006E7F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
            aria-label={`Call ${PHONE_NUMBER}`}
          >
            <PhoneIcon className="h-5 w-5" aria-hidden="true" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-full bg-[#006E7F] px-4 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

