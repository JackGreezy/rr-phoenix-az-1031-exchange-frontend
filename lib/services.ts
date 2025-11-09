import { COMPANY_NAME, SITE_DOMAIN } from "./config";

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  overview: string;
  highlights: string[];
  deliverables: string[];
  category: string;
  keywords: string[];
  faq: Array<{ question: string; answer: string }>;
  seoTitle: string;
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: "forward-exchange-coordination",
    name: "Forward Exchange Coordination",
    shortDescription:
      "Structured project management for investors selling and replacing property in Phoenix, AZ.",
    overview:
      "Our forward exchange team builds a clear roadmap from listing through replacement closing. We coordinate with listing agents, escrow officers, and qualified intermediaries so every disclosure, wire, and signature aligns with IRS rules.",
    highlights: [
      "Pre-listing consultation to align sale contracts with exchange requirements.",
      "Calendar driven tracking of the 45 day identification and 180 day completion windows.",
      "Document checklists tuned to Maricopa County recording procedures.",
    ],
    deliverables: [
      "Milestone brief detailing tasks, ownership, and current status.",
      "Identification templates covering three property and 200 percent strategies.",
      "Weekly summary email outlining outstanding items for the Phoenix transaction.",
    ],
    category: "Exchange Management",
    keywords: [
      "forward 1031 Exchange of Phoenix",
      "phoenix exchange coordination",
      "maricopa county 1031 timeline",
    ],
    faq: [
      {
        question: "When should a forward exchange plan start in Phoenix, AZ?",
        answer:
          "Planning should begin before the sale contract is executed so earnest money instructions and intermediary agreements are ready once the 45 day clock starts.",
      },
      {
        question: "Do you coordinate with existing advisors?",
        answer:
          "Yes. We collaborate with the investor’s attorney, CPA, lender, and intermediary to keep every Phoenix deadline visible to the team.",
      },
      {
        question: "How are updates delivered?",
        answer:
          "Investors receive a consolidated timeline update each week along with urgent alerts when signatures, inspections, or lender items are due.",
      },
    ],
    seoTitle: `Forward Exchange Coordination | ${COMPANY_NAME}`,
    seoDescription:
      "Phoenix 1031 exchange coordination with documented timelines, identification templates, and escrow alignment.",
  },
  {
    slug: "replacement-property-shortlist",
    name: "Replacement Property Shortlist",
    shortDescription:
      "Targeted replacement sourcing focused on cash flowing assets across greater Phoenix.",
    overview:
      "We evaluate investor objectives, debt requirements, and hold periods to produce a curated shortlist of replacement options. Multifamily, industrial, DST, and net lease candidates include rent roll summaries, expense benchmarks, and risk notes.",
    highlights: [
      "Market scans across Phoenix, Scottsdale, Tempe, Mesa, Chandler, and Gilbert.",
      "Rent roll and trailing twelve analysis for every shortlisted property.",
      "Financing compatibility review covering leverage, DSCR, and amortization.",
    ],
    deliverables: [
      "Three to five candidate profiles with pricing guidance and upside considerations.",
      "Debt replacement worksheet with side-by-side loan scenarios.",
      "Identification decision matrix ranking assets against investor criteria.",
    ],
    category: "Replacement Strategy",
    keywords: [
      "phoenix replacement property list",
      "1031 property search arizona",
      "phoenix investment shortlist",
    ],
    faq: [
      {
        question: "How do you qualify shortlist properties?",
        answer:
          "We review leases, vendor contracts, and local absorption trends to confirm that each candidate can close within the 180 day exchange period.",
      },
      {
        question: "Are DSTs or TICs included?",
        answer:
          "Yes. When appropriate we include DST, TIC, or fractional interests with verified sponsor track records and Phoenix investor demand.",
      },
      {
        question: "Can the shortlist include out-of-state assets?",
        answer:
          "If diversification is part of the strategy we present options inside and outside Arizona while prioritizing feasibility for the Phoenix timeline.",
      },
    ],
    seoTitle: `Replacement Property Shortlist | ${COMPANY_NAME}`,
    seoDescription:
      "Phoenix and statewide property identification support with rent roll analysis, financing comparisons, and investor-aligned scoring.",
  },
  {
    slug: "three-property-identification-plan",
    name: "Three Property Identification Plan",
    shortDescription:
      "Risk-aware documentation and ranking for investors selecting the three property rule.",
    overview:
      "Our identification plan ranks primary and backup assets, prepares ready-to-sign letters, and provides contingency steps if a property falls out. Each plan includes data to justify values for intermediary records.",
    highlights: [
      "Priority scoring based on NOI, tenant strength, and closing probability.",
      "Legal-ready identification letter tailored to Phoenix intermediaries.",
      "Contingency pathways for inspections, financing shifts, and appraisal gaps.",
    ],
    deliverables: [
      "Identification workbook with due diligence checkpoints and deadlines.",
      "Backup property roster with documented contact attempts.",
      "Submission checklist for the intermediary and closing team.",
    ],
    category: "Identification Strategy",
    keywords: [
      "three property rule phoenix",
      "phoenix identification letter",
      "1031 backup property plan",
    ],
    faq: [
      {
        question: "When is the three property rule preferred?",
        answer:
          "Investors choose the three property rule when each candidate exceeds the 200 percent threshold yet provides strong certainty of closing.",
      },
      {
        question: "What happens if a property is withdrawn?",
        answer:
          "We initiate the backup plan, notify the intermediary, and update identification paperwork to keep the Phoenix exchange compliant.",
      },
      {
        question: "Are property tours supported?",
        answer:
          "Yes. We coordinate tours and prepare question lists so investors capture the data required for final selection.",
      },
    ],
    seoTitle: `Three Property Identification Plan | ${COMPANY_NAME}`,
    seoDescription:
      "Phoenix three property identification support covering documentation, ranking, and contingency execution.",
  },
  {
    slug: "two-hundred-percent-identification-modeling",
    name: "200 Percent Identification Modeling",
    shortDescription:
      "Aggregate value monitoring and documentation for investors applying the 200 percent rule.",
    overview:
      "The 200 percent rule demands precise record keeping. We monitor aggregate values, maintain contact logs, and prioritize assets based on closing readiness to protect exchange compliance.",
    highlights: [
      "Real-time ledger showing identified value against the 200 percent ceiling.",
      "Inspection and financing tracker across multifamily, industrial, retail, and land.",
      "Alerts at 180 percent, 190 percent, and 195 percent to prompt action.",
    ],
    deliverables: [
      "Identification ledger for submission to the intermediary.",
      "Risk report highlighting properties with unresolved contingencies.",
      "Weekly briefing summarizing progress across all Phoenix candidates.",
    ],
    category: "Identification Strategy",
    keywords: [
      "200 percent rule phoenix",
      "multi property identification az",
      "phoenix aggregate value tracker",
    ],
    faq: [
      {
        question: "Who benefits from the 200 percent rule?",
        answer:
          "Investors seeking optionality across asset classes use the rule to list more than three candidates while closing on the most attractive properties.",
      },
      {
        question: "How is value tracked?",
        answer:
          "We maintain a shared ledger with contract values, earnest deposits, and inspection status so totals stay within the permitted range.",
      },
      {
        question: "Does the ledger include backup assets?",
        answer:
          "Yes. Backup options are flagged with notes explaining why they remain viable replacements if priorities shift.",
      },
    ],
    seoTitle: `200 Percent Identification Modeling | ${COMPANY_NAME}`,
    seoDescription:
      "Phoenix identification modeling for investors leveraging the 200 percent rule with aggregate value tracking and compliance alerts.",
  },
  {
    slug: "ninety-five-percent-portfolio-oversight",
    name: "95 Percent Portfolio Oversight",
    shortDescription:
      "Portfolio execution oversight for exchanges identifying numerous replacement properties.",
    overview:
      "Large exchange portfolios rely on disciplined sequencing. We coordinate inspections, closing calendars, and intermediary reporting so investors acquire at least 95 percent of the identified value.",
    highlights: [
      "Portfolio dashboards covering every property, escrow, and lender milestone.",
      "Cash flow staging to ensure equity and debt resources align with closing order.",
      "Daily status updates during critical closing windows.",
    ],
    deliverables: [
      "Portfolio execution schedule with responsible parties for each task.",
      "Risk mitigation memo identifying bottlenecks and required approvals.",
      "Post-closing reconciliation package summarizing settlement statements.",
    ],
    category: "Identification Strategy",
    keywords: [
      "95 percent rule phoenix",
      "high volume exchange arizona",
      "phoenix portfolio oversight",
    ],
    faq: [
      {
        question: "When should the 95 percent rule be used?",
        answer:
          "The rule becomes relevant when an investor identifies numerous assets and expects to close on nearly all of them within 180 days.",
      },
      {
        question: "How are daily updates handled?",
        answer:
          "We distribute concise morning summaries covering inspections, financing, and document status for every Phoenix closing.",
      },
      {
        question: "Can multiple intermediaries participate?",
        answer:
          "We coordinate across one or more qualified intermediaries to keep documentation synchronized.",
      },
    ],
    seoTitle: `95 Percent Portfolio Oversight | ${COMPANY_NAME}`,
    seoDescription:
      "Phoenix portfolio management for investors applying the 95 percent identification rule with coordinated calendars and reconciliations.",
  },
  {
    slug: "reverse-exchange-structuring",
    name: "Reverse Exchange Structuring",
    shortDescription:
      "Exchange accommodation titleholder planning, financing support, and compliance documentation.",
    overview:
      "Reverse exchanges allow investors to secure replacement property before selling. We select and coordinate with exchange accommodation titleholders, align lender requirements, and manage the 180 day compliance timeline.",
    highlights: [
      "Entity diagrams showing parking arrangements, guarantees, and exit steps.",
      "Loan coordination detailing collateral, covenants, and guarantor obligations.",
      "Holding cost modeling to forecast cash requirements during the parking period.",
    ],
    deliverables: [
      "Reverse exchange implementation plan with day-by-day milestones.",
      "Risk assessment outlining tax, financing, and operational considerations.",
      "Closing checklist to transition title from the EAT back to the investor.",
    ],
    category: "Alternative Exchange Structures",
    keywords: [
      "reverse 1031 Exchange of Phoenix",
      "exchange accommodation titleholder az",
      "phoenix reverse exchange help",
    ],
    faq: [
      {
        question: "Why choose a reverse exchange?",
        answer:
          "Investors use reverse exchanges when a desirable replacement asset must close quickly and waiting for the relinquished sale would create unacceptable risk.",
      },
      {
        question: "Does the EAT hold title the entire time?",
        answer:
          "Yes. The EAT temporarily holds title until the relinquished property closes, after which title transfers to the investor.",
      },
      {
        question: "How do lenders respond to reverse structures?",
        answer:
          "We work with lenders so guarantees, collateral, and covenants remain enforceable while the EAT is on title.",
      },
    ],
    seoTitle: `Reverse Exchange Structuring | ${COMPANY_NAME}`,
    seoDescription:
      "Reverse 1031 exchange planning for Phoenix investors, covering EAT coordination, financing logistics, and compliance schedules.",
  },
  {
    slug: "improvement-exchange-management",
    name: "Improvement Exchange Management",
    shortDescription:
      "Construction draw oversight and documentation for build-to-suit 1031 exchanges.",
    overview:
      "Improvement exchanges require careful alignment of construction milestones with intermediary rules. We manage draw requests, change orders, and completion evidence so improvements qualify within 180 days.",
    highlights: [
      "Scope reconciliation between construction agreements and exchange documents.",
      "Draw request procedures with lien waiver tracking and backup invoices.",
      "Field progress monitoring through local project managers.",
    ],
    deliverables: [
      "Construction timeline with milestone approvals and responsible parties.",
      "Draw request templates accepted by qualified intermediaries.",
      "Completion package summarizing improvements, photographs, and certifications.",
    ],
    category: "Alternative Exchange Structures",
    keywords: [
      "improvement exchange phoenix",
      "build to suit 1031 arizona",
      "phoenix construction exchange",
    ],
    faq: [
      {
        question: "What qualifies as an improvement expense?",
        answer:
          "Capital improvements that become part of the real property and are completed before the 180 day deadline typically qualify.",
      },
      {
        question: "How are draws authorized?",
        answer:
          "We gather contractor invoices, lien waivers, and inspection reports before submitting draw packages to the intermediary.",
      },
      {
        question: "Can tenant improvements be included?",
        answer:
          "Qualifying tenant improvements are included when they become part of the real property and meet exchange timing rules.",
      },
    ],
    seoTitle: `Improvement Exchange Management | ${COMPANY_NAME}`,
    seoDescription:
      "Build-to-suit 1031 exchange management in Phoenix with draw oversight, documentation, and completion packages.",
  },
  {
    slug: "dst-placement-advisory",
    name: "DST Placement Advisory",
    shortDescription:
      "Delaware Statutory Trust evaluation and documentation for passive exchange options.",
    overview:
      "DSTs offer passive ownership when direct property management is not desired. We review sponsor history, leverage, assets under management, and investor suitability to match offerings with Phoenix objectives.",
    highlights: [
      "Sponsor due diligence covering distribution consistency and asset performance.",
      "Loan review focused on maturity, covenants, and leverage ratios.",
      "Cash flow projections compared with Phoenix cap rate and rent trends.",
    ],
    deliverables: [
      "DST comparison matrix summarizing structure, risks, and fees.",
      "Suitability documentation package for investor and advisor records.",
      "Identification wording aligned with DST subscription requirements.",
    ],
    category: "Passive Strategies",
    keywords: [
      "phoenix dst advisor",
      "1031 dst options arizona",
      "dst suitability phoenix",
    ],
    faq: [
      {
        question: "How are DSTs selected?",
        answer:
          "We review sponsor track records, property mix, and leverage levels to identify offerings that match the investor’s objectives and timeline.",
      },
      {
        question: "Do you assist with subscription paperwork?",
        answer:
          "Yes. We coordinate documentation with the sponsor and intermediary to maintain compliance and accurate record keeping.",
      },
      {
        question: "Can DSTs be combined with direct property?",
        answer:
          "Many Phoenix investors blend DST interests with direct acquisitions to balance diversification and control.",
      },
    ],
    seoTitle: `DST Placement Advisory | ${COMPANY_NAME}`,
    seoDescription:
      "Delaware Statutory Trust guidance for Phoenix exchanges with sponsor vetting, documentation, and identification support.",
  },
  {
    slug: "qualified-intermediary-coordination",
    name: "Qualified Intermediary Coordination",
    shortDescription:
      "Bonded intermediary referrals, wire verification, and document exchange management.",
    overview:
      "We maintain relationships with proven qualified intermediaries and act as the investor’s point of contact to keep agreements, wires, and reporting secure throughout the exchange.",
    highlights: [
      "Comparison of intermediary security practices, fee structures, and bonding.",
      "Wire authentication procedures including call-back verification.",
      "Secure document transfer through encrypted portals and audit logs.",
    ],
    deliverables: [
      "Intermediary evaluation summary with due diligence notes.",
      "Wire verification checklist for sale and purchase escrows.",
      "Post-closing documentation package containing executed exchange forms.",
    ],
    category: "Exchange Management",
    keywords: [
      "qualified intermediary phoenix",
      "1031 intermediary support arizona",
      "secure exchange coordination",
    ],
    faq: [
      {
        question: "Do you select the intermediary?",
        answer:
          "We provide vetted options and coordinate onboarding. Investors make the final selection.",
      },
      {
        question: "How are security risks mitigated?",
        answer:
          "Every wire instruction is confirmed through dual-factor procedures and recorded in our audit log.",
      },
      {
        question: "Are intermediaries available statewide?",
        answer:
          "Yes. We coordinate with bonded intermediaries serving Phoenix and the broader Arizona market.",
      },
    ],
    seoTitle: `Qualified Intermediary Coordination | ${COMPANY_NAME}`,
    seoDescription:
      "Qualified intermediary coordination for Phoenix investors with security controls and documentation management.",
  },
  {
    slug: "attorney-and-cpa-alignment",
    name: "Attorney and CPA Alignment",
    shortDescription:
      "Communication framework linking Phoenix legal and tax advisors with exchange milestones.",
    overview:
      "1031 exchanges touch legal and tax disciplines. We facilitate structured briefings, secure document sharing, and boot or recapture analyses so attorneys and CPAs can advise confidently.",
    highlights: [
      "Encrypted document vault with role-based access for advisors.",
      "Boot and depreciation summaries prepared for CPA review.",
      "Coordination checkpoints before identification and before closing.",
    ],
    deliverables: [
      "Advisor roster and communication protocol for the Phoenix exchange.",
      "Boot analysis worksheet outlining cash, debt, and personal property adjustments.",
      "Post-closing summary with Form 8824 reference data.",
    ],
    category: "Advisor Coordination",
    keywords: [
      "phoenix 1031 attorney coordination",
      "cpa alignment 1031 arizona",
      "advisor communication plan phoenix",
    ],
    faq: [
      {
        question: "Do you provide tax or legal advice?",
        answer:
          "No. We support licensed professionals by preparing data, timelines, and documentation so their guidance remains well informed.",
      },
      {
        question: "How is information shared securely?",
        answer:
          "We use encrypted portals with audit trails and multi-factor authentication for every upload and download.",
      },
      {
        question: "Can out-of-state advisors participate?",
        answer:
          "Yes. We coordinate across time zones while ensuring Arizona-specific requirements remain front and center.",
      },
    ],
    seoTitle: `Attorney and CPA Alignment | ${COMPANY_NAME}`,
    seoDescription:
      "Phoenix 1031 advisor coordination with secure document handling, boot summaries, and compliance checkpoints.",
  },
  {
    slug: "timeline-discipline-suite",
    name: "Timeline Discipline Suite",
    shortDescription:
      "Automated reminders, dashboard reporting, and escalation protocols for 1031 deadlines.",
    overview:
      "Missing a deadline can void an exchange. Our suite monitors the timeline, issues reminders, and escalates risks so the investor and advisors stay proactive.",
    highlights: [
      "SMS, email, and calendar notifications at key milestones.",
      "Dashboard with color-coded task statuses and responsible parties.",
      "Escalation ladder for unresolved issues approaching critical dates.",
    ],
    deliverables: [
      "Kickoff timeline briefing with milestone explanations.",
      "Weekly digest summarizing completed and pending tasks.",
      "Escalation log capturing outreach attempts and resolutions.",
    ],
    category: "Deadline Management",
    keywords: [
      "1031 reminders phoenix",
      "exchange timeline tracking az",
      "phoenix deadline management",
    ],
    faq: [
      {
        question: "Can multiple team members receive reminders?",
        answer:
          "Yes. Investors assign recipients so intermediaries, attorneys, lenders, and property managers stay informed.",
      },
      {
        question: "Are reminders customizable?",
        answer:
          "Reminder schedules, channels, and message content are tailored to each exchange.",
      },
      {
        question: "What happens when an item goes overdue?",
        answer:
          "The system escalates the task, notifies stakeholders, and we facilitate resolution steps.",
      },
    ],
    seoTitle: `Timeline Discipline Suite | ${COMPANY_NAME}`,
    seoDescription:
      "Phoenix 1031 deadline management platform featuring automated reminders, dashboards, and escalation workflows.",
  },
  {
    slug: "boot-mitigation-analysis",
    name: "Boot Mitigation Analysis",
    shortDescription:
      "Cash, debt, and personal property modeling to minimize taxable boot during the exchange.",
    overview:
      "Boot exposure is a common risk. We analyze closing statements, financing terms, and replacement pricing to highlight mitigation strategies before day 180.",
    highlights: [
      "Debt replacement comparison showing potential relief-driven boot.",
      "Cash to close projections for sale and purchase escrows.",
      "Personal property review covering fixtures, equipment, and goodwill.",
    ],
    deliverables: [
      "Boot exposure report with recommended adjustments or disclosures.",
      "CPA briefing memo summarizing data inputs and assumptions.",
      "Post-closing reconciliation confirming final taxable amounts.",
    ],
    category: "Tax Planning Support",
    keywords: [
      "boot analysis phoenix",
      "1031 tax planning arizona",
      "debt replacement modeling",
    ],
    faq: [
      {
        question: "Can all boot be eliminated?",
        answer:
          "Not always, but early modeling allows investors to reduce exposure or plan for recognized gain with their CPA.",
      },
      {
        question: "Is boot analysis shared with lenders?",
        answer:
          "We share relevant insights with lenders and advisors when investors authorize collaboration.",
      },
      {
        question: "Does the analysis cover state taxes?",
        answer:
          "Yes. The report references Arizona considerations alongside federal treatment.",
      },
    ],
    seoTitle: `Boot Mitigation Analysis | ${COMPANY_NAME}`,
    seoDescription:
      "Boot modeling for Phoenix 1031 exchanges covering debt replacement, cash proceeds, and personal property adjustments.",
  },
  {
    slug: "depreciation-recapture-briefing",
    name: "Depreciation Recapture Briefing",
    shortDescription:
      "Educational support and documentation for anticipated depreciation recapture.",
    overview:
      "We prepare investors for recapture obligations by summarizing historical depreciation, projecting potential tax exposure, and coordinating with CPAs for filing readiness.",
    highlights: [
      "Review of depreciation schedules and cost recovery methods.",
      "Scenario planning for federal and Arizona recapture treatment.",
      "Checklist aligning Form 8824 entries with intermediary statements.",
    ],
    deliverables: [
      "Recapture summary with estimated ranges and key assumptions.",
      "Meeting notes for CPA coordination sessions.",
      "Post-closing checklist confirming documentation required for filing.",
    ],
    category: "Tax Planning Support",
    keywords: [
      "depreciation recapture phoenix",
      "1031 tax education az",
      "recapture planning arizona",
    ],
    faq: [
      {
        question: "Do you provide tax advice?",
        answer:
          "We do not provide tax advice. Our role is to prepare data and facilitate communication with licensed professionals.",
      },
      {
        question: "When is the briefing delivered?",
        answer:
          "We schedule the session before the relinquished closing so investors can plan ahead of Form 8824 deadlines.",
      },
      {
        question: "Does recapture apply to land?",
        answer:
          "Land itself is not depreciable, but improvements and structures can trigger recapture when they are sold or exchanged.",
      },
    ],
    seoTitle: `Depreciation Recapture Briefing | ${COMPANY_NAME}`,
    seoDescription:
      "Phoenix depreciation recapture education with scenario forecasts and CPA-ready documentation.",
  },
  {
    slug: "multifamily-replacement-scouting",
    name: "Multifamily Replacement Scouting",
    shortDescription:
      "Neighborhood-specific multifamily scouting for Phoenix investors pursuing income stability.",
    overview:
      "We evaluate stabilized, value-add, and build-to-rent communities, reviewing rent comps, operating expenses, and property management readiness to build investor confidence.",
    highlights: [
      "Rent and occupancy benchmarking by submarket and asset class.",
      "Capital expenditure planning for renovations and amenity upgrades.",
      "Operator vetting covering local experience and reporting quality.",
    ],
    deliverables: [
      "Multifamily dossier with financial projections and sensitivity analysis.",
      "Property tour agenda with question guides for on-site evaluations.",
      "Operator comparison chart summarizing management options.",
    ],
    category: "Asset Discovery",
    keywords: [
      "phoenix multifamily 1031",
      "apartment replacement property",
      "build to rent phoenix exchange",
    ],
    faq: [
      {
        question: "Do you support value-add strategies?",
        answer:
          "Yes. We model renovation costs, lease-up timelines, and financing structures suited to value-add execution.",
      },
      {
        question: "How are property managers evaluated?",
        answer:
          "We review track record, reporting packages, technology tools, and staffing plans for each recommended operator.",
      },
      {
        question: "Can out-of-market assets be considered?",
        answer:
          "Yes. We compare Phoenix opportunities with other high-growth metros when diversification is desired.",
      },
    ],
    seoTitle: `Multifamily Replacement Scouting | ${COMPANY_NAME}`,
    seoDescription:
      "Phoenix multifamily scouting with rent benchmarks, capex planning, and manager vetting for 1031 replacements.",
  },
  {
    slug: "industrial-flex-targeting",
    name: "Industrial and Flex Targeting",
    shortDescription:
      "Industrial and flex property sourcing aligned with Phoenix logistics and manufacturing demand.",
    overview:
      "We analyze distribution centers, last-mile facilities, and flex assets, focusing on tenant credit, building specs, and transportation connectivity.",
    highlights: [
      "Tenant credit assessment with rollover and renewal risk scoring.",
      "Building evaluation covering clear height, dock count, and power capacity.",
      "Logistics scoring based on freeway access, airports, and growth corridors.",
    ],
    deliverables: [
      "Industrial candidate briefs with NOI projections and lease details.",
      "Environmental and inspection checklist tailored to industrial operations.",
      "Market entry memo summarizing Phoenix industrial fundamentals.",
    ],
    category: "Asset Discovery",
    keywords: [
      "phoenix industrial 1031",
      "flex property exchange",
      "logistics replacement property",
    ],
    faq: [
      {
        question: "Do you review environmental reports?",
        answer:
          "Yes. We coordinate Phase I assessments and summarize findings for investor review.",
      },
      {
        question: "Can sale-leasebacks be included?",
        answer:
          "We pursue sale-leaseback opportunities when the tenant’s credit profile aligns with investor risk tolerance.",
      },
      {
        question: "How is expansion potential evaluated?",
        answer:
          "We analyze zoning, site coverage, and building systems to determine if expansion or adaptive reuse is feasible.",
      },
    ],
    seoTitle: `Industrial and Flex Targeting | ${COMPANY_NAME}`,
    seoDescription:
      "Industrial and flex property targeting for Phoenix 1031 investors with tenant credit review and logistics analysis.",
  },
  {
    slug: "medical-office-identification",
    name: "Medical Office Identification",
    shortDescription:
      "Healthcare property identification with tenant diligence and reimbursement analysis.",
    overview:
      "Medical office assets provide resilient income when tenant quality, lease structure, and proximity to care hubs are strong. We vet each factor to build reliable replacement options.",
    highlights: [
      "Tenant specialty analysis and referral network mapping.",
      "Lease review covering escalations, relocation clauses, and equipment ownership.",
      "Expense benchmarking for healthcare-specific operating costs.",
    ],
    deliverables: [
      "Medical office briefing book with NOI projections and demographic data.",
      "Risk register highlighting regulatory or reimbursement considerations.",
      "Tour agenda and due diligence questionnaire for operator meetings.",
    ],
    category: "Asset Discovery",
    keywords: [
      "phoenix medical office 1031",
      "healthcare real estate exchange",
      "medical office scouting arizona",
    ],
    faq: [
      {
        question: "Why target medical office in Phoenix?",
        answer:
          "Population growth and an expanding healthcare network create consistent demand for medical office space across the metro.",
      },
      {
        question: "Do you analyze tenant credit strength?",
        answer:
          "Yes. We review financials, patient volumes, and affiliations with major hospital systems.",
      },
      {
        question: "Are surgery centers included?",
        answer:
          "When investors approve the risk profile we include surgery centers with documented compliance history.",
      },
    ],
    seoTitle: `Medical Office Identification | ${COMPANY_NAME}`,
    seoDescription:
      "Phoenix medical office property scouting with tenant diligence, lease review, and demographic analysis.",
  },
  {
    slug: "net-lease-curation",
    name: "Net Lease and STNL Curation",
    shortDescription:
      "Single-tenant and triple-net property curation tuned to Phoenix income goals.",
    overview:
      "We evaluate corporate credit ratings, lease structures, rent escalations, and tenant creditworthiness to identify stable triple-net lease replacement properties. Our analysis distinguishes between absolute triple-net leases where tenants cover all expenses and regular triple-net leases where landlords may retain minimal structural responsibilities.",
    highlights: [
      "Investment-grade tenant credit analysis using S&P and Moody ratings.",
      "Triple-net lease structure evaluation distinguishing absolute from regular NNN terms.",
      "Corporate guarantee review and operating history assessment.",
      "Trade area demographic analysis with recession-resistance evaluation.",
    ],
    deliverables: [
      "STNL dossier with cash flow forecasts and break-even analysis.",
      "Tenant credit risk matrix comparing guarantee strength and financial stability.",
      "Lease structure summary detailing tenant and landlord expense responsibilities.",
      "Trade area heat map showing household income, population growth, and essential business demand.",
    ],
    category: "Asset Discovery",
    keywords: [
      "phoenix net lease 1031",
      "stnl replacement portfolio",
      "triple net exchange arizona",
    ],
    faq: [
      {
        question: "What is the difference between absolute and regular triple-net leases?",
        answer:
          "Absolute triple-net leases require tenants to cover all property expenses including capital expenditures, while regular triple-net leases may require landlords to maintain structural elements like roofs and parking lots. We evaluate lease structures to ensure investors understand their specific obligations.",
      },
      {
        question: "Do you work with investment-grade corporate tenants?",
        answer:
          "Yes. We prioritize properties with investment-grade corporate tenants featuring S&P and Moody credit ratings, as these provide exceptional security and reduced default risk compared to unrated or lower-credit operators.",
      },
      {
        question: "How are rent escalations evaluated?",
        answer:
          "We verify rent growth schedules, renewal options, and inflation protection mechanisms to ensure long-term yield stability. Many triple-net leases feature periodic escalations that protect against inflation while maintaining consistent monthly income.",
      },
      {
        question: "Can sale-leaseback deals be included?",
        answer:
          "Yes, provided the tenant's financial statements support the lease obligation. Sale-leaseback properties often feature corporate-guaranteed absolute triple-net leases with exceptional security.",
      },
    ],
    seoTitle: `Net Lease and STNL Curation | ${COMPANY_NAME}`,
    seoDescription:
      "Phoenix net lease curation with credit review, triple-net lease structure analysis, and trade area scoring.",
  },
  {
    slug: "self-storage-market-entry",
    name: "Self Storage Market Entry",
    shortDescription:
      "Self storage acquisition support with supply-demand analytics for the Phoenix metro.",
    overview:
      "Self storage remains resilient across Phoenix. We analyze supply ratios, rental trends, and expansion potential to spot operating upside.",
    highlights: [
      "Supply per capita analysis across key submarkets.",
      "Revenue management review including rate tiers and occupancy history.",
      "Expansion feasibility for additional units, RV storage, or climate control.",
    ],
    deliverables: [
      "Self storage feasibility packet with rent projections and expense benchmarks.",
      "Competitive set comparison summarizing amenities and pricing.",
      "Operating improvement checklist for the first 12 months of ownership.",
    ],
    category: "Asset Discovery",
    keywords: [
      "phoenix self storage 1031",
      "storage facility exchange",
      "self storage acquisition az",
    ],
    faq: [
      {
        question: "What drives storage demand in Phoenix?",
        answer:
          "Population growth, seasonal migration, and small business storage needs generate stable occupancy across the metro.",
      },
      {
        question: "Do you evaluate management platforms?",
        answer:
          "Yes. We assess technology, staffing, and marketing programs for each prospective operator.",
      },
      {
        question: "Is expansion considered during due diligence?",
        answer:
          "We review site layout, zoning, and utility capacity to confirm whether expansion or redevelopment is viable.",
      },
    ],
    seoTitle: `Self Storage Market Entry | ${COMPANY_NAME}`,
    seoDescription:
      "Phoenix self storage acquisition analysis with supply metrics, revenue management review, and expansion planning.",
  },
  {
    slug: "hospitality-portfolio-review",
    name: "Hospitality Portfolio Review",
    shortDescription:
      "Hospitality replacement support using tourism analytics and operator diligence.",
    overview:
      "We evaluate flagged and boutique hotels, focusing on RevPAR trends, management performance, brand obligations, and capital needs to confirm suitability for exchange investors.",
    highlights: [
      "Tourism demand and convention calendar analysis for Phoenix and Scottsdale.",
      "Operator diligence covering management fees, staffing, and reporting.",
      "Capital improvement planning to maintain brand standards and guest scores.",
    ],
    deliverables: [
      "Hospitality dossier with RevPAR and ADR projections under multiple scenarios.",
      "Management agreement checklist summarizing responsibilities and fees.",
      "Capital plan identifying immediate repairs and long-term improvements.",
    ],
    category: "Asset Discovery",
    keywords: [
      "phoenix hospitality 1031",
      "hotel exchange arizona",
      "revpar analysis phoenix",
    ],
    faq: [
      {
        question: "Do you include boutique hotels?",
        answer:
          "Yes. Boutique and soft-branded assets are considered when occupancy history supports investor goals.",
      },
      {
        question: "How are brand requirements handled?",
        answer:
          "We review franchise or brand agreements and coordinate approval timelines with the selected flag.",
      },
      {
        question: "Are management transitions supported?",
        answer:
          "We coordinate introductions to third-party operators and document transition requirements.",
      },
    ],
    seoTitle: `Hospitality Portfolio Review | ${COMPANY_NAME}`,
    seoDescription:
      "Hospitality replacement advisory for Phoenix investors with RevPAR analysis, operator vetting, and capital planning.",
  },
  {
    slug: "land-and-entitlement-scouting",
    name: "Land and Entitlement Scouting",
    shortDescription:
      "Entitled and utility-ready land sourcing for Phoenix exchange investors focused on development.",
    overview:
      "We identify parcels with supportive zoning, infrastructure, and market demand. When entitlements are pending, we outline the approval pathway and costs.",
    highlights: [
      "Zoning verification and alignment with the intended use.",
      "Utility capacity review covering water, sewer, power, and access roads.",
      "Comparable land sale analysis with absorption forecasts by submarket.",
    ],
    deliverables: [
      "Land dossier highlighting zoning, entitlements, and development constraints.",
      "Development readiness checklist covering permits and consultant needs.",
      "Risk matrix summarizing environmental, access, and infrastructure factors.",
    ],
    category: "Asset Discovery",
    keywords: [
      "phoenix land 1031",
      "entitled land exchange",
      "development land arizona",
    ],
    faq: [
      {
        question: "Do you work with land use attorneys?",
        answer:
          "We coordinate with Arizona land use counsel to confirm entitlement status and timelines.",
      },
      {
        question: "Can land be combined with DST investments?",
        answer:
          "Yes. Investors often pair land with passive DST tranches to balance development risk.",
      },
      {
        question: "Is utility infrastructure confirmed?",
        answer:
          "We verify utility availability and identify any required off-site improvements before acquisition.",
      },
    ],
    seoTitle: `Land and Entitlement Scouting | ${COMPANY_NAME}`,
    seoDescription:
      "Phoenix land scouting for 1031 investors with zoning verification, utility review, and development readiness analysis.",
  },
  {
    slug: "mixed-use-exchange-advisory",
    name: "Mixed-Use Exchange Advisory",
    shortDescription:
      "Mixed-use property evaluation balancing residential and commercial income streams.",
    overview:
      "Mixed-use assets deliver diversification. We review tenant mixes, shared systems, zoning compliance, and property management requirements to inform investor decisions.",
    highlights: [
      "Tenant mix analysis with income stability scoring.",
      "Shared expense evaluation for utilities, parking, and amenities.",
      "Zoning and permitting verification for current and planned uses.",
    ],
    deliverables: [
      "Mixed-use underwriting model with segmented income projections.",
      "Tenant retention plan summarizing lease expirations and renewal options.",
      "Regulatory report confirming zoning compliance and parking ratios.",
    ],
    category: "Asset Discovery",
    keywords: [
      "phoenix mixed use 1031",
      "live work property exchange",
      "mixed use advisory arizona",
    ],
    faq: [
      {
        question: "Why consider mixed-use properties?",
        answer:
          "They provide multiple income sources and can capture growth in walkable Phoenix districts.",
      },
      {
        question: "How are shared expenses managed?",
        answer:
          "We analyze cost-sharing agreements and pass-through mechanisms to forecast net operating income.",
      },
      {
        question: "Do you review parking compliance?",
        answer:
          "Yes. Parking ratios and access requirements are checked against local ordinances.",
      },
    ],
    seoTitle: `Mixed-Use Exchange Advisory | ${COMPANY_NAME}`,
    seoDescription:
      "Phoenix mixed-use advisory with tenant mix analysis, expense modeling, and zoning confirmation.",
  },
  {
    slug: "market-comparables-and-t12-review",
    name: "Market Comparables and T12 Review",
    shortDescription:
      "Rent roll and trailing twelve analysis validating Phoenix replacement valuations.",
    overview:
      "We combine market comps with rent roll normalization to confirm that purchase pricing matches realistic operating performance.",
    highlights: [
      "Rent roll cleanup addressing concessions, delinquencies, and vacancies.",
      "Expense benchmarking against Phoenix submarket averages.",
      "Capital expenditure recommendations covering reserves and near-term projects.",
    ],
    deliverables: [
      "T12 variance report comparing actuals to pro forma assumptions.",
      "Comparable property set with cap rate and price-per-square-foot data.",
      "Capital plan aligning improvements with investor hold period goals.",
    ],
    category: "Underwriting Support",
    keywords: [
      "phoenix t12 analysis",
      "rent roll review 1031",
      "market comps exchange",
    ],
    faq: [
      {
        question: "Why is T12 analysis important?",
        answer:
          "It exposes true operating performance and prevents overpaying for replacement assets.",
      },
      {
        question: "Do you adjust for seasonal income?",
        answer:
          "Yes. Revenues and expenses are normalized for Phoenix seasonal trends before recommendations are issued.",
      },
      {
        question: "Can lenders use the report?",
        answer:
          "We prepare lender-ready summaries when investors authorize distribution.",
      },
    ],
    seoTitle: `Market Comparables and T12 Review | ${COMPANY_NAME}`,
    seoDescription:
      "Phoenix rent roll and T12 analysis providing valuation confidence and capex planning for 1031 replacements.",
  },
  {
    slug: "lender-preflight-and-term-sheet-review",
    name: "Lender Preflight and Term Sheet Review",
    shortDescription:
      "Financing coordination ensuring debt structures align with exchange timelines.",
    overview:
      "We collect lender proposals, compare terms, and coordinate appraisals and closing requirements so financing supports the exchange strategy.",
    highlights: [
      "Engagement with banks, credit unions, and debt funds active in Phoenix.",
      "Term sheet comparison covering rates, covenants, and prepayment penalties.",
      "Closing calendar aligning lender milestones with 45 day and 180 day obligations.",
    ],
    deliverables: [
      "Lender preflight memo summarizing qualifications and documentation needs.",
      "Side-by-side term sheet comparison matrix.",
      "Closing timeline integrating lender, intermediary, and escrow milestones.",
    ],
    category: "Financing Support",
    keywords: [
      "phoenix 1031 financing",
      "lender coordination arizona",
      "term sheet review 1031",
    ],
    faq: [
      {
        question: "When should lenders be engaged?",
        answer:
          "Ideally before the relinquished property closes so underwriting and approvals support the replacement schedule.",
      },
      {
        question: "Do you negotiate terms?",
        answer:
          "We provide analysis and recommendations the investor can use during lender negotiations.",
      },
      {
        question: "Are bridge loans included?",
        answer:
          "Yes. We evaluate permanent, bridge, and construction debt options based on the investor’s objectives.",
      },
    ],
    seoTitle: `Lender Preflight and Term Sheet Review | ${COMPANY_NAME}`,
    seoDescription:
      "Phoenix lender coordination with term sheet analysis and timeline integration for 1031 exchanges.",
  },
  {
    slug: "timeline-reminder-suite",
    name: "Timeline Reminder Suite",
    shortDescription:
      "Automated reminder setup and dashboard visibility for the Phoenix exchange timeline.",
    overview:
      "This service configures reminder cadences and dashboard reporting so every stakeholder stays aware of identification and completion milestones.",
    highlights: [
      "Custom reminder templates referencing Phoenix timezone and deadlines.",
      "Shared dashboard with filterable tasks and completion history.",
      "Escalation configuration for overdue items.",
    ],
    deliverables: [
      "Reminder calendar with message content for each milestone.",
      "Dashboard access instructions for investors and advisors.",
      "Notification archive summarizing outreach and responses.",
    ],
    category: "Deadline Management",
    keywords: [
      "1031 reminder phoenix",
      "exchange dashboard az",
      "deadline automation 1031",
    ],
    faq: [
      {
        question: "Can reminders be paused?",
        answer:
          "Yes. Reminders can be paused or reassigned once milestones are completed.",
      },
      {
        question: "Do reminders include document links?",
        answer:
          "Secure links are included so stakeholders can act on outstanding items immediately.",
      },
      {
        question: "Is timezone handled automatically?",
        answer:
          "All reminders reference Mountain Standard Time to match Phoenix scheduling.",
      },
    ],
    seoTitle: `Timeline Reminder Suite | ${COMPANY_NAME}`,
    seoDescription:
      "Phoenix 1031 reminder automation with dashboards, escalation workflows, and timezone-aware messaging.",
  },
  {
    slug: "portfolio-alignment-consultation",
    name: "Portfolio Alignment Consultation",
    shortDescription:
      "Strategic consultation aligning exchange objectives with long-term portfolio goals.",
    overview:
      "We review current holdings, risk tolerance, and cash flow needs to define a replacement strategy that supports short and long-term objectives.",
    highlights: [
      "Portfolio diversification analysis by asset class and geography.",
      "Scenario modeling comparing income, appreciation, and leverage outcomes.",
      "Exit planning considerations including refinance or future exchanges.",
    ],
    deliverables: [
      "Portfolio alignment memo summarizing key insights and recommendations.",
      "Scenario comparison workbook covering multiple acquisition paths.",
      "Action plan for the next 30, 60, and 90 days of the exchange process.",
    ],
    category: "Strategic Planning",
    keywords: [
      "phoenix 1031 strategy session",
      "portfolio planning exchange",
      "1031 consultation arizona",
    ],
    faq: [
      {
        question: "Who should attend the consultation?",
        answer:
          "Investors often invite their CPA, attorney, or wealth advisor so all stakeholders remain aligned.",
      },
      {
        question: "Do you review existing property performance?",
        answer:
          "Yes. We analyze cash flow, debt, and market performance to inform the next acquisition.",
      },
      {
        question: "Is the session recorded?",
        answer:
          "We provide detailed notes and key takeaways immediately after the consultation.",
      },
    ],
    seoTitle: `Portfolio Alignment Consultation | ${COMPANY_NAME}`,
    seoDescription:
      "Phoenix 1031 strategy consultation aligning replacement decisions with long-term portfolio objectives.",
  },
  {
    slug: "like-kind-education-series",
    name: "Like-Kind Education Series",
    shortDescription:
      "Educational sessions covering like-kind definitions, timelines, and compliance responsibilities.",
    overview:
      "Educating investors and partners reduces risk. Our sessions explain federal guidance, Arizona considerations, and documentation requirements through practical case studies.",
    highlights: [
      "Like-kind property definitions with Phoenix example scenarios.",
      "Review of IRS Form 8824, Rev. Proc. 2008-16, and identification letter standards.",
      "Guidance for coordinating with intermediaries, attorneys, CPAs, and lenders.",
    ],
    deliverables: [
      "Presentation materials and reference guides tailored to Phoenix exchanges.",
      "Knowledge checklists summarizing key compliance obligations.",
      "Resource index linking to IRS and Arizona Department of Revenue documentation.",
    ],
    category: "Education",
    keywords: [
      "phoenix 1031 education",
      "like kind training arizona",
      "1031 workshop phoenix",
    ],
    faq: [
      {
        question: "Who joins the education series?",
        answer:
          "Investors, brokerage teams, and advisory partners attend to align on exchange terminology and responsibilities.",
      },
      {
        question: "Are sessions updated regularly?",
        answer:
          "We update materials whenever IRS guidance or Arizona regulations change.",
      },
      {
        question: "Do sessions include Q&A?",
        answer:
          "Every session includes an interactive Q&A segment and written follow-up where needed.",
      },
    ],
    seoTitle: `Like-Kind Education Series | ${COMPANY_NAME}`,
    seoDescription:
      "Phoenix 1031 education program covering like-kind rules, documentation, and advisor coordination.",
  },
  {
    slug: "off-market-sourcing-desk",
    name: "Off-Market Sourcing Desk",
    shortDescription:
      "Proactive outreach uncovering off-market replacement opportunities across greater Phoenix.",
    overview:
      "Competitive investors leverage off-market sourcing to secure desirable assets. We combine ownership research, broker relationships, and direct outreach to surface opportunities before they hit the market.",
    highlights: [
      "Ownership research using assessor data, corporate filings, and CoStar records.",
      "Targeted outreach campaigns tailored to asset class and investor criteria.",
      "Confidential opportunity briefings identifying motivation, pricing, and timing.",
    ],
    deliverables: [
      "Weekly sourcing report summarizing outreach, responses, and new leads.",
      "Non-disclosure agreement templates and call scripts for rapid engagement.",
      "Pipeline tracker showing status, pricing, and next steps for each opportunity.",
    ],
    category: "Acquisition Support",
    keywords: [
      "off market 1031 phoenix",
      "exchange opportunity sourcing",
      "phoenix property outreach",
    ],
    faq: [
      {
        question: "How are targets selected?",
        answer:
          "We prioritize owners with assets matching the investor’s criteria, including debt maturity, occupancy trends, and property age.",
      },
      {
        question: "Do you coordinate with buyer agents?",
        answer:
          "Yes. We collaborate with buyer representation and maintain clear communication channels.",
      },
      {
        question: "How is confidentiality protected?",
        answer:
          "Mutual NDAs and documented outreach protocols ensure information remains private.",
      },
    ],
    seoTitle: `Off-Market Sourcing Desk | ${COMPANY_NAME}`,
    seoDescription:
      "Phoenix off-market sourcing support with ownership research, outreach campaigns, and opportunity tracking.",
  },
];

export function getAllServices(): Service[] {
  return services;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(slug: string, limit = 4): Service[] {
  const service = getServiceBySlug(slug);
  if (!service) {
    return services.slice(0, limit);
  }
  const sameCategory = services.filter(
    (item) => item.category === service.category && item.slug !== slug,
  );
  const others = services.filter(
    (item) => item.category !== service.category && item.slug !== slug,
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export function getServiceCanonical(slug: string): string {
  return `${SITE_DOMAIN}/services/${slug}`;
}

