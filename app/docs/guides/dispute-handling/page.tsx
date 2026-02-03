import type { Metadata } from "next";

export const metadata: Metadata = { title: "Dispute Handling Guide" };

export default function DisputeHandlingPage() {
  return (
    <div>
      <h1>Dispute Handling</h1>
      <p>
        Best practices for merchants to handle disputes effectively and maintain
        a high trust score.
      </p>

      <h2>How Disputes Work</h2>
      <p>
        A buyer can open a dispute on any funded or delivered escrow during the
        protection period (default: 14 days after delivery). Once opened, the
        dispute moves through up to three phases:
      </p>
      <ol>
        <li><strong>Negotiation</strong> (5 days) — Try to resolve directly with the buyer</li>
        <li><strong>Mediation</strong> (5 days) — A neutral mediator proposes a resolution</li>
        <li><strong>Arbitration</strong> (7 days) — An arbitrator makes a binding decision</li>
      </ol>

      <h2>Responding to Disputes</h2>
      <p>
        When a dispute is opened, you receive a <code>dispute.opened</code> webhook
        and an email notification. <strong>You have 5 days to respond</strong> — if you
        don&apos;t, the dispute auto-resolves in the buyer&apos;s favor.
      </p>

      <h3>Step 1: Review the Dispute</h3>
      <pre><code>{`const dispute = await trustos.disputes.get("dsp_xyz789");
console.log(dispute.reason);   // "Item not received"
console.log(dispute.evidence); // Buyer's submitted evidence`}</code></pre>

      <h3>Step 2: Submit Evidence</h3>
      <p>Provide clear evidence that supports your case:</p>
      <ul>
        <li><strong>Shipping proof:</strong> Tracking numbers, delivery confirmation screenshots</li>
        <li><strong>Communication logs:</strong> Messages with the buyer showing delivery attempts</li>
        <li><strong>Product access logs:</strong> For digital products, show the buyer accessed/used the product</li>
        <li><strong>Terms of service:</strong> If the buyer agreed to specific terms</li>
      </ul>
      <pre><code>{`await trustos.disputes.submitEvidence(dispute.id, {
  type: "document",
  contentUrl: "https://your-cdn.com/evidence/tracking-proof.pdf",
  description: "UPS tracking showing delivered to buyer's address on Jan 10",
});`}</code></pre>

      <h3>Step 3: Propose a Settlement (Optional)</h3>
      <p>
        If you want to resolve quickly, you can propose a partial refund:
      </p>
      <pre><code>{`// Propose keeping 70%, refunding 30% to buyer
await trustos.disputes.proposeSettlement(dispute.id, {
  buyerAmount: "45.00",
  merchantAmount: "105.00",
});`}</code></pre>

      <h2>Impact on Trust Score</h2>
      <ul>
        <li>Dispute rate &gt; 5% → warning notification</li>
        <li>Dispute rate &gt; 10% → account review</li>
        <li>Not responding to disputes → significant score penalty</li>
        <li>Fast response time → score bonus</li>
        <li>Winning disputes → no score impact</li>
      </ul>

      <h2>Common Dispute Reasons</h2>
      <table>
        <thead>
          <tr><th>Reason</th><th>Best Response</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Item not received</td>
            <td>Provide tracking proof, delivery confirmation</td>
          </tr>
          <tr>
            <td>Item not as described</td>
            <td>Show product listing matched delivery, offer partial refund</td>
          </tr>
          <tr>
            <td>Unauthorized transaction</td>
            <td>Show wallet approval proof (on-chain signature)</td>
          </tr>
          <tr>
            <td>Service not rendered</td>
            <td>Provide access logs, completion proof</td>
          </tr>
        </tbody>
      </table>

      <h2>Prevention Tips</h2>
      <ul>
        <li>Ship with tracking and require signature confirmation for high-value items</li>
        <li>Send delivery notifications promptly via the API</li>
        <li>Communicate proactively with buyers about delays</li>
        <li>For digital products, log access events and keep records</li>
        <li>Offer voluntary refunds when appropriate — it&apos;s cheaper than losing a dispute ($5 fee)</li>
      </ul>
    </div>
  );
}
