import {
  COMPANY_NAME,
  PRIMARY_CITY,
  PRIMARY_STATE_ABBR,
  SITE_DOMAIN,
} from "./config";

export type Location = {
  slug: string;
  name: string;
  headline: string;
  intro: string;
  subheading: string;
  serviceHighlights: string[];
  faq: Array<{ question: string; answer: string }>;
  seoTitle: string;
  seoDescription: string;
};

const primaryLabel = `${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}`;

export const locations: Location[] = [
  {
    slug: "phoenix",
    name: "Phoenix",
    headline: "Phoenix 1031 Exchange Support",
    intro:
      "Investors in Phoenix rely on structured exchange management to keep fast-moving transactions compliant. We coordinate identification, lending, and advisor communication across Downtown, Midtown, and the Camelback Corridor.",
    subheading:
      "Maricopa County requirements, local title timelines, and cross-market sourcing keep Phoenix investors on schedule.",
    serviceHighlights: [
      "Forward Exchange Coordination",
      "Replacement Property Shortlist",
      "Timeline Discipline Suite",
      "Qualified Intermediary Coordination",
    ],
    faq: [
      {
        question: "How do you support Phoenix 1031 deadlines?",
        answer:
          "We align the exchange calendar with Maricopa County recording windows, maintain weekly status briefings, and escalate risks so Phoenix investors never lose visibility on the 45 day or 180 day milestones.",
      },
      {
        question: "Does the team handle downtown and suburban assets?",
        answer:
          "Yes. We identify replacement properties across Downtown, Midtown, Camelback, Deer Valley, and Sky Harbor industrial corridors to match Phoenix investment goals.",
      },
      {
        question: "Are Phoenix-specific advisors involved?",
        answer:
          "We collaborate with Arizona-qualified attorneys, CPAs, and intermediaries so every Phoenix stakeholder stays aligned from listing through closing.",
      },
      {
        question: "What documentation do Phoenix title companies require?",
        answer:
          "Title and escrow partners need written identification letters, intermediary escrow instructions, and wire authentication logs. We prepare each item in advance to keep closings efficient.",
      },
    ],
    seoTitle: `1031 Exchange Services in Phoenix, AZ | ${COMPANY_NAME}`,
    seoDescription:
      "Deadline management, replacement sourcing, and advisor coordination for Phoenix 1031 investors.",
  },
  {
    slug: "scottsdale",
    name: "Scottsdale",
    headline: "Scottsdale Exchange Guidance",
    intro:
      "From Old Town to the Scottsdale Airpark, investors expect polished replacement assets and precise timing. We pair local underwriting with hospitality and luxury multifamily sourcing to meet Scottsdale objectives.",
    subheading:
      "Our Scottsdale focus blends premium asset scouting, DST placement options, and concierge-level communication.",
    serviceHighlights: [
      "Hospitality Portfolio Review",
      "Multifamily Replacement Scouting",
      "DST Placement Advisory",
      "Portfolio Alignment Consultation",
    ],
    faq: [
      {
        question: "What makes Scottsdale exchanges unique?",
        answer:
          "Luxury hospitality, Class A multifamily, and high-credit retail dominate Scottsdale replacement demand. Our underwriting includes tourism metrics, rent trend analysis, and lender appetite for these property types.",
      },
      {
        question: "Do you cover Airpark industrial assets?",
        answer:
          "Yes. We evaluate Scottsdale Airpark industrial and flex opportunities, documenting tenant credit and transportation advantages for exchange investors.",
      },
      {
        question: "How are DSTs used in Scottsdale?",
        answer:
          "Many Scottsdale investors blend DST interests with direct property to balance passive income and appreciation. We vet sponsors and prepare suitability records.",
      },
      {
        question: "Are luxury advisors included?",
        answer:
          "We collaborate with Scottsdale-focused brokers, attorneys, and CPAs to maintain the service level expected in this market.",
      },
    ],
    seoTitle: `Scottsdale 1031 Exchange Services | ${COMPANY_NAME}`,
    seoDescription:
      "Luxury-focused 1031 exchange support for Scottsdale investors covering hospitality, multifamily, and passive DST placements.",
  },
  {
    slug: "tempe",
    name: "Tempe",
    headline: "Tempe Exchange Navigation",
    intro:
      "Proximity to Arizona State University and Tempe Town Lake creates dynamic exchange opportunities. We analyze student housing, office-to-flex conversions, and innovation corridor properties to maintain compliance and cash flow.",
    subheading:
      "Tempe timelines require campus-aware underwriting, mixed-use expertise, and lender coordination for adaptive reuse.",
    serviceHighlights: [
      "Mixed-Use Exchange Advisory",
      "Industrial and Flex Targeting",
      "Market Comparables and T12 Review",
      "Lender Preflight and Term Sheet Review",
    ],
    faq: [
      {
        question: "What property types dominate Tempe exchanges?",
        answer:
          "Student-oriented multifamily, lab-capable office, and adaptive reuse projects near Town Lake are frequent targets. We benchmark each asset against Tempe absorption and lease trends.",
      },
      {
        question: "How do you address Tempe zoning?",
        answer:
          "We review overlay districts, university influence areas, and parking standards to ensure replacement assets comply with Tempe regulations.",
      },
      {
        question: "Do you coordinate with Tempe lenders?",
        answer:
          "Yes. We engage lenders familiar with Tempe university-adjacent properties, structuring financing timelines around exchange deadlines.",
      },
      {
        question: "Is adaptive reuse considered?",
        answer:
          "We analyze conversion feasibility, capital needs, and entitlements so investors can evaluate adaptive reuse alongside stabilized properties.",
      },
    ],
    seoTitle: `Tempe, AZ 1031 Exchange Support | ${COMPANY_NAME}`,
    seoDescription:
      "Tempe replacement planning featuring mixed-use analysis, adaptive reuse guidance, and lender coordination.",
  },
  {
    slug: "mesa",
    name: "Mesa",
    headline: "Mesa 1031 Exchange Coverage",
    intro:
      "Mesa growth is fueled by aerospace, manufacturing, and expanding residential communities. We combine industrial scouting with suburban multifamily underwriting to keep Mesa exchanges compliant.",
    subheading:
      "Our Mesa advisory focus includes Phoenix-Mesa Gateway corridors, Power Road districts, and revitalizing downtown properties.",
    serviceHighlights: [
      "Industrial and Flex Targeting",
      "Self Storage Market Entry",
      "Forward Exchange Coordination",
      "Boot Mitigation Analysis",
    ],
    faq: [
      {
        question: "Do you cover Phoenix-Mesa Gateway industrial sites?",
        answer:
          "Yes. We evaluate airfield-adjacent industrial, logistics, and flex assets, documenting tenant credit and infrastructure advantages.",
      },
      {
        question: "How do you handle Mesa residential growth?",
        answer:
          "We review suburban multifamily, build-to-rent, and single-family rental communities, aligning rent trends with investor income targets.",
      },
      {
        question: "Are Mesa-specific tax considerations addressed?",
        answer:
          "Boot and depreciation analyses include Maricopa County data so Mesa investors understand potential tax exposure.",
      },
      {
        question: "Do you support local storage expansions?",
        answer:
          "We evaluate self storage supply ratios throughout Mesa and outline expansion feasibility where zoning allows.",
      },
    ],
    seoTitle: `Mesa 1031 Exchange Guidance | ${COMPANY_NAME}`,
    seoDescription:
      "Mesa-focused 1031 support covering industrial growth, suburban multifamily demand, and storage market analytics.",
  },
  {
    slug: "chandler",
    name: "Chandler",
    headline: "Chandler Exchange Expertise",
    intro:
      "Semiconductor expansion and business park growth make Chandler a hub for high-credit tenants. We source flex, office, and single-tenant net lease assets backed by corporate demand.",
    subheading:
      "Chandler exchanges rely on credit diligence, tech corridor analytics, and timeline discipline tuned to corporate schedules.",
    serviceHighlights: [
      "Net Lease and STNL Curation",
      "Industrial and Flex Targeting",
      "Timeline Discipline Suite",
      "Attorney and CPA Alignment",
    ],
    faq: [
      {
        question: "How do you evaluate Chandler corporate tenants?",
        answer:
          "We review financials, industry outlook, and site reliance for semiconductor and tech tenants anchored in Chandler business parks.",
      },
      {
        question: "Are sale-leasebacks part of the strategy?",
        answer:
          "Yes. We pursue sale-leasebacks when tenant credit, lease length, and facility condition support long-term income goals.",
      },
      {
        question: "Do you support timeline automation?",
        answer:
          "Our timeline suite issues reminders, tracks checklist items, and escalates risks so Chandler exchanges stay compliant with IRS deadlines.",
      },
      {
        question: "Can advisors outside Arizona participate?",
        answer:
          "We coordinate with national legal and tax teams while preserving Chandler-specific disclosures and filing needs.",
      },
    ],
    seoTitle: `Chandler, AZ 1031 Services | ${COMPANY_NAME}`,
    seoDescription:
      "Credit-focused 1031 exchange planning for Chandler investors covering net lease, flex, and tech corridor assets.",
  },
  {
    slug: "gilbert",
    name: "Gilbert",
    headline: "Gilbert Exchange Assistance",
    intro:
      "Gilbert combines master-planned communities with healthcare and education anchors. We align multifamily, medical office, and retail opportunities with Gilbert growth patterns.",
    subheading:
      "Gilbert investors receive neighborhood-specific analytics, healthcare tenant diligence, and family-focused retail assessment.",
    serviceHighlights: [
      "Medical Office Identification",
      "Multifamily Replacement Scouting",
      "Net Lease and STNL Curation",
      "Portfolio Alignment Consultation",
    ],
    faq: [
      {
        question: "Which sectors are strongest in Gilbert?",
        answer:
          "Healthcare, education, and suburban retail drive Gilbert cash flow. We align replacement sourcing with these demand drivers.",
      },
      {
        question: "Do you examine school district impacts?",
        answer:
          "Yes. School ratings and enrollment trends influence multifamily absorption and retail performance across Gilbert neighborhoods.",
      },
      {
        question: "How are healthcare tenants vetted?",
        answer:
          "We analyze financials, payor mixes, and affiliations with major health systems serving Gilbert and the Southeast Valley.",
      },
      {
        question: "Is portfolio planning available?",
        answer:
          "Our consultation sessions align Gilbert acquisitions with long-term cash flow and appreciation targets across Arizona holdings.",
      },
    ],
    seoTitle: `Gilbert 1031 Exchange Planning | ${COMPANY_NAME}`,
    seoDescription:
      "Gilbert replacement support covering healthcare, multifamily, and suburban retail assets with detailed analytics.",
  },
  {
    slug: "glendale",
    name: "Glendale",
    headline: "Glendale 1031 Solutions",
    intro:
      "Entertainment districts and logistics corridors define Glendale exchange activity. We evaluate net lease, stadium-adjacent retail, and West Valley industrial properties with emphasis on tenant stability.",
    subheading:
      "Glendale investors benefit from credit analysis, logistics evaluations, and boot mitigation insight tailored to West Valley closings.",
    serviceHighlights: [
      "Net Lease and STNL Curation",
      "Industrial and Flex Targeting",
      "Boot Mitigation Analysis",
      "Market Comparables and T12 Review",
    ],
    faq: [
      {
        question: "Do you analyze sports and entertainment impact?",
        answer:
          "Yes. We evaluate foot traffic, seasonal revenue swings, and tenant mix for properties near State Farm Stadium and Westgate.",
      },
      {
        question: "How is logistics demand measured?",
        answer:
          "We review transportation access, tenant credit, and absorption trends across the Loop 101 and Northern Parkway corridors.",
      },
      {
        question: "Can boot exposure be reduced?",
        answer:
          "Our boot analysis models cash, debt, and personal property allocations so Glendale investors can plan with their CPA.",
      },
      {
        question: "Are Glendale rent rolls verified?",
        answer:
          "We clean and normalize rent rolls, then benchmark income and expenses against Glendale submarket data to confirm valuations.",
      },
    ],
    seoTitle: `Glendale, AZ Exchange Services | ${COMPANY_NAME}`,
    seoDescription:
      "West Valley 1031 support covering entertainment retail, logistics assets, and tax exposure modeling for Glendale investors.",
  },
  {
    slug: "paradise-valley",
    name: "Paradise Valley",
    headline: "Paradise Valley Exchange Advisory",
    intro:
      "Paradise Valley investors favor luxury hospitality, high-end residential rentals, and passive DST placements. We deliver discreet, concierge-level support tailored to low-density zoning and premium valuations.",
    subheading:
      "High-value exchanges require confidentiality, valuation precision, and flexible passive investment options.",
    serviceHighlights: [
      "Hospitality Portfolio Review",
      "DST Placement Advisory",
      "Portfolio Alignment Consultation",
      "Qualified Intermediary Coordination",
    ],
    faq: [
      {
        question: "How do you handle privacy for Paradise Valley clients?",
        answer:
          "We enforce strict confidentiality protocols, secure document rooms, and limited-access communication channels for sensitive exchanges.",
      },
      {
        question: "Are boutique resorts evaluated?",
        answer:
          "Yes. We review luxury resorts, short-stay villas, and branded residences, aligning projections with Paradise Valley demand.",
      },
      {
        question: "Can DSTs complement local investments?",
        answer:
          "Many Paradise Valley investors combine DST offerings with direct property to balance management intensity and income reliability.",
      },
      {
        question: "Do you work with private family advisors?",
        answer:
          "We coordinate with family offices, attorneys, and CPAs to keep every advisor informed while preserving confidentiality.",
      },
    ],
    seoTitle: `Paradise Valley 1031 Services | ${COMPANY_NAME}`,
    seoDescription:
      "Discreet 1031 exchange support for Paradise Valley investors covering luxury hospitality, DST placements, and advisor coordination.",
  },
  {
    slug: "goodyear",
    name: "Goodyear",
    headline: "Goodyear Exchange Insights",
    intro:
      "Goodyear’s industrial boom and Estrella Mountain residential growth draw investors seeking logistics income and planned community stability. We blend industrial scouting with residential rental analytics.",
    subheading:
      "Goodyear exchanges demand transportation-aware underwriting, capital planning, and detailed tenant analysis.",
    serviceHighlights: [
      "Industrial and Flex Targeting",
      "Land and Entitlement Scouting",
      "Boot Mitigation Analysis",
      "Lender Preflight and Term Sheet Review",
    ],
    faq: [
      {
        question: "How do you evaluate Goodyear industrial assets?",
        answer:
          "We analyze freeway access, tenant credit, building specs, and growth projections along the Loop 303 and I-10 corridors.",
      },
      {
        question: "Are planned community rentals considered?",
        answer:
          "Yes. We review build-to-rent and single-family rental communities serving Estrella Mountain and Verrado households.",
      },
      {
        question: "Can boot be minimized on Goodyear deals?",
        answer:
          "Our boot analysis covers cash, debt, and personal property adjustments to keep tax exposure visible before closing.",
      },
      {
        question: "How do you coordinate lenders?",
        answer:
          "We engage lenders experienced with West Valley industrial and residential assets, aligning term sheets with exchange deadlines.",
      },
    ],
    seoTitle: `Goodyear, AZ 1031 Exchange | ${COMPANY_NAME}`,
    seoDescription:
      "Goodyear 1031 planning featuring industrial logistics analysis, land scouting, and tax exposure modeling.",
  },
  {
    slug: "queen-creek",
    name: "Queen Creek",
    headline: "Queen Creek Exchange Planning",
    intro:
      "Queen Creek’s rapid population growth and agritainment attractions require thoughtful exchange strategies. We evaluate land, storage, and retail anchored by family-oriented demand.",
    subheading:
      "Fast-growing Queen Creek investors rely on entitlement navigation, retail analysis, and portfolio planning.",
    serviceHighlights: [
      "Land and Entitlement Scouting",
      "Self Storage Market Entry",
      "Replacement Property Shortlist",
      "Portfolio Alignment Consultation",
    ],
    faq: [
      {
        question: "What replacement assets thrive in Queen Creek?",
        answer:
          "Entitled land, neighborhood retail, and storage assets serve expanding communities surrounding Queen Creek and San Tan Valley.",
      },
      {
        question: "Do you review agritainment influences?",
        answer:
          "Yes. We factor in tourism and seasonal events when modeling retail and hospitality cash flow for Queen Creek exchanges.",
      },
      {
        question: "How are entitlements verified?",
        answer:
          "We coordinate with the Town of Queen Creek planning department to confirm zoning, utility access, and permit timelines.",
      },
      {
        question: "Is long-term planning provided?",
        answer:
          "Our portfolio consultation defines acquisition phases that complement Queen Creek growth projections.",
      },
    ],
    seoTitle: `Queen Creek 1031 Exchange Services | ${COMPANY_NAME}`,
    seoDescription:
      "Queen Creek exchange planning with land entitlement support, storage analytics, and portfolio consultation.",
  },
];

export function getAllLocations(): Location[] {
  return locations;
}

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}

export function getLocationCanonical(slug: string): string {
  return `${SITE_DOMAIN}/locations/${slug}`;
}

