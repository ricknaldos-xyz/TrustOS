import Link from "next/link";
import { Check, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "For merchants getting started with crypto payments.",
    fee: "1.5%",
    features: [
      { label: "100 escrows/month", included: true },
      { label: "Sandbox environment", included: true },
      { label: "Community support", included: true },
      { label: "Priority support", included: false },
      { label: "SLA guarantee", included: false },
      { label: "White-label widget", included: false },
    ],
    cta: "Get Started",
    href: "/docs/getting-started/quickstart",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$99",
    period: "/month",
    description: "For scaling businesses with growing transaction volume.",
    fee: "1.2%",
    features: [
      { label: "1,000 escrows/month", included: true },
      { label: "Sandbox environment", included: true },
      { label: "Analytics dashboard", included: true },
      { label: "Priority support", included: true },
      { label: "SLA guarantee", included: false },
      { label: "White-label widget", included: false },
    ],
    cta: "Start Free Trial",
    href: "/docs/getting-started/quickstart",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large merchants with custom requirements.",
    fee: "0.8%",
    features: [
      { label: "Unlimited escrows", included: true },
      { label: "Sandbox environment", included: true },
      { label: "Advanced analytics", included: true },
      { label: "Priority support", included: true },
      { label: "99.9% SLA guarantee", included: true },
      { label: "White-label widget", included: true },
    ],
    cta: "Talk to Sales",
    href: "#",
    highlight: false,
  },
  {
    name: "PSP",
    price: "Custom",
    period: "",
    description: "For payment processors serving multiple merchants.",
    fee: "0.5–0.8%",
    features: [
      { label: "Unlimited escrows", included: true },
      { label: "Multi-tenant API", included: true },
      { label: "White-label checkout", included: true },
      { label: "Dedicated support", included: true },
      { label: "99.9% SLA guarantee", included: true },
      { label: "+0.1% PSP surcharge", included: true },
    ],
    cta: "Partner with Us",
    href: "#",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Pay only when funds are released. Zero fee on refunds.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative flex flex-col rounded-xl border p-8",
                tier.highlight
                  ? "border-primary/50 bg-surface shadow-lg shadow-primary/10"
                  : "border-border bg-surface"
              )}
            >
              {tier.highlight && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most Popular
                </Badge>
              )}

              <div>
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <p className="mt-1 text-sm text-text-secondary">
                  {tier.description}
                </p>
              </div>

              <div className="mt-6">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-text-muted">{tier.period}</span>
              </div>

              <div className="mt-2">
                <span className="text-sm text-text-secondary">
                  <span className="font-semibold text-accent">{tier.fee}</span> per
                  released escrow
                </span>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature.label} className="flex items-center gap-3 text-sm">
                    {feature.included ? (
                      <Check className="h-4 w-4 text-success" />
                    ) : (
                      <Minus className="h-4 w-4 text-text-muted" />
                    )}
                    <span
                      className={
                        feature.included ? "text-text-secondary" : "text-text-muted"
                      }
                    >
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  variant={tier.highlight ? "default" : "secondary"}
                  className="w-full"
                  asChild
                >
                  <Link href={tier.href}>{tier.cta}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Fee notes */}
        <div className="mt-8 mx-auto max-w-2xl">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-text-muted">
            <span><strong className="text-text-secondary">0%</strong> fee on refunds</span>
            <span><strong className="text-text-secondary">$5</strong> dispute fee (paid by losing party)</span>
            <span><strong className="text-text-secondary">~$0.01</strong> Base L2 gas per tx</span>
          </div>
        </div>
      </div>
    </section>
  );
}
