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
  },
  {
    icon: Scale,
    title: "Fair Dispute Resolution",
    description:
      "Evidence-based arbitration with clear deadlines. Both sides submit proof. No black boxes.",
  },
  {
    icon: Clock,
    title: "Auto-Release",
    description:
      "Funds release automatically after the protection period. Zero action needed from either party.",
  },
  {
    icon: UserCheck,
    title: "Buyer Protection",
    description:
      "14-day window to raise disputes. Full refund if the merchant doesn't respond within the deadline.",
  },
  {
    icon: Receipt,
    title: "1.5% Flat Fee",
    description:
      "No monthly fees, no setup costs. Pay only on successful releases. 0% fee on refunds.",
  },
  {
    icon: Zap,
    title: "Base L2 Native",
    description:
      "Sub-cent gas costs. 2-second confirmations. Native USDC support. No bridging required.",
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
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <feature.icon className="h-5 w-5 text-primary" />
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
