import { Shield, Zap, Clock } from "lucide-react";

const stats = [
  { icon: Shield, label: "$0 lost to fraud", sublabel: "Non-custodial by design" },
  { icon: Zap, label: "~$0.01 per tx", sublabel: "Base L2 gas costs" },
  { icon: Clock, label: "14-day protection", sublabel: "Buyer dispute window" },
];

export function SocialProof() {
  return (
    <section className="border-y border-border bg-surface/50 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center justify-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-lg font-semibold text-text">{stat.label}</p>
                <p className="text-sm text-text-muted">{stat.sublabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
