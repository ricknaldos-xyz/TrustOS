import { Check, X, Minus, Shield, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

type FeatureValue = boolean | "partial" | "planned" | "unknown" | "na";

interface Feature {
  name: string;
  rowship: FeatureValue;
  coinbase: FeatureValue;
  stripe: FeatureValue;
  kleros: FeatureValue;
  safe: FeatureValue;
  note?: string;
}

const features: Feature[] = [
  { name: "Escrow protection", rowship: true, coinbase: true, stripe: false, kleros: true, safe: "partial", note: "TrustOS" },
  { name: "Instant payments (2 sec)", rowship: true, coinbase: false, stripe: true, kleros: false, safe: false, note: "TrustPay" },
  { name: "Built-in dispute resolution", rowship: true, coinbase: true, stripe: false, kleros: true, safe: false, note: "TrustOS" },
  { name: "Sub-cent gas costs (L2)", rowship: true, coinbase: true, stripe: "na", kleros: false, safe: true },
  { name: "Plug-and-play checkout", rowship: true, coinbase: true, stripe: true, kleros: false, safe: false },
  { name: "No crypto knowledge required", rowship: true, coinbase: true, stripe: true, kleros: false, safe: false },
  { name: "Choose escrow or direct per tx", rowship: true, coinbase: false, stripe: false, kleros: false, safe: false },
  { name: "Fast dispute resolution (<7 days)", rowship: true, coinbase: "unknown", stripe: true, kleros: false, safe: "na", note: "TrustOS" },
  { name: "Decentralized arbitration option", rowship: "planned", coinbase: false, stripe: false, kleros: true, safe: false },
  { name: "Global availability (no geo-restrictions)", rowship: true, coinbase: false, stripe: false, kleros: true, safe: true },
  { name: "LatAm-focused support", rowship: true, coinbase: false, stripe: false, kleros: false, safe: false },
  { name: "Multi-tenant PSP API", rowship: true, coinbase: false, stripe: true, kleros: false, safe: false },
  { name: "Fiat off-ramp integration", rowship: "planned", coinbase: true, stripe: true, kleros: false, safe: false },
];

const competitors = [
  { id: "rowship" as const, name: "Rowship", highlight: true },
  { id: "coinbase" as const, name: "Coinbase Commerce", highlight: false },
  { id: "stripe" as const, name: "Stripe Crypto", highlight: false },
  { id: "kleros" as const, name: "Kleros", highlight: false },
  { id: "safe" as const, name: "Safe (Gnosis)", highlight: false },
];

function FeatureCell({ value }: { value: FeatureValue }) {
  if (value === true) {
    return <Check className="h-5 w-5 text-success" />;
  }
  if (value === false) {
    return <X className="h-5 w-5 text-text-muted/50" />;
  }
  if (value === "partial") {
    return <span className="text-xs text-warning">Partial</span>;
  }
  if (value === "planned") {
    return <span className="text-xs text-primary">Planned</span>;
  }
  if (value === "unknown") {
    return <span className="text-xs text-text-muted">TBD</span>;
  }
  return <Minus className="h-4 w-4 text-text-muted/30" />;
}

export function Competitors() {
  return (
    <section id="comparison" className="border-t border-border bg-surface/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How Rowship compares
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Two products. Complete coverage. <span className="inline-flex items-center gap-1"><Shield className="h-4 w-4 text-primary" /> TrustOS</span> for escrow + disputes, <span className="inline-flex items-center gap-1"><Zap className="h-4 w-4 text-accent" /> TrustPay</span> for instant payments.
          </p>
        </div>

        {/* Desktop table */}
        <div className="mt-12 hidden overflow-x-auto lg:block">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-4 pr-6 font-medium text-text-muted">Feature</th>
                {competitors.map((c) => (
                  <th
                    key={c.id}
                    className={cn(
                      "pb-4 px-4 text-center font-semibold",
                      c.highlight && "text-primary"
                    )}
                  >
                    {c.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr
                  key={feature.name}
                  className={cn(
                    "border-b border-border/50",
                    i % 2 === 0 && "bg-surface/50"
                  )}
                >
                  <td className="py-3 pr-6 text-text-secondary">
                    <span>{feature.name}</span>
                    {feature.note && (
                      <span className={cn(
                        "ml-2 text-xs px-1.5 py-0.5 rounded",
                        feature.note === "TrustOS" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                      )}>
                        {feature.note}
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      <FeatureCell value={feature.rowship} />
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      <FeatureCell value={feature.coinbase} />
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      <FeatureCell value={feature.stripe} />
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      <FeatureCell value={feature.kleros} />
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      <FeatureCell value={feature.safe} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="mt-12 space-y-6 lg:hidden">
          {competitors.slice(1).map((competitor) => (
            <div
              key={competitor.id}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="font-semibold">Rowship vs {competitor.name}</h3>
              <div className="mt-4 space-y-3">
                {features.slice(0, 7).map((feature) => {
                  const rowshipValue = feature.rowship;
                  const competitorId = competitor.id as Exclude<keyof Feature, "name" | "note">;
                  const competitorValue = feature[competitorId];
                  const rowshipWins = rowshipValue === true && competitorValue !== true;

                  return (
                    <div
                      key={feature.name}
                      className={cn(
                        "flex items-center justify-between text-sm",
                        rowshipWins && "text-success"
                      )}
                    >
                      <span className="text-text-secondary">{feature.name}</span>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <span className="text-xs text-text-muted">Us:</span>
                          <FeatureCell value={rowshipValue} />
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs text-text-muted">Them:</span>
                          <FeatureCell value={competitorValue} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface p-6">
            <h4 className="font-semibold text-primary">vs Coinbase Commerce</h4>
            <p className="mt-2 text-sm text-text-secondary">
              Similar escrow, but Rowship offers instant payments too. Globally available,
              LatAm-focused. No platform lock-in.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h4 className="font-semibold text-accent">vs Stripe Crypto</h4>
            <p className="mt-2 text-sm text-text-secondary">
              TrustPay matches Stripe&apos;s speed. TrustOS adds escrow protection they don&apos;t have.
              Non-custodial and globally accessible.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h4 className="font-semibold text-primary">vs Kleros</h4>
            <p className="mt-2 text-sm text-text-secondary">
              Kleros does arbitration only. We do full payment flow with
              plug-and-play checkout. Kleros integration planned for decentralized disputes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
