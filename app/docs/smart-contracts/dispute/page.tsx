import type { Metadata } from "next";

export const metadata: Metadata = { title: "TrustDispute Contract" };

export default function DisputeContractPage() {
  return (
    <div>
      <h1>TrustDispute</h1>
      <p>
        Manages evidence-based dispute resolution with configurable phases and
        deadlines. Calls <code>TrustEscrow.executeDisputeResolution()</code> to
        distribute funds after a ruling.
      </p>

      <h2>Dispute Phases</h2>
      <pre><code>{`None → Negotiation → Mediation → Arbitration → Resolved`}</code></pre>

      <table>
        <thead>
          <tr><th>Phase</th><th>Duration</th><th>Who resolves</th></tr>
        </thead>
        <tbody>
          <tr><td>Negotiation</td><td>5 days</td><td>Buyer & merchant (settlement)</td></tr>
          <tr><td>Mediation</td><td>5 days</td><td>Assigned mediator</td></tr>
          <tr><td>Arbitration</td><td>7 days</td><td>Assigned arbitrator (binding)</td></tr>
        </tbody>
      </table>

      <h2>Key Functions</h2>

      <h3>openDispute</h3>
      <pre><code>{`function openDispute(
  bytes32 escrowId,
  bytes32 reasonHash,
  string calldata reasonUri
) external;`}</code></pre>
      <p>Opens a dispute for a funded/delivered escrow. Sets the escrow status to Disputed.</p>

      <h3>submitEvidence</h3>
      <pre><code>{`function submitEvidence(
  bytes32 escrowId,
  uint8 evidenceType,    // 0=screenshot, 1=document, 2=link, 3=text
  bytes32 contentHash,   // SHA-256 of evidence file
  string calldata uri    // IPFS or HTTPS URL to evidence
) external;`}</code></pre>

      <h3>proposeSettlement / acceptSettlement</h3>
      <pre><code>{`// Either party proposes a split
function proposeSettlement(
  bytes32 escrowId,
  uint256 buyerAmount,
  uint256 merchantAmount
) external;

// Other party accepts the proposed split
function acceptSettlement(bytes32 escrowId) external;`}</code></pre>

      <h3>mediatorResolve</h3>
      <pre><code>{`function mediatorResolve(
  bytes32 escrowId,
  uint8 outcome,          // DisputeOutcome enum
  uint256 buyerAmount,
  uint256 merchantAmount
) external;`}</code></pre>

      <h3>arbitratorResolve</h3>
      <pre><code>{`function arbitratorResolve(
  bytes32 escrowId,
  uint8 outcome,
  uint256 buyerAmount,
  uint256 merchantAmount,
  bytes32 reasonHash,
  string calldata reasonUri
) external;`}</code></pre>

      <h3>advancePhase</h3>
      <p>Anyone can call to advance a dispute to the next phase when the current deadline expires.</p>
      <pre><code>{`function advancePhase(bytes32 escrowId) external;`}</code></pre>

      <h3>triggerMerchantNoShow</h3>
      <p>Auto-refund if merchant didn&apos;t respond during negotiation.</p>
      <pre><code>{`function triggerMerchantNoShow(bytes32 escrowId) external;`}</code></pre>

      <h2>Outcomes</h2>
      <table>
        <thead>
          <tr><th>Outcome</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td><code>FullRefund</code></td><td>100% returned to buyer</td></tr>
          <tr><td><code>FullRelease</code></td><td>100% sent to merchant (minus fee)</td></tr>
          <tr><td><code>SplitDecision</code></td><td>Custom split between buyer and merchant</td></tr>
          <tr><td><code>MerchantNoShow</code></td><td>Auto-refund: merchant didn&apos;t respond</td></tr>
          <tr><td><code>BuyerAbandoned</code></td><td>Auto-release: buyer didn&apos;t provide evidence</td></tr>
        </tbody>
      </table>

      <h2>Auto-Resolve Logic</h2>
      <p>
        If arbitration expires without a ruling, the contract applies deterministic rules:
      </p>
      <ul>
        <li>Merchant submitted 0 evidence → full refund to buyer</li>
        <li>Buyer submitted 0 evidence → full release to merchant</li>
        <li>Both submitted evidence → 50/50 split</li>
      </ul>
      <p>
        This ensures funds are never permanently locked, even if all off-chain
        participants (mediators, arbitrators, Rowship) go offline.
      </p>

      <h2>Events</h2>
      <pre><code>{`event DisputeOpened(bytes32 indexed escrowId, address initiator, bytes32 reasonHash);
event EvidenceSubmitted(bytes32 indexed escrowId, address submitter, uint8 evidenceType, bytes32 contentHash);
event SettlementProposed(bytes32 indexed escrowId, address proposer, uint256 buyerAmount, uint256 merchantAmount);
event SettlementAccepted(bytes32 indexed escrowId);
event PhaseAdvanced(bytes32 indexed escrowId, uint8 newPhase, uint64 deadline);
event DisputeResolved(bytes32 indexed escrowId, uint8 outcome, uint256 buyerAmount, uint256 merchantAmount);`}</code></pre>
    </div>
  );
}
