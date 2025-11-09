import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import {
  PRIMARY_CITY,
  PRIMARY_STATE_ABBR,
  SITE_DOMAIN,
} from "@/lib/config";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us | 1031 Exchange Property Identification",
  description: `We help ${PRIMARY_CITY} investors identify potential replacement properties for Section 1031 exchanges. We coordinate with Qualified Intermediaries and tax advisors.`,
  alternates: {
    canonical: `${SITE_DOMAIN}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-8 sm:px-10 lg:px-16">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
          ]}
        />

        <article className="space-y-10 pt-8">
          <header className="max-w-3xl space-y-4">
            <h1 className="font-playfair text-4xl font-bold text-[#2A2A2A] sm:text-5xl">
              About 1031 Exchange of Phoenix
            </h1>
            <p className="text-base text-[#2A2A2A]/75 sm:text-lg">
              We help investors identify potential replacement properties for
              Section 1031 exchanges. Our focus is on property matching,
              timeline coordination, and connecting you with qualified
              professionals.
            </p>
          </header>

          <div className="prose prose-lg max-w-none space-y-8 text-[#2A2A2A]">
            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-bold text-[#2A2A2A]">
                What We Do
              </h2>
              <p className="text-base leading-relaxed">
                This site helps investors identify potential replacement
                properties for Section 1031 exchanges. We provide secure intake
                processes, property matching workflows, and coordination with
                third party Qualified Intermediaries and lenders.
              </p>
              <p className="text-base leading-relaxed">
                Our team understands the deadlines, identification rules, and
                documentation requirements that keep exchanges compliant. We
                connect investors with vetted replacement options and coordinate
                timelines with intermediaries and closing teams.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-bold text-[#2A2A2A]">
                What We Are Not
              </h2>
              <p className="text-base leading-relaxed">
                This site is not a Qualified Intermediary. We are not a law
                firm, broker, or CPA. We do not provide tax or legal advice.
              </p>
              <p className="text-base leading-relaxed">
                Users should consult a Qualified Intermediary and tax advisor
                before acting on any exchange transaction. We facilitate
                connections and provide educational resources, but final
                decisions require professional guidance.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-bold text-[#2A2A2A]">
                Our Process
              </h2>
              <div className="space-y-6">
                <div className="rounded-2xl border border-white/70 bg-white/70 p-6 shadow-[0_12px_40px_rgba(24,24,24,0.06)]">
                  <h3 className="font-inter text-xl font-medium text-[#2A2A2A]">
                    Secure Intake
                  </h3>
                  <p className="mt-3 text-sm text-[#2A2A2A]/75">
                    We collect your exchange timeline, property profile, and
                    investment objectives through encrypted forms. Your
                    information remains confidential and is shared only with
                    authorized intermediaries and advisors.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/70 bg-white/70 p-6 shadow-[0_12px_40px_rgba(24,24,24,0.06)]">
                  <h3 className="font-inter text-xl font-medium text-[#2A2A2A]">
                    Property Matching Workflow
                  </h3>
                  <p className="mt-3 text-sm text-[#2A2A2A]/75">
                    Our team analyzes your criteria and presents vetted
                    replacement property options. We coordinate with listing
                    agents, verify closing timelines, and ensure candidates meet
                    your exchange requirements.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/70 bg-white/70 p-6 shadow-[0_12px_40px_rgba(24,24,24,0.06)]">
                  <h3 className="font-inter text-xl font-medium text-[#2A2A2A]">
                    Third Party Coordination
                  </h3>
                  <p className="mt-3 text-sm text-[#2A2A2A]/75">
                    We work alongside Qualified Intermediaries to ensure funds
                    are handled correctly. We coordinate with lenders for
                    financing timelines and connect investors with tax advisors
                    for Form 8824 preparation.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-bold text-[#2A2A2A]">
                Serving {PRIMARY_CITY} and {PRIMARY_STATE_ABBR}
              </h2>
              <p className="text-base leading-relaxed">
                Our team understands local market conditions, title timelines,
                and county filing requirements across {PRIMARY_CITY} and
                surrounding areas. We coordinate exchanges that span multiple
                jurisdictions and ensure compliance with {PRIMARY_STATE_ABBR} regulations.
              </p>
            </section>
          </div>

          <div className="rounded-2xl border border-[#006E7F]/20 bg-[#006E7F]/8 p-6 text-sm text-[#2A2A2A]/80">
            <p className="font-semibold text-[#006E7F]">
              Important Disclaimer
            </p>
            <p className="mt-2">
              This site helps investors identify potential replacement properties
              for Section 1031 exchanges. This site is not a Qualified
              Intermediary, law firm, broker, or CPA. Users should consult a
              Qualified Intermediary and tax advisor before acting.
            </p>
          </div>

          <div className="rounded-3xl border border-white/70 bg-white/90 p-10 shadow-[0_32px_120px_rgba(24,24,24,0.08)]">
            <div className="space-y-6 text-center">
              <h2 className="font-playfair text-3xl font-bold text-[#2A2A2A]">
                Ready to start your exchange?
              </h2>
              <p className="text-base text-[#2A2A2A]/75">
                Connect with our team to discuss your replacement property needs
                and timeline.
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
        </article>
      </div>
    </div>
  );
}

