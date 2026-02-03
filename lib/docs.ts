export interface NavItem {
  title: string;
  href: string;
  items?: NavItem[];
  comingSoon?: boolean;
}

export const docsNav: NavItem[] = [
  {
    title: "Product Concept",
    href: "/docs",
    items: [
      { title: "Overview", href: "/docs" },
      { title: "Strategic Vision", href: "/docs#strategic-vision" },
      { title: "The Problem", href: "/docs#the-problem" },
      { title: "Payments-First Strategy", href: "/docs#payments-first" },
      { title: "Market Opportunity", href: "/docs#market-opportunity" },
      { title: "The Solution", href: "/docs#the-solution" },
      { title: "How It Works", href: "/docs#how-it-works" },
      { title: "Technical Architecture", href: "/docs#technical-architecture" },
      { title: "Competitive Analysis", href: "/docs#competitive-analysis" },
      { title: "Service Blueprint", href: "/docs#service-blueprint" },
      { title: "Custody & Regulation", href: "/docs#custody-regulation" },
      { title: "Business Model", href: "/docs#business-model" },
      { title: "Target Audiences", href: "/docs#target-audiences" },
      { title: "Roadmap", href: "/docs#roadmap" },
      { title: "Success Metrics", href: "/docs#success-metrics" },
      { title: "Credibility & Trust", href: "/docs#credibility" },
      { title: "Why Now", href: "/docs#why-now" },
      { title: "Why Base L2", href: "/docs#why-base" },
      { title: "Key Concepts", href: "/docs#key-concepts" },
    ],
  },
  {
    title: "Getting Started",
    href: "/docs/getting-started",
    comingSoon: true,
    items: [
      { title: "Quickstart", href: "/docs/getting-started/quickstart" },
      { title: "Authentication", href: "/docs/getting-started/authentication" },
      { title: "Sandbox", href: "/docs/getting-started/sandbox" },
    ],
  },
  {
    title: "API Reference",
    href: "/docs/api-reference",
    comingSoon: true,
    items: [
      { title: "Escrows", href: "/docs/api-reference/escrows" },
      { title: "Disputes", href: "/docs/api-reference/disputes" },
      { title: "Merchants", href: "/docs/api-reference/merchants" },
      { title: "Webhooks", href: "/docs/api-reference/webhooks" },
    ],
  },
  {
    title: "SDK Reference",
    href: "/docs/sdk",
    comingSoon: true,
    items: [
      { title: "Installation", href: "/docs/sdk/installation" },
      { title: "Client Setup", href: "/docs/sdk/client" },
      { title: "Escrows", href: "/docs/sdk/escrows" },
      { title: "Disputes", href: "/docs/sdk/disputes" },
      { title: "Webhook Verification", href: "/docs/sdk/webhooks" },
    ],
  },
  {
    title: "Guides",
    href: "/docs/guides",
    comingSoon: true,
    items: [
      { title: "Shopify Integration", href: "/docs/guides/shopify-integration" },
      { title: "Dispute Handling", href: "/docs/guides/dispute-handling" },
      { title: "Testing", href: "/docs/guides/testing" },
    ],
  },
  {
    title: "Smart Contracts",
    href: "/docs/smart-contracts",
    comingSoon: true,
    items: [
      { title: "Architecture", href: "/docs/smart-contracts/overview" },
      { title: "TrustEscrow", href: "/docs/smart-contracts/escrow" },
      { title: "TrustDispute", href: "/docs/smart-contracts/dispute" },
      { title: "Security Model", href: "/docs/smart-contracts/security" },
    ],
  },
];
