import { SITE_DOMAIN } from "./config";

export type BlogPostSection =
  | { type: "heading"; level: 2 | 3 | 4; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "quote"; text: string; source?: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  heroImage: { src: string; alt: string };
  author: { name: string; title: string };
  categories: string[];
  tags: string[];
  content: BlogPostSection[];
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "phoenix-1031-deadline-checklist",
    title: "Phoenix 1031 Deadline Checklist for 2025 Exchanges",
    excerpt:
      "A compliance-driven timeline covering every milestone Phoenix investors must hit to keep 1031 exchanges on schedule.",
    publishedAt: "2025-01-12T10:00:00-07:00",
    updatedAt: "2025-02-01T09:00:00-07:00",
    readingTime: 7,
    heroImage: {
      src: "/images/blog/desert-modern.svg",
      alt: "Downtown Phoenix skyline at sunrise representing exchange timelines.",
    },
    author: {
      name: "Erin Delgado",
      title: "Exchange Program Director",
    },
    categories: ["Compliance"],
    tags: ["deadlines", "phoenix", "timeline"],
    content: [
      {
        type: "paragraph",
        text: "Phoenix investors face strict 1031 exchange deadlines. Missing a milestone can trigger taxable boot or disqualify the exchange entirely. This checklist reflects current IRS guidance and local title practices across Maricopa County.",
      },
      {
        type: "heading",
        level: 2,
        text: "Before the Relinquished Sale Closes",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Confirm qualified intermediary agreement and security protocols.",
          "Collect mortgage payoff statements and confirm prorations with escrow.",
          "Schedule a kickoff call with your advisor team and the intermediary.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Day 0 through Day 45",
      },
      {
        type: "paragraph",
        text: "Phoenix investors must deliver a written identification letter to the qualified intermediary by midnight of Day 45. We recommend locking in agent access and due diligence slots during the first seven days to avoid holiday or weekend delays.",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Order third-party reports for top candidates within 14 days.",
          "Use the three property or 200 percent rule worksheet to validate totals.",
          "Run a boot mitigation analysis any time price or loan terms shift.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Day 46 through Day 180",
      },
      {
        type: "paragraph",
        text: "The Phoenix exchange clock does not pause. Lenders, inspectors, and title companies must align to meet Day 180. Our internal timeline suite issues reminders at critical checkpoints to catch problems early.",
      },
      {
        type: "quote",
        text: "Calendar discipline is the most reliable insurance policy for a compliant exchange.",
        source: "Erin Delgado, Exchange Program Director",
      },
      {
        type: "heading",
        level: 3,
        text: "Final Week Checklist",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Verify wire instructions with call-back verification.",
          "Review settlement statements for debt replacement parity.",
          "Confirm intermediary receipt of final closing documents within 48 hours.",
        ],
      },
    ],
    seoTitle:
      "Phoenix 1031 Exchange Deadline Checklist | 2025 Compliance Guide",
    seoDescription:
      "Step-by-step 1031 exchange checklist for Phoenix investors covering identification, boot mitigation, and closing procedures.",
  },
  {
    slug: "identification-letter-best-practices",
    title: "Identification Letter Best Practices for Arizona Exchanges",
    excerpt:
      "Learn how to draft precise identification letters that meet IRS standards and satisfy Arizona intermediaries.",
    publishedAt: "2024-12-05T08:30:00-07:00",
    readingTime: 6,
    heroImage: {
      src: "/images/blog/desert-modern.svg",
      alt: "Investor reviewing identification documents with a Phoenix skyline backdrop.",
    },
    author: {
      name: "Marcus Nguyen",
      title: "Senior Exchange Strategist",
    },
    categories: ["Identification"],
    tags: ["identification", "documentation", "compliance"],
    content: [
      {
        type: "paragraph",
        text: "The identification letter anchors every 1031 exchange. Phoenix intermediaries require accurate legal descriptions, contract data, and signatures to recognize identified properties.",
      },
      {
        type: "heading",
        level: 2,
        text: "Always Use Legal Descriptions",
      },
      {
        type: "paragraph",
        text: "Street addresses alone are not enough. Pull legal descriptions from recorded deeds or title commitments. When multiple parcels are involved, list each parcel and associated assessor number.",
      },
      {
        type: "heading",
        level: 2,
        text: "Reference Backup Options Clearly",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Label each property as Primary or Backup.",
          "Document contract status and contingencies.",
          "Note any assumptions about construction or improvement exchanges.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Submit Before Midnight Phoenix Time",
      },
      {
        type: "paragraph",
        text: "IRS deadlines follow calendar days. Mail, courier, and electronic submission options exist, but the intermediary must receive the letter by midnight in Phoenix on Day 45.",
      },
    ],
    seoTitle:
      "Identification Letter Best Practices | Arizona 1031 Exchange Guide",
    seoDescription:
      "Detailed guidance for drafting compliant 1031 identification letters in Arizona, including legal descriptions and submission timing.",
  },
  {
    slug: "phoenix-industrial-1031-outlook",
    title: "Phoenix Industrial 1031 Outlook",
    excerpt:
      "Analyze vacancy rates, tenant credit, and absorption trends driving Phoenix industrial exchanges in 2025.",
    publishedAt: "2025-02-10T09:15:00-07:00",
    readingTime: 8,
    heroImage: {
      src: "/images/blog/desert-modern.svg",
      alt: "Logistics warehouse near Phoenix freeway representing industrial demand.",
    },
    author: {
      name: "Clara Jensen",
      title: "Industrial Research Lead",
    },
    categories: ["Market Insights"],
    tags: ["industrial", "logistics", "market data"],
    content: [
      {
        type: "paragraph",
        text: "Phoenix industrial demand remains elevated thanks to manufacturing expansions, e-commerce, and population growth. Investors use exchanges to secure modern logistics facilities backed by strong tenants.",
      },
      {
        type: "heading",
        level: 2,
        text: "Vacancy Rates and Rent Growth",
      },
      {
        type: "paragraph",
        text: "Vacancy sits below five percent across the Loop 303, West Valley, and Mesa Gateway corridors, keeping rent growth in the mid-single digits.",
      },
      {
        type: "heading",
        level: 2,
        text: "Tenant Credit Considerations",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Prioritize tenants with long-term production commitments in Arizona.",
          "Review corporate guarantees and parent company balance sheets.",
          "Evaluate relocation risk by comparing facility specs and labor pools.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Key Takeaways for 1031 Investors",
      },
      {
        type: "paragraph",
        text: "Structured due diligence around tenant credit, environmental liabilities, and replacement cost helps Phoenix investors secure resilient industrial income.",
      },
    ],
    seoTitle: "Phoenix Industrial 1031 Outlook | Logistics Exchange Trends",
    seoDescription:
      "Industrial market intelligence for Phoenix 1031 investors covering vacancy, rent growth, and tenant credit trends.",
  },
  {
    slug: "managing-boot-in-phoenix-exchanges",
    title: "Managing Boot in Phoenix Exchanges",
    excerpt:
      "Understand how cash, debt relief, and personal property create boot for Phoenix investors and learn mitigation strategies.",
    publishedAt: "2024-11-18T11:00:00-07:00",
    readingTime: 5,
    heroImage: {
      src: "/images/blog/desert-modern.svg",
      alt: "Loan documents and calculator illustrating boot analysis during a Phoenix 1031 exchange.",
    },
    author: {
      name: "Erin Delgado",
      title: "Exchange Program Director",
    },
    categories: ["Tax Planning"],
    tags: ["boot", "tax planning", "phoenix"],
    content: [
      {
        type: "paragraph",
        text: "Boot is the taxable portion of a 1031 exchange. Phoenix investors often encounter boot through debt relief, earnest money handling, or personal property transfers.",
      },
      {
        type: "heading",
        level: 2,
        text: "Debt Replacement Strategies",
      },
      {
        type: "paragraph",
        text: "Ensure replacement financing matches or exceeds the relinquished loan balance. Consider supplemental debt, seller carrybacks, or DST allocations to close any gap.",
      },
      {
        type: "heading",
        level: 2,
        text: "Handling Personal Property",
      },
      {
        type: "paragraph",
        text: "Equipment, furniture, or goodwill may generate taxable boot. Allocate values carefully and consult your CPA before closing.",
      },
      {
        type: "quote",
        text: "Early modeling keeps Phoenix investors from discovering unexpected boot at closing.",
        source: "Erin Delgado",
      },
    ],
    seoTitle: "Managing Boot in Phoenix 1031 Exchanges | Mitigation Guide",
    seoDescription:
      "Boot mitigation strategies for Phoenix 1031 investors covering debt replacement, earnest money, and personal property considerations.",
  },
  {
    slug: "phoenix-dst-due-diligence",
    title: "Phoenix Investor Guide to DST Due Diligence",
    excerpt:
      "Evaluate sponsor history, leverage, and underlying assets before subscribing to Delaware Statutory Trust offerings.",
    publishedAt: "2025-01-28T14:30:00-07:00",
    readingTime: 6,
    heroImage: {
      src: "/images/blog/desert-modern.svg",
      alt: "Investor reviewing Delaware Statutory Trust documentation in an office.",
    },
    author: {
      name: "Marcus Nguyen",
      title: "Senior Exchange Strategist",
    },
    categories: ["Passive Strategies"],
    tags: ["dst", "due diligence", "passive income"],
    content: [
      {
        type: "paragraph",
        text: "DSTs allow Phoenix investors to complete exchanges without direct property management. Proper due diligence protects principal and income expectations.",
      },
      {
        type: "heading",
        level: 2,
        text: "Sponsor Track Record",
      },
      {
        type: "paragraph",
        text: "Review distribution history, prior exits, and portfolio leverage. Sponsors with long-term performance and transparent reporting provide greater confidence.",
      },
      {
        type: "heading",
        level: 2,
        text: "Leverage and Loan Terms",
      },
      {
        type: "paragraph",
        text: "Understand loan maturities, covenants, and debt service coverage. Stress test cash flow to confirm distributions remain stable if interest rates change.",
      },
      {
        type: "heading",
        level: 2,
        text: "Asset-Level Underwriting",
      },
      {
        type: "paragraph",
        text: "Analyze tenancy, lease expirations, and market demographics for each DST asset. Confirm that replacement value, occupancy, and rent growth align with Phoenix investor expectations.",
      },
    ],
    seoTitle: "Phoenix DST Due Diligence Guide | 1031 Passive Strategy",
    seoDescription:
      "Due diligence framework for Phoenix investors evaluating Delaware Statutory Trust offerings, including sponsor track record and leverage review.",
  },
  {
    slug: "timeline-automation-for-1031-investors",
    title: "Timeline Automation for 1031 Investors",
    excerpt:
      "Automation tools keep identification and completion milestones front and center for Phoenix exchange teams.",
    publishedAt: "2025-02-20T12:45:00-07:00",
    readingTime: 5,
    heroImage: {
      src: "/images/blog/desert-modern.svg",
      alt: "Digital timeline dashboard showing 1031 milestones.",
    },
    author: {
      name: "Clara Jensen",
      title: "Industrial Research Lead",
    },
    categories: ["Operations"],
    tags: ["technology", "automation", "timelines"],
    content: [
      {
        type: "paragraph",
        text: "Automated reminders and dashboards reduce risk for Phoenix investors balancing multiple closings. Tools that integrate with email, SMS, and project management software keep the entire team aligned.",
      },
      {
        type: "heading",
        level: 2,
        text: "Key Automation Features",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Custom reminder sequences for counsel, lenders, and intermediaries.",
          "Task escalation when items remain unresolved within 48 hours.",
          "Audit logs confirming when reminders were sent and acknowledged.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Implementation Tips",
      },
      {
        type: "paragraph",
        text: "Start automation before the relinquished closing. Assign owners to each checklist item and connect reminders to Phoenix time zones to avoid miscommunication.",
      },
    ],
    seoTitle: "Timeline Automation for Phoenix 1031 Exchanges",
    seoDescription:
      "How Phoenix investors use automation to monitor 1031 deadlines with reminders, dashboards, and escalation workflows.",
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogCanonical(slug: string): string {
  return `${SITE_DOMAIN}/blog/${slug}`;
}

