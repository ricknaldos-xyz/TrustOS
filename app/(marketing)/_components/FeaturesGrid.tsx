import {
  Shield,
  Scale,
  Clock,
  UserCheck,
  Receipt,
  Zap,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Non-custodial Escrow",
    description:
      "Smart contracts hold funds. No one — not even us — can touch them. Funds move only when conditions are met.",
    product: "TrustOS",
  },
  {
    icon: Zap,
    title: "Instant Payments",
    description:
      "Direct USDC transfers with 2-second confirmation on Base L2. No escrow delays. Perfect for delivery and retail.",
    product: "TrustPay",
  },
  {
    icon: Scale,
    title: "Fair Dispute Resolution",
    description:
      "Evidence-based arbitration with clear deadlines. Auto-resolution for 70%+ of cases. Human review when needed.",
    product: "TrustOS",
  },
  {
    icon: Clock,
    title: "Auto-Release & Defaults",
    description:
      "Funds release automatically after the protection period. No merchant delivery? Auto-refund. Zero action needed.",
    product: "TrustOS",
  },
  {
    icon: UserCheck,
    title: "Buyer Protection",
    description:
      "7-14 day window to raise disputes. Full refund if merchant doesn't deliver. Same trust as credit cards.",
    product: "TrustOS",
  },
  {
    icon: Receipt,
    title: "0.5-1.5% Fees",
    description:
      "TrustPay: 0.5-1% for instant payments. TrustOS: 1.5% for escrow. No monthly fees. 0% on refunds.",
    product: "Both",
  },
];

export function FeaturesGrid() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need for trusted payments
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            A complete trust infrastructure, not just another payment gateway.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="group">
              <CardHeader>
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  {feature.product !== "Both" && (
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      feature.product === "TrustOS"
                        ? "bg-primary/10 text-primary"
                        : "bg-accent/10 text-accent"
                    }`}>
                      {feature.product}
                    </span>
                  )}
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
