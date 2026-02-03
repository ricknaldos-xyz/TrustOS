"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { ReactNode } from "react";

const codeLines = [
  { line: 1, tokens: [kw("const"), t(" escrow = "), kw("await"), t(" "), fn("trustos"), t("."), fn("escrows"), t("."), fn("create"), t("({")] },
  { line: 2, tokens: [t("  orderId: "), str('"ORD-2026-001"'), t(",")] },
  { line: 3, tokens: [t("  amount: "), str('"150.00"'), t(",")] },
  { line: 4, tokens: [t("  token: "), str('"USDC"'), t(",")] },
  { line: 5, tokens: [t("  buyerAddress: "), str('"0xBuyer..."')] },
  { line: 6, tokens: [t("});")] },
];

function kw(text: string): ReactNode {
  return <span style={{ color: "#C084FC" }}>{text}</span>;
}

function fn(text: string): ReactNode {
  return <span style={{ color: "#818CF8" }}>{text}</span>;
}

function str(text: string): ReactNode {
  return <span style={{ color: "#22D3EE" }}>{text}</span>;
}

function t(text: string): ReactNode {
  return <>{text}</>;
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-0 right-1/4 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-6">Now in Private Beta</Badge>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            The trust layer for{" "}
            <span className="gradient-text">stablecoin payments</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary md:text-xl">
            Non-custodial escrow, dispute resolution, and buyer protection for
            USDC payments. Built on Base. Powering cross-border commerce in
            Latin America and beyond.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/docs/getting-started/quickstart">
                Start Building <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/docs">Read the Docs</Link>
            </Button>
          </div>
        </div>

        {/* Code preview */}
        <div className="mx-auto mt-16 max-w-2xl">
          <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-primary/5">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-error/60" />
              <div className="h-3 w-3 rounded-full bg-warning/60" />
              <div className="h-3 w-3 rounded-full bg-success/60" />
              <span className="ml-2 text-xs text-text-muted">create-escrow.ts</span>
            </div>
            <pre className="overflow-x-auto p-5">
              <code className="font-mono text-sm leading-relaxed text-text-secondary">
                {codeLines.map((row) => (
                  <div key={row.line}>
                    <span className="mr-4 inline-block w-4 text-right text-text-muted/50">
                      {row.line}
                    </span>
                    {row.tokens.map((token, j) => (
                      <span key={j}>{token}</span>
                    ))}
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
