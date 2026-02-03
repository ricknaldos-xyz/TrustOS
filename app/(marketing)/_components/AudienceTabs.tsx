"use client";

import Link from "next/link";
import { Building2, Store, Code2, ArrowRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const audiences = [
  {
    id: "psps",
    label: "PSPs",
    icon: Building2,
    headline: "Add escrow protection to your entire merchant base",
    subtitle: "Primary distribution channel — 10x–100x network effect",
    bullets: [
      "Multi-tenant API — onboard sub-merchants programmatically",
      "One integration = your entire merchant portfolio gets escrow protection",
      "White-label checkout widget with your branding",
      "Webhook integration for real-time payment events",
      "Revenue share on transaction fees (+0.1% PSP surcharge)",
      "Ideal for LatAm PSPs serving cross-border sellers",
    ],
    cta: { label: "Partner with us", href: "#pricing" },
  },
  {
    id: "merchants",
    label: "Merchants",
    icon: Store,
    headline: "Accept USDC with buyer protection built in",
    subtitle: "Direct integration",
    bullets: [
      "No chargebacks — disputes are fair and evidence-based",
      "Auto-release if buyer doesn't dispute within 14 days",
      "Auto-refund if you don't deliver before the deadline",
      "Dashboard to track escrows, disputes, and analytics",
      "Webhook notifications for every state change",
    ],
    cta: { label: "Create merchant account", href: "/docs/getting-started/quickstart" },
  },
  {
    id: "developers",
    label: "Developers",
    icon: Code2,
    headline: "5 lines to add trust to any payment",
    subtitle: "Building on TrustOS",
    bullets: [
      "TypeScript SDK with full type safety",
      "REST API with comprehensive documentation",
      "Sandbox environment on Base Sepolia with testnet USDC",
      "Open-source contracts verified on BaseScan",
      "Webhook verification helpers included",
    ],
    cta: { label: "Read the docs", href: "/docs" },
  },
];

const useCases = [
  { title: "Cross-Border E-Commerce", description: "LatAm merchants selling to US/EU buyers with instant USDC settlement and buyer protection — no chargebacks." },
  { title: "Freelance & Services", description: "Milestone-based escrow for gig work — pay only when deliverables are confirmed. Perfect for remote LatAm talent." },
  { title: "Digital Goods & Software", description: "Licenses, SaaS subscriptions, and digital products with dispute rights and instant global delivery." },
  { title: "Marketplace Platforms", description: "P2P marketplaces with built-in trust between unknown buyers and sellers across borders." },
  { title: "B2B Trade & Invoices", description: "Large-value transactions with escrow protection and net-terms via smart contracts — ideal for import/export." },
  { title: "PSP Infrastructure", description: "Payment processors adding escrow to their rails for all their merchants at once. One integration, entire portfolio protected." },
];

export function AudienceTabs() {
  return (
    <section className="border-t border-border bg-surface/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built for everyone in the payment chain
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Whether you&apos;re a payment processor, a merchant, or a developer
            — TrustOS fits your workflow.
          </p>
        </div>

        <Tabs defaultValue="psps" className="mt-12">
          <div className="flex justify-center">
            <TabsList>
              {audiences.map((a) => (
                <TabsTrigger key={a.id} value={a.id}>
                  <a.icon className="mr-2 h-4 w-4" />
                  {a.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {audiences.map((a) => (
            <TabsContent key={a.id} value={a.id}>
              <div className="mx-auto mt-4 max-w-2xl rounded-xl border border-border bg-surface p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{a.subtitle}</p>
                <h3 className="mt-1 text-xl font-semibold">{a.headline}</h3>
                <ul className="mt-6 space-y-3">
                  {a.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-sm text-text-secondary"
                    >
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button asChild>
                    <Link href={a.cta.href}>
                      {a.cta.label} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Use Cases */}
        <div className="mt-20">
          <h3 className="text-center text-2xl font-bold tracking-tight">
            Use Cases
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((uc) => (
              <div key={uc.title} className="rounded-xl border border-border bg-surface p-5">
                <h4 className="font-semibold text-text">{uc.title}</h4>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
