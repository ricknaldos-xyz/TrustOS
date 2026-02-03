import type { Metadata } from "next";

export const metadata: Metadata = { title: "SDK Disputes" };

export default function SDKDisputesPage() {
  return (
    <div>
      <h1>SDK — Disputes</h1>
      <p>
        The <code>trustos.disputes</code> resource lets you open disputes, submit
        evidence, and track dispute resolution.
      </p>

      <h2>Open a Dispute</h2>
      <pre><code>{`const dispute = await trustos.disputes.open({
  escrowId: "esc_abc123",
  reason: "Item not received after 7 days",
});

console.log(dispute.id);     // "dsp_xyz789"
console.log(dispute.phase);  // "negotiation"
console.log(dispute.deadline); // 5 days from now`}</code></pre>

      <h2>Submit Evidence</h2>
      <pre><code>{`await trustos.disputes.submitEvidence(dispute.id, {
  type: "screenshot",
  contentUrl: "https://your-cdn.com/evidence/tracking-screenshot.png",
  description: "Tracking shows package returned to sender",
});`}</code></pre>

      <h2>Get Dispute Details</h2>
      <pre><code>{`const dispute = await trustos.disputes.get("dsp_xyz789");

console.log(dispute.phase);     // "mediation"
console.log(dispute.outcome);   // null (not yet resolved)
console.log(dispute.evidence);  // Array of submitted evidence`}</code></pre>

      <h2>List Disputes</h2>
      <pre><code>{`const { data, pagination } = await trustos.disputes.list({
  status: "open",
  page: 1,
  limit: 20,
});`}</code></pre>

      <h2>Dispute Interface</h2>
      <pre><code>{`interface Dispute {
  id: string;
  escrowId: string;
  initiator: string;        // "buyer" | "merchant"
  reason: string;
  phase: DisputePhase;
  outcome: DisputeOutcome | null;
  buyerAmount: string | null;
  merchantAmount: string | null;
  evidence: Evidence[];
  phaseDeadline: string;    // ISO 8601
  openedAt: string;
  resolvedAt: string | null;
}

type DisputePhase =
  | "negotiation"
  | "mediation"
  | "arbitration"
  | "resolved";

type DisputeOutcome =
  | "full_refund"
  | "full_release"
  | "split_decision"
  | "merchant_no_show"
  | "buyer_abandoned";

interface Evidence {
  id: string;
  submittedBy: string;     // "buyer" | "merchant"
  type: string;            // "screenshot" | "document" | "link" | "text"
  contentUrl: string;
  description: string;
  submittedAt: string;
}`}</code></pre>

      <h2>Dispute Lifecycle</h2>
      <ol>
        <li><strong>Negotiation</strong> (5 days) — Both parties can submit evidence and propose settlements</li>
        <li><strong>Mediation</strong> (5 days) — A mediator reviews evidence and proposes a resolution</li>
        <li><strong>Arbitration</strong> (7 days) — An arbitrator makes a binding decision</li>
        <li><strong>Resolved</strong> — Final ruling applied, funds distributed</li>
      </ol>
      <p>
        If the merchant doesn&apos;t respond within the negotiation deadline, the
        dispute auto-resolves in the buyer&apos;s favor (<code>merchant_no_show</code>).
      </p>
    </div>
  );
}
