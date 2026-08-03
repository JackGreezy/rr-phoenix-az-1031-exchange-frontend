import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { ArrowRightIcon, PhoneIcon } from "@/components/icons";
import {
  PHONE_NUMBER,
  PHONE_NUMBER_URI,
  PRIMARY_CITY,
  PRIMARY_STATE_ABBR,
  SITE_DOMAIN,
} from "@/lib/config";

export const metadata: Metadata = {
  title: "About Our Turnkey Phoenix 1031 Exchange Solutions",
  description: `Learn how 1031 Exchange of ${PRIMARY_CITY} helps property owners move from a planned sale to direct, net-lease, or DST replacement options with the right independent professionals involved.`,
  alternates: { canonical: `${SITE_DOMAIN}/about` },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]} />

        <article className="pt-8">
          <header className="mb-14 max-w-4xl">
            <p className="section-label mb-3">About 1031 Exchange of Phoenix</p>
            <h1 className="font-serif text-4xl text-mansion-charcoal sm:text-5xl">
              Turnkey 1031 Exchange Solutions for Phoenix Property Owners
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-mansion-charcoal/70">
              A 1031 exchange should begin with the reason a property owner wants to sell—not a stack of technical rules. We help turn that sale objective into one organized path toward a qualified intermediary, a workable replacement search, and a closing team that understands the plan.
            </p>
          </header>

          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-10">
              <section className="border-b border-gray-200 pb-9">
                <h2 className="font-serif text-2xl text-mansion-charcoal">One Complete Plan</h2>
                <p className="mt-4 text-base leading-relaxed text-mansion-charcoal/80">
                  The planned sale, expected equity, debt, exchange calendar, management goals, replacement criteria, and closing requirements all affect one another. Our role is to help the owner see those moving parts together and bring in the independent professionals the transaction requires.
                </p>
              </section>

              <section className="border-b border-gray-200 pb-9">
                <h2 className="font-serif text-2xl text-mansion-charcoal">More Than One Replacement Path</h2>
                <p className="mt-4 text-base leading-relaxed text-mansion-charcoal/80">
                  Another direct Phoenix property may be right for an owner who wants control. A single-tenant net-lease property can change the operating workload. A professionally managed DST may suit an eligible owner seeking to leave day-to-day landlord responsibilities behind. We help compare those choices against the same income, control, diversification, financing, liquidity, and risk objectives.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-mansion-charcoal">Phoenix Service. Nationwide Property Choices.</h2>
                <p className="mt-4 text-base leading-relaxed text-mansion-charcoal/80">
                  Property owners across {PRIMARY_CITY} and {PRIMARY_STATE_ABBR} can receive local help with the sale while considering qualifying replacement real estate in Arizona and nationwide. The search stays tied to the transaction facts and the owner’s desired role after closing.
                </p>
              </section>
            </div>

            <div>
              <p className="section-label mb-4">How We Help</p>
              <div className="grid gap-px bg-gray-200">
                {[
                  ["Start With the Sale Objective", "Clarify why the current property no longer fits, what the next investment must accomplish, and which facts need professional review before listing or closing."],
                  ["Build the Replacement Brief", "Define realistic criteria for direct property, net-lease property, and available DST interests, including workload, control, income, debt, diversification, diligence, and closing feasibility."],
                  ["Move the Team Toward Closing", "Keep open questions visible while the independent qualified intermediary, CPA, attorney, brokers, lender, title company, inspectors, and other licensed professionals handle their respective work."],
                ].map(([title, description]) => (
                  <section key={title} className="bg-white p-7">
                    <h2 className="font-serif text-xl text-mansion-charcoal">{title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-mansion-charcoal/70">{description}</p>
                  </section>
                ))}
              </div>
              <div className="mt-7 border border-mansion-gold/25 bg-mansion-gold/5 p-6">
                <p className="font-serif text-xl text-mansion-charcoal">Free guidance, built around the actual transaction.</p>
                <p className="mt-3 text-sm leading-relaxed text-mansion-charcoal/70">Tax and legal conclusions belong to the owner’s CPA and counsel. Qualified-intermediary, brokerage, lending, and securities work is handled by the appropriate independent professionals.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-mansion-navy p-10 text-center text-white">
            <h2 className="font-serif text-3xl text-white">Tell Us What You Want the Sale to Change.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/75">Request a free property list or talk through a planned sale with a Phoenix 1031 expert.</p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact?request=properties" className="inline-flex items-center justify-center gap-2 bg-mansion-gold px-6 py-3 text-base font-semibold text-white transition hover:bg-mansion-gold-dark">
                Get a Free Property List
                <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link href={`tel:${PHONE_NUMBER_URI}`} className="inline-flex items-center justify-center gap-2 border border-white/50 px-6 py-3 text-base font-semibold text-white transition hover:bg-white hover:text-mansion-navy">
                <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                Call {PHONE_NUMBER}
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
