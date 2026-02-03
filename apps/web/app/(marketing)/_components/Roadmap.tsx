"use client";

import { CheckCircle2, Circle, Clock, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const phases = [
  {
    quarter: "Q1",
    title: "MVP & Foundation",
    status: "current" as const,
    items: [
      "Smart contracts v1 on Base testnet",
      "Core escrow + dispute logic",
      "API skeleton with Fastify",
      "Checkout plugin prototype",
      "Internal end-to-end testing",
    ],
  },
  {
    quarter: "Q2",
    title: "Audit & Alpha",
    status: "upcoming" as const,
    items: [
      "Security audit by tier-1 firm",
      "Deploy to Base mainnet",
      "Private alpha with PSP partner",
      "Process first real transactions",
      "Iterate on UX from feedback",
    ],
  },
  {
    quarter: "Q3",
    title: "Public Beta",
    status: "upcoming" as const,
    items: [
      "Open beta with 10+ merchants",
      "Plugin for WooCommerce/Shopify",
      "Partial refunds support",
      "Scalability testing",
      "Pentest of API/infrastructure",
    ],
  },
  {
    quarter: "Q4",
    title: "Launch v1.0",
    status: "upcoming" as const,
    items: [
      "Public launch — no restrictions",
      "Strategic marketplace integrations",
      "Multi-stablecoin support (USDT, DAI)",
      "Mobile SDK evaluation",
      "ISO 27001 certification process",
    ],
  },
];

function StatusIcon({ status }: { status: "completed" | "current" | "upcoming" }) {
  if (status === "completed") {
    return <CheckCircle2 className="h-6 w-6 text-success" />;
  }
  if (status === "current") {
    return <Clock className="h-6 w-6 text-primary animate-pulse" />;
  }
  return <Circle className="h-6 w-6 text-text-muted" />;
}

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Development Roadmap
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            12 months to production-ready trust infrastructure. Transparent
            milestones, audited code, and iterative validation.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {phases.map((phase, index) => (
            <div
              key={phase.quarter}
              className={cn(
                "relative flex flex-col rounded-xl border p-6",
                phase.status === "current"
                  ? "border-primary/50 bg-surface shadow-lg shadow-primary/10"
                  : "border-border bg-surface"
              )}
            >
              {/* Connector line on desktop */}
              {index < phases.length - 1 && (
                <div className="absolute top-10 -right-3 hidden h-px w-6 bg-border lg:block" />
              )}

              <div className="flex items-center gap-3">
                <StatusIcon status={phase.status} />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    {phase.quarter}
                  </span>
                  <h3 className="font-semibold">{phase.title}</h3>
                </div>
              </div>

              <ul className="mt-6 flex-1 space-y-2">
                {phase.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-text-muted" />
                    {item}
                  </li>
                ))}
              </ul>

              {phase.status === "current" && (
                <div className="mt-6 flex items-center gap-2 text-xs font-medium text-primary">
                  <Rocket className="h-4 w-4" />
                  In Progress
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-text-muted">
          Timeline is indicative. Security and quality take priority over speed.
        </p>
      </div>
    </section>
  );
}
