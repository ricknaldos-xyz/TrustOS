"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Minus, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const trustosTiers = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "For merchants getting started with escrow payments.",
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

const trustpayTiers = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "For businesses getting started with instant crypto payments.",
    fee: "1%",
    features: [
      { label: "500 payments/month", included: true },
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
    price: "$49",
    period: "/month",
    description: "For growing businesses with higher transaction volume.",
    fee: "0.75%",
    features: [
      { label: "5,000 payments/month", included: true },
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
    description: "For high-volume businesses and chains.",
    fee: "0.5%",
    features: [
      { label: "Unlimited payments", included: true },
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
    description: "For payment processors and aggregators.",
    fee: "0.3–0.5%",
    features: [
      { label: "Unlimited payments", included: true },
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
  const [product, setProduct] = useState<"trustos" | "trustpay">("trustos");
  const tiers = product === "trustos" ? trustosTiers : trustpayTiers;

  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            {product === "trustos"
              ? "Pay only when funds are released. Zero fee on refunds."
              : "Low fees for instant payments. No escrow delays."}
          </p>
        </div>

        {/* Product toggle */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-lg border border-border bg-surface p-1">
            <button
              onClick={() => setProduct("trustos")}
              className={cn(
                "flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all cursor-pointer",
                product === "trustos"
                  ? "bg-primary text-white"
                  : "text-text-secondary hover:text-text"
              )}
            >
              <Shield className="h-4 w-4" />
              TrustOS (Escrow)
            </button>
            <button
              onClick={() => setProduct("trustpay")}
              className={cn(
                "flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all cursor-pointer",
                product === "trustpay"
                  ? "bg-accent text-background"
                  : "text-text-secondary hover:text-text"
              )}
            >
              <Zap className="h-4 w-4" />
              TrustPay (Instant)
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative flex flex-col rounded-xl border p-8",
                tier.highlight
                  ? product === "trustos"
                    ? "border-primary/50 bg-surface shadow-lg shadow-primary/10"
                    : "border-accent/50 bg-surface shadow-lg shadow-accent/10"
                  : "border-border bg-surface"
              )}
            >
              {tier.highlight && (
                <Badge
                  className={cn(
                    "absolute -top-3 left-1/2 -translate-x-1/2",
                    product === "trustpay" && "bg-accent text-background"
                  )}
                >
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
                  <span
                    className={cn(
                      "font-semibold",
                      product === "trustos" ? "text-primary" : "text-accent"
                    )}
                  >
                    {tier.fee}
                  </span>{" "}
                  per {product === "trustos" ? "released escrow" : "payment"}
                </span>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature.label} className="flex items-center gap-3 text-sm">
                    {feature.included ? (
                      <Check
                        className={cn(
                          "h-4 w-4",
                          product === "trustos" ? "text-success" : "text-accent"
                        )}
                      />
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
                  className={cn(
                    "w-full",
                    tier.highlight && product === "trustpay" && "bg-accent hover:bg-accent/90"
                  )}
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
            {product === "trustos" ? (
              <>
                <span><strong className="text-text-secondary">0%</strong> fee on refunds</span>
                <span><strong className="text-text-secondary">$5</strong> dispute fee (paid by losing party)</span>
              </>
            ) : (
              <>
                <span><strong className="text-text-secondary">No</strong> escrow delays</span>
                <span><strong className="text-text-secondary">2 sec</strong> confirmation time</span>
              </>
            )}
            <span><strong className="text-text-secondary">~$0.01</strong> Base L2 gas per tx</span>
          </div>
        </div>
      </div>
    </section>
  );
}
