"use client";

import { useState } from "react";
import { Shield, Zap, Clock, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const products = [
  {
    id: "trustos",
    name: "TrustOS",
    tagline: "Escrow + Disputes",
    description: "Non-custodial escrow with buyer protection and dispute resolution. For high-value transactions where trust matters.",
    icon: Shield,
    color: "primary",
    fee: "1.5%",
    features: [
      "Funds held in smart contract until delivery confirmed",
      "7-14 day configurable protection period",
      "Evidence-based dispute resolution",
      "Auto-release if no dispute",
      "Auto-refund if merchant doesn't deliver",
    ],
    useCases: [
      "E-commerce (3-14 day shipping)",
      "Marketplaces P2P",
      "Freelance & services",
      "B2B trade & invoices",
      "Digital goods & software",
    ],
    cta: { label: "Learn about TrustOS", href: "#how-it-works" },
  },
  {
    id: "trustpay",
    name: "TrustPay",
    tagline: "Instant Payments",
    description: "Direct USDC payments with instant confirmation. For businesses that need speed over escrow protection.",
    icon: Zap,
    color: "accent",
    fee: "0.5–1%",
    features: [
      "Payment confirmed in 2 seconds",
      "Instant notification to merchant",
      "No escrow delay",
      "Simple checkout widget",
      "Same dashboard & API",
    ],
    useCases: [
      "Restaurants & delivery",
      "Retail & POS",
      "Subscriptions",
      "Tips & donations",
      "Microtransactions",
    ],
    cta: { label: "Learn about TrustPay", href: "#pricing" },
  },
];

export function Products() {
  const [selected, setSelected] = useState<string>("trustos");

  return (
    <section id="products" className="border-t border-border bg-surface/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Two products. One platform.
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Choose escrow protection for high-stakes transactions, or instant
            payments for speed. Same API, same dashboard.
          </p>
        </div>

        {/* Product toggle */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex rounded-lg border border-border bg-surface p-1">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setSelected(product.id)}
                className={cn(
                  "flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium transition-all cursor-pointer",
                  selected === product.id
                    ? product.color === "primary"
                      ? "bg-primary text-white"
                      : "bg-accent text-background"
                    : "text-text-secondary hover:text-text"
                )}
              >
                <product.icon className="h-4 w-4" />
                {product.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product details */}
        <div className="mt-12">
          {products.map((product) => (
            <div
              key={product.id}
              className={cn(
                "transition-opacity duration-300",
                selected === product.id ? "block" : "hidden"
              )}
            >
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Left: Description */}
                <div className="rounded-xl border border-border bg-surface p-8">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-xl",
                        product.color === "primary"
                          ? "bg-primary/10"
                          : "bg-accent/10"
                      )}
                    >
                      <product.icon
                        className={cn(
                          "h-6 w-6",
                          product.color === "primary"
                            ? "text-primary"
                            : "text-accent"
                        )}
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{product.name}</h3>
                      <p className="text-sm text-text-muted">{product.tagline}</p>
                    </div>
                  </div>

                  <p className="mt-6 text-text-secondary">{product.description}</p>

                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-4xl font-bold">{product.fee}</span>
                    <span className="text-text-muted">per transaction</span>
                  </div>

                  <ul className="mt-8 space-y-3">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check
                          className={cn(
                            "mt-0.5 h-4 w-4 shrink-0",
                            product.color === "primary"
                              ? "text-primary"
                              : "text-accent"
                          )}
                        />
                        <span className="text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button
                      variant={product.color === "primary" ? "default" : "secondary"}
                      asChild
                    >
                      <Link href={product.cta.href}>
                        {product.cta.label} <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Right: Use cases */}
                <div className="rounded-xl border border-border bg-surface p-8">
                  <h4 className="font-semibold">Best for</h4>
                  <div className="mt-6 grid gap-3">
                    {product.useCases.map((useCase) => (
                      <div
                        key={useCase}
                        className="flex items-center gap-3 rounded-lg border border-border/50 bg-background p-4"
                      >
                        <div
                          className={cn(
                            "h-2 w-2 rounded-full",
                            product.color === "primary"
                              ? "bg-primary"
                              : "bg-accent"
                          )}
                        />
                        <span className="text-sm text-text-secondary">
                          {useCase}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Comparison hint */}
                  <div className="mt-8 rounded-lg bg-surface-elevated p-4">
                    <div className="flex items-start gap-3">
                      <Clock className="mt-0.5 h-5 w-5 text-text-muted" />
                      <div>
                        <p className="text-sm font-medium">When to use {product.name}?</p>
                        <p className="mt-1 text-xs text-text-muted">
                          {product.id === "trustos"
                            ? "When you need protection against fraud, non-delivery, or disputes. Ideal for transactions with unknown parties or high-value items."
                            : "When speed matters more than escrow protection. Ideal for trusted merchants, repeat customers, or low-value quick purchases."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom comparison */}
        <div className="mt-12 rounded-xl border border-border bg-surface p-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <p className="font-semibold">Not sure which to choose?</p>
              <p className="text-sm text-text-muted">
                Use TrustOS for marketplaces and new customers. Use TrustPay for
                trusted repeat business.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <span className="flex items-center gap-1">
                <Shield className="h-4 w-4 text-primary" /> TrustOS
              </span>
              <span>+</span>
              <span className="flex items-center gap-1">
                <Zap className="h-4 w-4 text-accent" /> TrustPay
              </span>
              <span>=</span>
              <span className="font-medium text-text">Same API</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
