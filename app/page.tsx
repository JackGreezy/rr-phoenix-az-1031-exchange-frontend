import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { locations } from "@/lib/locations";
import {
  ArrowRightIcon,
  CalculatorIcon,
  CalendarIcon,
  ClockIcon,
  LandmarkIcon,
  PhoneIcon,
  ScaleIcon,
  SearchIcon,
  ShieldCheckIcon,
} from "@/components/icons";
import { HomepageServiceArea } from "@/components/homepage/homepage-service-area";
import { LeadForm } from "@/components/forms/lead-form";
import {
  COMPANY_NAME,
  OFFICE_ADDRESS_LINE_1,
  PHONE_NUMBER,
  PHONE_NUMBER_URI,
  SITE_DOMAIN,
  SUPPORT_EMAIL,
} from "@/lib/config";

const pageTitle = "1031 Exchange Phoenix | Turnkey Property & DST Solutions";
const pageDescription =
  "Get turnkey 1031 exchange help in Phoenix. Compare direct property, net-lease and DST options, request a free property list, or call (602) 669-7981.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_DOMAIN),
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "1031 exchange Phoenix",
    "Phoenix 1031 exchange company",
    "1031 exchange properties Phoenix",
    "DST properties Phoenix",
    "passive 1031 exchange investments",
    "qualified intermediary Phoenix",
    "replacement property Phoenix",
  ],
  alternates: { canonical: SITE_DOMAIN },
  openGraph: {
    type: "website",
    url: SITE_DOMAIN,
    title: pageTitle,
    description: pageDescription,
    siteName: COMPANY_NAME,
    images: [
      {
        url: `${SITE_DOMAIN}/1031-exchange-of-phoenix-az.jpg`,
        width: 1200,
        height: 630,
        alt: "Phoenix skyline and turnkey 1031 exchange solutions.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [`${SITE_DOMAIN}/1031-exchange-of-phoenix-az.jpg`],
  },
};

const faqs = [
  {
    question: "Can one team help with my entire Phoenix 1031 exchange?",
    answer:
      "Yes. We help Phoenix property owners organize the sale objective, connect with an independent qualified intermediary, define replacement criteria, compare direct and passive property choices, and keep the right professionals aligned through replacement closing. Tax, legal, securities, lending, and intermediary work remains with the appropriate independent professionals.",
  },
  {
    question: "How early should I start planning a 1031 exchange?",
    answer:
      "The best time is before the Phoenix property is listed or placed under contract. Early planning creates time to clarify ownership, expected equity, debt, income goals, management preferences, financing, and the replacement-property search before the exchange calendar begins.",
  },
  {
    question: "Can I sell in Arizona and buy replacement property elsewhere?",
    answer:
      "A qualifying Phoenix investment property may generally be exchanged for qualifying investment real estate elsewhere in the United States. The replacement search can include local and nationwide direct property, net-lease property, and available DST interests.",
  },
  {
    question: "What is a DST in a 1031 exchange?",
    answer:
      "A Delaware Statutory Trust can offer fractional ownership in professionally managed real estate. A DST may qualify as replacement property for eligible investors, but offerings differ in assets, sponsors, leverage, fees, projected distributions, risks, liquidity limits, minimums, and suitability.",
  },
  {
    question: "Can a 1031 exchange help me leave property management behind?",
    answer:
      "It can. Owners who are tired of tenants, maintenance calls, vacancies, renovations, and leasing decisions can compare another direct property with net-lease and professionally managed DST options. Each path has different levels of control, workload, liquidity, financing, and risk.",
  },
  {
    question: "What is the minimum investment for a DST?",
    answer:
      "Some DST offerings may begin around $100,000, while minimums and investor requirements vary. Current availability, offering documents, fees, leverage, property risk, sponsor experience, illiquidity, and suitability must all be reviewed before making a decision.",
  },
  {
    question: "How do direct property, net-lease property, and a DST compare?",
    answer:
      "Direct ownership usually offers the most control and management responsibility. Net-lease property can shift specified obligations to a tenant while retaining direct ownership. A DST is professionally managed and typically offers less control and limited liquidity. The right fit depends on the owner’s objectives and transaction facts.",
  },
  {
    question: "Can inherited investment property be used in a 1031 exchange?",
    answer:
      "Inherited property may qualify when it is held for investment or business use, but basis, ownership, estate planning, co-owner goals, and prior use can change the analysis. Those facts should be reviewed with a CPA and attorney before the property is sold.",
  },
  {
    question: "Can I get a current list of replacement properties?",
    answer:
      "Yes. Submit the short property-list request with the sale timing, approximate exchange equity, and preferred ownership style. Available direct, net-lease, and DST choices can then be discussed against the actual Phoenix exchange plan.",
  },
  {
    question: "What if my Phoenix property is already under contract?",
    answer:
      "Call immediately. There may still be time to engage an independent qualified intermediary before closing and organize the replacement search. Exchange proceeds generally cannot be received by the seller without jeopardizing deferral.",
  },
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_NAME,
  url: SITE_DOMAIN,
  logo: `${SITE_DOMAIN}/1031-exchange-of-phoenix-logo.png`,
  telephone: PHONE_NUMBER,
  email: SUPPORT_EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: OFFICE_ADDRESS_LINE_1,
    addressLocality: "Phoenix",
    addressRegion: "AZ",
    postalCode: "85024",
    addressCountry: "US",
  },
  areaServed: { "@type": "State", name: "Arizona" },
  serviceType: "Turnkey 1031 Exchange Solutions",
  description: pageDescription,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_DOMAIN}#localbusiness`,
  name: COMPANY_NAME,
  image: `${SITE_DOMAIN}/1031-exchange-of-phoenix-logo.png`,
  url: SITE_DOMAIN,
  telephone: PHONE_NUMBER,
  email: SUPPORT_EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: OFFICE_ADDRESS_LINE_1,
    addressLocality: "Phoenix",
    addressRegion: "AZ",
    postalCode: "85024",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "33.509024",
    longitude: "-112.027461",
  },
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "$$",
  areaServed: { "@type": "Country", name: "United States" },
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: COMPANY_NAME,
  provider: { "@id": `${SITE_DOMAIN}#localbusiness` },
  serviceType: "Turnkey 1031 Exchange Solutions",
  areaServed: { "@type": "State", name: "Arizona" },
  description: pageDescription,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: COMPANY_NAME,
  url: SITE_DOMAIN,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_DOMAIN}/search?query={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function Page() {
  return (
    <div className="relative bg-white text-mansion-charcoal">
      <main className="relative">
        <section className="relative min-h-[650px] w-full overflow-hidden lg:h-[78vh]">
          <Image
            src="/1031-exchange-of-phoenix-az.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/15" />
          <div className="relative z-10 flex min-h-[650px] items-center lg:h-full">
            <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
              <div className="max-w-3xl">
                <span className="section-label mb-4 inline-block text-white/80">
                  One Call. One Complete Phoenix Exchange Plan.
                </span>
                <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                  Turnkey 1031 Exchange Solutions in Phoenix, AZ
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
                  Sell a Greater Phoenix investment property with a clear path to the next one. Get help assembling the independent qualified intermediary, replacement-property search, direct or passive options, and closing team around one exchange plan.
                </p>
                <div className="mt-6 grid max-w-2xl gap-x-8 gap-y-3 text-sm text-white/90 sm:grid-cols-2 sm:text-base">
                  {[
                    "Request a free property list",
                    "Compare direct, net-lease, and DST options",
                    "Leave tenants, maintenance, and leasing behind",
                    "Explore professionally managed institutional-grade real estate",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none bg-mansion-gold" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-white/70">
                  Some DST offerings may begin around $100,000. Availability, risks, fees, eligibility, liquidity, and suitability vary.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="#contact-form"
                    className="inline-flex items-center justify-center gap-2 bg-mansion-gold px-8 py-4 text-base font-semibold text-white transition hover:bg-mansion-gold-dark"
                  >
                    Start My Exchange
                    <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
                  </Link>
                  <Link
                    href={`tel:${PHONE_NUMBER_URI}`}
                    className="inline-flex items-center justify-center gap-2 border-2 border-white bg-transparent px-8 py-4 text-base font-semibold text-white transition hover:bg-white hover:text-mansion-charcoal"
                    aria-label={`Talk to a 1031 expert at ${PHONE_NUMBER}`}
                  >
                    <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                    Talk to an Expert: {PHONE_NUMBER}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <section className="border-b border-gray-200 pb-16">
            <p className="section-label mb-6">Start With the Reason for Selling</p>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <h2 className="font-serif text-3xl text-mansion-charcoal sm:text-4xl lg:text-5xl">
                  What Should This Property Sale Solve?
                </h2>
                <p className="mt-6 text-base leading-relaxed text-mansion-charcoal/70">
                  A successful exchange is not simply about replacing value. It should solve the problem that made the Phoenix property worth selling—too much management, concentrated equity, a difficult partnership, changing income needs, or an inherited asset that no longer fits.
                </p>
                <p className="mt-4 text-base leading-relaxed text-mansion-charcoal/70">
                  We turn those priorities into a practical replacement brief before listings and deadlines begin driving the decision.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-mansion-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-mansion-navy-light">
                    Get Free Exchange Guidance
                    <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href={`tel:${PHONE_NUMBER_URI}`} className="inline-flex items-center justify-center gap-2 border border-mansion-gold px-6 py-3 text-sm font-semibold text-mansion-gold transition hover:bg-mansion-gold hover:text-white">
                    <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                    Call {PHONE_NUMBER}
                  </Link>
                </div>
              </div>
              <div className="grid gap-px bg-gray-200 sm:grid-cols-2">
                {[
                  ["Leave Day-to-Day Management", "Move beyond tenant calls, repairs, vacancies, leasing decisions, and capital projects."],
                  ["Build a More Passive Income Strategy", "Compare ownership structures with different workloads, control, income profiles, and risks."],
                  ["Diversify Concentrated Equity", "Evaluate whether one large Phoenix asset should become multiple properties, markets, or ownership interests."],
                  ["Sell an Inherited or Misfit Property", "Organize basis, ownership, qualifying use, co-owner goals, and the next investment decision before closing."],
                ].map(([title, description]) => (
                  <article key={title} className="bg-white p-6 transition hover:bg-gray-50">
                    <h3 className="font-serif text-xl text-mansion-charcoal">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-mansion-charcoal/70">{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="border-b border-gray-200 py-16">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="relative min-h-[440px] overflow-hidden">
                <Image
                  src="/images/blog/desert-modern.svg"
                  alt="Professionally managed replacement property options for Phoenix investors"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 52vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-mansion-navy via-mansion-navy/90 to-transparent p-8 pt-24 text-white">
                  <p className="section-label text-mansion-gold-light">A Different Kind of Replacement</p>
                  <p className="mt-2 font-serif text-2xl">Own real estate without personally managing every moving part.</p>
                </div>
              </div>
              <div>
                <p className="section-label mb-3">Passive Replacement Options</p>
                <h2 className="font-serif text-3xl text-mansion-charcoal sm:text-4xl">
                  Leave Phoenix Property Management Behind.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-mansion-charcoal/70">
                  Selling can be the moment to get out of tenants, toilets, and trash—not sign up for the same workload in a different ZIP code. Compare three distinct paths against the income, control, management, financing, and diversification the next investment needs to deliver.
                </p>
                <div className="mt-7 space-y-5 border-l border-mansion-gold/40 pl-6">
                  <div>
                    <h3 className="font-serif text-xl">Direct Replacement Property</h3>
                    <p className="mt-1 text-sm leading-relaxed text-mansion-charcoal/70">Keep direct control of leasing, financing, improvements, operations, and the future sale.</p>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl">Single-Tenant Net-Lease Property</h3>
                    <p className="mt-1 text-sm leading-relaxed text-mansion-charcoal/70">Retain direct ownership while the lease assigns specified property obligations to the tenant.</p>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl">Professionally Managed DST</h3>
                    <p className="mt-1 text-sm leading-relaxed text-mansion-charcoal/70">Access fractional ownership in institutional-grade real estate without day-to-day landlord decisions, subject to sponsor control, fees, risks, eligibility, and limited liquidity.</p>
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact?request=properties" className="inline-flex items-center justify-center gap-2 bg-mansion-gold px-6 py-3 text-sm font-semibold text-white transition hover:bg-mansion-gold-dark">
                    Get a Free Property List
                    <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href={`tel:${PHONE_NUMBER_URI}`} className="inline-flex items-center justify-center gap-2 border border-mansion-charcoal/25 px-6 py-3 text-sm font-semibold transition hover:border-mansion-gold hover:text-mansion-gold">
                    <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                    Discuss Passive Options
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-gray-200 py-16">
            <p className="section-label mb-6">From Sale Plan to Replacement Closing</p>
            <header className="max-w-3xl">
              <h2 className="font-serif text-3xl text-mansion-charcoal sm:text-4xl">How a Phoenix 1031 Exchange Moves Forward.</h2>
              <p className="mt-4 text-base leading-relaxed text-mansion-charcoal/70">The exchange calendar matters, but the story begins with a sale decision and ends with a replacement that can actually close.</p>
            </header>
            <div className="mt-10 grid gap-px bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Before You Sell", "Clarify ownership, use, basis questions, expected equity, debt, management goals, and the professionals already involved.", LandmarkIcon],
                ["Once Under Contract", "Engage an independent qualified intermediary before closing and align escrow, title, lender, and document requirements.", CalendarIcon],
                ["During Property Search", "Compare primary and backup candidates for income, control, workload, diligence, financing, risk, and closing probability.", SearchIcon],
                ["Through Replacement Closing", "Keep title, inspections, insurance, financing, funding instructions, and advisor questions moving toward one finish line.", ShieldCheckIcon],
              ].map(([title, description, Icon]) => {
                const ProcessIcon = Icon as typeof LandmarkIcon;
                return (
                  <article key={title as string} className="bg-white p-7">
                    <div className="flex h-11 w-11 items-center justify-center bg-mansion-gold/10 text-mansion-gold">
                      <ProcessIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 font-serif text-xl">{title as string}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-mansion-charcoal/70">{description as string}</p>
                  </article>
                );
              })}
            </div>
            <div className="mt-8 flex flex-col gap-4 bg-mansion-navy p-7 text-white sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-serif text-2xl">Is this your first 1031 exchange?</p>
                <p className="mt-2 text-sm text-white/75">Talk through the sale, timing, property choices, and next steps with a Phoenix 1031 expert.</p>
              </div>
              <Link href={`tel:${PHONE_NUMBER_URI}`} className="inline-flex flex-none items-center justify-center gap-2 bg-mansion-gold px-6 py-3 text-sm font-semibold text-white transition hover:bg-mansion-gold-dark">
                <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                Call {PHONE_NUMBER}
              </Link>
            </div>
          </section>

          <section className="border-b border-gray-200 py-16">
            <header className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <p className="section-label mb-3">Phoenix 1031 Exchange Solutions</p>
                <h2 className="font-serif text-3xl text-mansion-charcoal sm:text-4xl">The Help Property Owners Actually Need.</h2>
                <p className="mt-4 text-base leading-relaxed text-mansion-charcoal/70">Free guidance begins with the planned sale, then brings the replacement search and independent specialists into a workable path.</p>
              </div>
              <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-mansion-gold hover:text-mansion-gold-dark">View All Solutions<ArrowRightIcon className="h-4 w-4" aria-hidden="true" /></Link>
            </header>
            <div className="grid gap-px bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Turnkey 1031 Exchange Solutions", "Build one sale-to-replacement plan around the transaction, calendar, property search, and independent professional team.", "/services/forward-exchange-coordination"],
                ["Replacement Property Search", "Create a practical brief and compare direct, net-lease, local, and nationwide replacement candidates.", "/services/replacement-property-shortlist"],
                ["DST and Passive Replacement Options", "Review professionally managed real estate choices for owners seeking less day-to-day property responsibility.", "/services/dst-placement-advisory"],
                ["Qualified Intermediary Introduction", "Connect with an independent QI before closing so proceeds and exchange documents are handled correctly.", "/services/qualified-intermediary-coordination"],
                ["Inherited Investment Property", "Organize ownership, use, basis questions, co-owner priorities, and disposition choices before a sale advances.", "/services/inherited-property-capital-gains"],
                ["Reverse and Improvement Exchange Solutions", "Explore more complex acquisition timing or property-improvement needs with the right specialists involved early.", "/services/reverse-exchange-structuring"],
              ].map(([title, description, href]) => (
                <Link key={title} href={href} className="group flex min-h-56 flex-col justify-between bg-white p-7 transition hover:bg-gray-50">
                  <div>
                    <h3 className="font-serif text-xl">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-mansion-charcoal/70">{description}</p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-mansion-gold">Learn More<ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" /></span>
                </Link>
              ))}
            </div>
          </section>

          <section className="border-b border-gray-200 py-16">
            <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="section-label mb-3">Greater Phoenix and Nationwide Options</p>
                <h2 className="font-serif text-3xl text-mansion-charcoal sm:text-4xl">Start Locally. Search for the Right Replacement Nationally.</h2>
                <p className="mt-4 text-base leading-relaxed text-mansion-charcoal/70">Get local help with a Phoenix-area sale while comparing replacement property in Arizona and qualifying markets across the country.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/locations" className="inline-flex items-center justify-center gap-2 border border-mansion-charcoal/20 px-5 py-3 text-sm font-semibold transition hover:border-mansion-gold hover:text-mansion-gold">View All Markets</Link>
                <Link href="/contact?request=properties" className="inline-flex items-center justify-center gap-2 bg-mansion-gold px-5 py-3 text-sm font-semibold text-white transition hover:bg-mansion-gold-dark">Get a Free Property List<ArrowRightIcon className="h-4 w-4" aria-hidden="true" /></Link>
              </div>
            </header>
            <HomepageServiceArea locations={locations} />
          </section>

          <section className="border-b border-gray-200 py-16">
            <header className="mb-10 max-w-3xl">
              <p className="section-label mb-3">Planning Resources</p>
              <h2 className="font-serif text-3xl text-mansion-charcoal sm:text-4xl">Use the Tools When the Transaction Needs Them.</h2>
              <p className="mt-4 text-base leading-relaxed text-mansion-charcoal/70">These focused resources can help frame questions for the qualified intermediary, CPA, attorney, lender, and closing team without distracting from the property decision.</p>
            </header>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Boot Calculator", "Model cash received and mortgage relief to prepare better questions for a tax advisor.", "/tools/boot-calculator", ScaleIcon],
                ["Exchange Cost Estimator", "Outline potential intermediary and transaction costs before the replacement plan is finalized.", "/tools/exchange-cost-estimator", CalculatorIcon],
                ["Identification Rules Checker", "Review a proposed identification list before it is delivered through the proper exchange process.", "/tools/identification-rules-checker", ClockIcon],
              ].map(([title, description, href, Icon]) => {
                const ToolIcon = Icon as typeof ScaleIcon;
                return (
                  <Link key={title as string} href={href as string} className="group bg-mansion-navy p-7 text-white transition hover:bg-mansion-navy-light">
                    <ToolIcon className="h-9 w-9 text-mansion-gold" aria-hidden="true" />
                    <h3 className="mt-5 font-serif text-xl text-white">{title as string}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/75">{description as string}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-mansion-gold-light">Open Tool<ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" /></span>
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="border-b border-gray-200 py-16">
            <p className="section-label mb-3">Phoenix 1031 Exchange FAQ</p>
            <h2 className="font-serif text-3xl text-mansion-charcoal sm:text-4xl">Questions Property Owners Ask Before They Sell.</h2>
            <div className="mt-10 divide-y divide-gray-200">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-6">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg text-mansion-charcoal">
                    <span className="font-serif">{faq.question}</span>
                    <span className="flex h-8 w-8 flex-none items-center justify-center border border-gray-300 text-mansion-gold transition group-open:rotate-45 group-open:border-mansion-gold">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                    </span>
                  </summary>
                  <p className="mt-4 max-w-4xl pr-12 text-sm leading-relaxed text-mansion-charcoal/70">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section id="contact-form" className="py-16">
            <div className="mx-auto max-w-4xl">
              <p className="section-label mb-3 text-center">Free Phoenix Exchange Guidance</p>
              <LeadForm />
            </div>
          </section>
        </div>
      </main>
      {[organizationJsonLd, localBusinessJsonLd, professionalServiceJsonLd, websiteJsonLd, faqJsonLd].map((data, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
    </div>
  );
}
