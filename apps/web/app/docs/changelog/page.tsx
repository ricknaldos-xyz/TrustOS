import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = { title: "Changelog" };

export default function ChangelogPage() {
  return (
    <div>
      <h1>Changelog</h1>
      <p>
        All notable changes to TrustOS are documented here.
      </p>

      <hr />

      <h2>v0.1.0 — Private Beta</h2>
      <p className="!text-text-muted text-sm">February 2026</p>

      <h3>Initial Release</h3>
      <ul>
        <li>Non-custodial escrow for USDC payments on Base L2</li>
        <li>Evidence-based dispute resolution (negotiation → mediation → arbitration)</li>
        <li>Auto-release after configurable protection period</li>
        <li>Merchant dashboard with escrow tracking and analytics</li>
        <li>REST API with full CRUD for escrows, disputes, and merchants</li>
        <li>TypeScript SDK (<code>@trustos/sdk</code>)</li>
        <li>Webhook notifications for all lifecycle events</li>
        <li>Sandbox environment on Base Sepolia</li>
        <li>Hosted checkout page for buyers</li>
        <li>Public escrow status tracking page</li>
      </ul>

      <h3>Smart Contracts</h3>
      <ul>
        <li>TrustEscrow — UUPS proxy, singleton pattern</li>
        <li>TrustDispute — Evidence-based resolution with deadlines</li>
        <li>TrustRegistry — Merchant and PSP registration</li>
        <li>TrustFeeManager — 1.5% protocol fee, treasury distribution</li>
        <li>TimelockController — 48h delay for admin operations</li>
      </ul>

      <h3>Security</h3>
      <ul>
        <li>Non-custodial architecture — no admin withdrawal of escrowed funds</li>
        <li>Emergency pause mechanism (multisig controlled)</li>
        <li>Auto-resolve for all dispute scenarios (protocol works without Rowship)</li>
        <li>Smart contract audit in progress</li>
      </ul>
    </div>
  );
}
