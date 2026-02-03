import {
  Shield,
  UserCheck,
  FileSearch,
  Globe,
  Scale,
  Building,
} from "lucide-react";

const complianceItems = [
  {
    icon: Shield,
    title: "Non-Custodial by Design",
    description:
      "Funds are held by immutable smart contracts, not Rowship. We never take possession of user funds — the arbiter can only route payments to predefined addresses (buyer or seller).",
  },
  {
    icon: UserCheck,
    title: "KYC for Merchants",
    description:
      "All merchants undergo Know Your Business (KYB) verification before processing live transactions. We validate identity, business registration, and beneficial ownership.",
  },
  {
    icon: FileSearch,
    title: "AML Screening",
    description:
      "Wallet addresses are screened against OFAC and global sanctions lists. Suspicious activity triggers review. We partner with compliance providers for ongoing monitoring.",
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description:
      "Our non-custodial model allows global availability where traditional payment processors can't operate. Buyers need only a wallet — no sign-up required for small transactions.",
  },
  {
    icon: Scale,
    title: "Regulatory Framework",
    description:
      "We're structured to comply with emerging stablecoin regulations. Our legal team monitors MiCA (EU), state MSB requirements (US), and local fintech laws in LatAm.",
  },
  {
    icon: Building,
    title: "PSP Partnerships",
    description:
      "For fiat on/off-ramps, we partner with licensed Payment Service Providers in each region. They handle fiat compliance while we manage the on-chain escrow layer.",
  },
];

export function Compliance() {
  return (
    <section id="compliance" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Compliance & Regulation
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Built for the regulatory environment of tomorrow. Non-custodial
            architecture with proactive compliance measures.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {complianceItems.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-text">{item.title}</h3>
                <p className="mt-1 text-sm text-text-secondary">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory note */}
        <div className="mt-12 rounded-xl border border-border bg-surface p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h4 className="font-semibold">Regulatory Approach</h4>
              <p className="mt-1 text-sm text-text-secondary">
                We take a proactive stance on compliance, engaging with
                regulators before they come to us. Our legal structure is
                designed for flexibility as the regulatory landscape evolves.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-surface-elevated px-3 py-1 text-xs font-medium text-text-secondary">
                Non-custodial
              </span>
              <span className="rounded-full bg-surface-elevated px-3 py-1 text-xs font-medium text-text-secondary">
                KYB Required
              </span>
              <span className="rounded-full bg-surface-elevated px-3 py-1 text-xs font-medium text-text-secondary">
                AML Monitoring
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
