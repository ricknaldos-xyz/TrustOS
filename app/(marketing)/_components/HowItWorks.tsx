"use client";

import { useState } from "react";
import { Store, Wallet, Package, CircleDollarSign, Zap, Bell, ShoppingBag, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const trustosSteps = [
  {
    number: "01",
    icon: Store,
    title: "Merchant creates escrow",
    description:
      "The merchant creates an escrow specifying the amount, buyer, and protection period. TrustOS returns a checkout URL for the buyer.",
  },
  {
    number: "02",
    icon: Wallet,
    title: "Buyer deposits USDC",
    description:
      "Buyer opens the checkout, connects their wallet, and deposits USDC into the smart contract. Not to the merchant, not to us — to the contract.",
  },
  {
    number: "03",
    icon: Package,
    title: "Merchant delivers",
    description:
      "Ship the product or deliver the service, then mark it as delivered. If the merchant doesn't deliver before the deadline, the buyer is auto-refunded.",
  },
  {
    number: "04",
    icon: CircleDollarSign,
    title: "Funds release",
    description:
      "Buyer confirms receipt (immediate release) or the 14-day protection period expires without dispute (auto-release). USDC goes to the merchant minus 1.5% fee.",
  },
];

const trustpaySteps = [
  {
    number: "01",
    icon: ShoppingBag,
    title: "Customer orders",
    description:
      "Customer places an order and selects USDC payment. TrustPay generates a payment request with amount and merchant details.",
  },
  {
    number: "02",
    icon: Zap,
    title: "Instant payment",
    description:
      "Customer connects wallet and pays USDC. Payment confirms in ~2 seconds on Base L2. Funds go directly to merchant.",
  },
  {
    number: "03",
    icon: Bell,
    title: "Merchant notified",
    description:
      "Merchant receives instant webhook notification with payment confirmation. No waiting, no escrow delays. Start fulfilling immediately.",
  },
  {
    number: "04",
    icon: Package,
    title: "Order fulfilled",
    description:
      "Merchant delivers the order. Any issues are resolved directly with the customer (refund, credit, redelivery). Fee: 0.5-1%.",
  },
];

const products = [
  { id: "trustos", name: "TrustOS", tagline: "Escrow + Disputes", color: "primary" },
  { id: "trustpay", name: "TrustPay", tagline: "Instant Payments", color: "accent" },
];

export function HowItWorks() {
  const [selected, setSelected] = useState<"trustos" | "trustpay">("trustos");
  const steps = selected === "trustos" ? trustosSteps : trustpaySteps;
  const isPrimary = selected === "trustos";

  return (
    <section id="how-it-works" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            {selected === "trustos"
              ? "Four steps to protected payments. No middlemen. Full transparency."
              : "Three seconds to payment. No escrow. Instant confirmation."}
          </p>
        </div>

        {/* Product toggle */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-lg border border-border bg-surface p-1">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setSelected(product.id as "trustos" | "trustpay")}
                className={cn(
                  "flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all cursor-pointer",
                  selected === product.id
                    ? product.color === "primary"
                      ? "bg-primary text-white"
                      : "bg-accent text-background"
                    : "text-text-secondary hover:text-text"
                )}
              >
                {product.color === "primary" ? (
                  <Shield className="h-4 w-4" />
                ) : (
                  <Zap className="h-4 w-4" />
                )}
                {product.name}
              </button>
            ))}
          </div>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Connector line */}
          <div
            className={cn(
              "absolute top-12 left-[12.5%] hidden h-px w-3/4 bg-gradient-to-r md:block",
              isPrimary
                ? "from-primary/50 via-accent/50 to-primary/50"
                : "from-accent/50 via-primary/50 to-accent/50"
            )}
          />

          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center">
                <div className={cn(
                  "absolute inset-0 rounded-2xl",
                  isPrimary ? "bg-primary/10" : "bg-accent/10"
                )} />
                <step.icon className={cn(
                  "relative h-10 w-10",
                  isPrimary ? "text-primary" : "text-accent"
                )} />
              </div>
              <span className={cn(
                "text-xs font-bold uppercase tracking-widest",
                isPrimary ? "text-primary" : "text-accent"
              )}>
                Step {step.number}
              </span>
              <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom comparison hint */}
        <div className="mt-12 flex justify-center">
          <div className="rounded-lg border border-border bg-surface/50 px-6 py-4 text-center">
            <p className="text-sm text-text-muted">
              {selected === "trustos" ? (
                <>
                  <span className="font-medium text-text-secondary">Need faster payments?</span>{" "}
                  TrustPay skips escrow for instant confirmation.
                </>
              ) : (
                <>
                  <span className="font-medium text-text-secondary">Need buyer protection?</span>{" "}
                  TrustOS holds funds until delivery is confirmed.
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
