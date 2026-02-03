import { Check, X, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  { name: "Non-custodial escrow", trustos: true, coinbase: true, stripe: false, kleros: true, safe: "partial" },
  { name: "Built-in dispute resolution", trustos: true, coinbase: true, stripe: false, kleros: true, safe: false },
  { name: "Sub-cent gas costs (L2)", trustos: true, coinbase: true, stripe: "na", kleros: false, safe: true },
  { name: "Plug-and-play checkout", trustos: true, coinbase: true, stripe: true, kleros: false, safe: false },
  { name: "No crypto knowledge required", trustos: true, coinbase: true, stripe: true, kleros: false, safe: false },
  { name: "Fast dispute resolution (<7 days)", trustos: true, coinbase: "unknown", stripe: true, kleros: false, safe: "na" },
  { name: "Decentralized arbitration option", trustos: "planned", coinbase: false, stripe: false, kleros: true, safe: false },
  { name: "Global availability (no geo-restrictions)", trustos: true, coinbase: false, stripe: false, kleros: true, safe: true },
  { name: "LatAm-focused support", trustos: true, coinbase: false, stripe: false, kleros: false, safe: false },
  { name: "Open-source contracts", trustos: true, coinbase: true, stripe: false, kleros: true, safe: true },
  { name: "Multi-tenant PSP API", trustos: true, coinbase: false, stripe: true, kleros: false, safe: false },
  { name: "Fiat off-ramp integration", trustos: "planned", coinbase: true, stripe: true, kleros: false, safe: false },
];

const competitors = [
  { id: "trustos", name: "TrustOS", highlight: true },
  { id: "coinbase", name: "Coinbase Commerce", highlight: false },
  { id: "stripe", name: "Stripe Crypto", highlight: false },
  { id: "kleros", name: "Kleros", highlight: false },
  { id: "safe", name: "Safe (Gnosis)", highlight: false },
];

type FeatureValue = boolean | "partial" | "planned" | "unknown" | "na";

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
            How TrustOS compares
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            We combine the best of decentralized escrow with the UX of
            traditional payment processors.
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
                  <td className="py-3 pr-6 text-text-secondary">{feature.name}</td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      <FeatureCell value={feature.trustos} />
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
              <h3 className="font-semibold">TrustOS vs {competitor.name}</h3>
              <div className="mt-4 space-y-3">
                {features.slice(0, 6).map((feature) => {
                  const trustosValue = feature.trustos;
                  const competitorValue = feature[competitor.id as keyof typeof feature] as FeatureValue;
                  const trustosWins = trustosValue === true && competitorValue !== true;

                  return (
                    <div
                      key={feature.name}
                      className={cn(
                        "flex items-center justify-between text-sm",
                        trustosWins && "text-success"
                      )}
                    >
                      <span className="text-text-secondary">{feature.name}</span>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <span className="text-xs text-text-muted">Us:</span>
                          <FeatureCell value={trustosValue} />
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
              Similar escrow model, but TrustOS is globally available and
              focuses on underserved markets like LatAm. No platform lock-in.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h4 className="font-semibold text-primary">vs Stripe Crypto</h4>
            <p className="mt-2 text-sm text-text-secondary">
              Stripe is custodial and US-only. TrustOS is non-custodial,
              globally accessible, and keeps funds in USDC (no forced fiat conversion).
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h4 className="font-semibold text-primary">vs Kleros</h4>
            <p className="mt-2 text-sm text-text-secondary">
              Kleros offers decentralized arbitration but requires crypto expertise.
              TrustOS provides a simple checkout UX with Kleros integration planned.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
