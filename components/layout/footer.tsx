import Link from "next/link";
import {
  COMPANY_NAME,
  GOOGLE_MAP_EMBED,
  HAS_STAFFED_OFFICE,
  OFFICE_ADDRESS_LINE_1,
  OFFICE_ADDRESS_LINE_2,
  OFFICE_HOURS,
  PHONE_NUMBER,
  PHONE_NUMBER_URI,
  PRIMARY_CITY,
  PRIMARY_STATE_ABBR,
  SOCIAL_LINKS,
  SUPPORT_EMAIL,
} from "@/lib/config";
import { getAllLocations } from "@/lib/locations";
import { getAllServices } from "@/lib/services";

const footerLocations = getAllLocations();
const footerServices = getAllServices();

export function Footer() {
  return (
    <footer className="border-t border-[#E6A445]/30 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-10 lg:grid-cols-6 lg:px-16">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#2A2A2A]">{COMPANY_NAME}</h2>
            <p className="text-sm text-[#2A2A2A]/75">
              Precision-focused 1031 exchange guidance supporting investors across {PRIMARY_CITY},{" "}
              {PRIMARY_STATE_ABBR} with deadline discipline, replacement sourcing, and advisor coordination.
            </p>
            <div className="space-y-1 text-sm text-[#2A2A2A]/80">
              <p>
                Phone:{" "}
                <Link
                  href={`tel:${PHONE_NUMBER_URI}`}
                  className="font-semibold text-[#006E7F] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                >
                  {PHONE_NUMBER}
                </Link>
              </p>
              <p>
                Email:{" "}
                <Link
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="font-semibold text-[#006E7F] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                >
                  {SUPPORT_EMAIL}
                </Link>
              </p>
              <p>Hours: {OFFICE_HOURS}</p>
            </div>
            {HAS_STAFFED_OFFICE ? (
              <address className="not-italic rounded-2xl border border-[#2A2A2A]/10 bg-[#F5F3EF]/60 p-4 text-sm text-[#2A2A2A]/80">
                <p className="font-semibold text-[#2A2A2A]">Phoenix Office</p>
                <p>{OFFICE_ADDRESS_LINE_1}</p>
                <p>{OFFICE_ADDRESS_LINE_2}</p>
              </address>
            ) : (
              <p className="rounded-2xl border border-[#2A2A2A]/10 bg-[#F5F3EF]/60 p-4 text-sm text-[#2A2A2A]/80">
                Advisory services delivered virtually across Arizona with scheduled in-person consultations on request.
              </p>
            )}
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-[#006E7F] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-[#2A2A2A]">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#2A2A2A]/75">
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#006E7F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="hover:text-[#006E7F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-[#006E7F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#006E7F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#006E7F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[#006E7F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[#006E7F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap.xml"
                  className="hover:text-[#006E7F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#2A2A2A]">Services</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#2A2A2A]/75">
              {footerServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-[#006E7F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="font-semibold text-[#006E7F] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                >
                  View all services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#2A2A2A]">Tools</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#2A2A2A]/75">
              <li>
                <Link
                  href="/tools/boot-calculator"
                  className="hover:text-[#006E7F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                >
                  Boot Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/exchange-cost-estimator"
                  className="hover:text-[#006E7F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                >
                  Exchange Cost Estimator
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/identification-rules-checker"
                  className="hover:text-[#006E7F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                >
                  Identification Rules Checker
                </Link>
              </li>
              <li>
                <Link
                  href="/tools"
                  className="font-semibold text-[#006E7F] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                >
                  View all tools
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#2A2A2A]">
              Service Areas
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-[#2A2A2A]/75">
              {footerLocations.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="hover:text-[#006E7F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/locations"
                  className="font-semibold text-[#006E7F] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
                >
                  View all locations
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-4">
          <div className="overflow-hidden rounded-2xl border border-[#2A2A2A]/10 shadow-[0_20px_60px_rgba(24,24,24,0.08)]">
            <iframe
              title="Phoenix office map"
              src={GOOGLE_MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-48 w-full border-0"
            />
          </div>
          <div className="space-y-2 text-xs text-[#2A2A2A]/70">
            <p>
              This site helps investors identify potential replacement properties
              for Section 1031 exchanges.
            </p>
            <p>
              This site is not a Qualified Intermediary, law firm, broker, or CPA.
            </p>
            <p>
              Users should consult a Qualified Intermediary and tax advisor before
              acting on exchange strategies.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-[#E6A445]/30 bg-[#F5F3EF]/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-xs text-[#2A2A2A]/70 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <p>
            Serving {PRIMARY_CITY}, {PRIMARY_STATE_ABBR} and statewide investors.
          </p>
        </div>
      </div>
    </footer>
  );
}

