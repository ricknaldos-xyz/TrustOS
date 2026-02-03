import type { Metadata } from "next";

export const metadata: Metadata = { title: "TrustEscrow Contract" };

export default function EscrowContractPage() {
  return (
    <div>
      <h1>TrustEscrow</h1>
      <p>
        The core escrow contract. Holds USDC and enforces the payment lifecycle.
        Uses UUPS proxy pattern for upgradeability with a 48-hour timelock.
      </p>

      <h2>Contract Address</h2>
      <table>
        <thead>
          <tr><th>Network</th><th>Address</th></tr>
        </thead>
        <tbody>
          <tr><td>Base Sepolia</td><td><code>TBD</code></td></tr>
          <tr><td>Base Mainnet</td><td><code>TBD</code></td></tr>
        </tbody>
      </table>

      <h2>State Machine</h2>
      <pre><code>{`Created → Funded → Delivered → Released (terminal)
               ↘ Disputed → Resolved (Released or Refunded)
               ↘ Expired (auto-refund: merchant missed delivery deadline)
Funded → AutoReleased (buyer didn't dispute within protection period)
Created → Cancelled (cancelled before funding)`}</code></pre>

      <h2>Key Functions</h2>

      <h3>createEscrow</h3>
      <p>Creates a new escrow record. Called by the merchant (via TrustOS API) or directly.</p>
      <pre><code>{`function createEscrow(
  CreateEscrowParams calldata params
) external returns (bytes32 escrowId);

struct CreateEscrowParams {
  bytes32 orderId;
  address buyer;
  address merchant;
  address psp;              // address(0) if direct
  address token;            // USDC address
  uint256 amount;
  uint64 deliveryDeadline;  // seconds from funding
  uint64 acceptanceDeadline; // seconds from delivery
}`}</code></pre>

      <h3>fund / fundWithPermit</h3>
      <p>Buyer deposits USDC into escrow. <code>fundWithPermit</code> uses EIP-2612 to combine approval and deposit in one transaction.</p>
      <pre><code>{`function fund(bytes32 escrowId) external;

function fundWithPermit(
  bytes32 escrowId,
  uint256 deadline,
  uint8 v, bytes32 r, bytes32 s
) external;`}</code></pre>

      <h3>markDelivered</h3>
      <p>Merchant marks the order as delivered. Starts the buyer acceptance window.</p>
      <pre><code>{`function markDelivered(bytes32 escrowId) external;`}</code></pre>

      <h3>release</h3>
      <p>Buyer confirms receipt. Transfers USDC (minus fee) to merchant.</p>
      <pre><code>{`function release(bytes32 escrowId) external;`}</code></pre>

      <h3>triggerAutoRelease</h3>
      <p>Anyone can call after the acceptance deadline. Releases funds to merchant.</p>
      <pre><code>{`function triggerAutoRelease(bytes32 escrowId) external;`}</code></pre>

      <h3>triggerExpiry</h3>
      <p>Anyone can call if merchant missed delivery deadline. Refunds buyer.</p>
      <pre><code>{`function triggerExpiry(bytes32 escrowId) external;`}</code></pre>

      <h2>Events</h2>
      <pre><code>{`event EscrowCreated(bytes32 indexed escrowId, bytes32 indexed orderId, address buyer, address merchant, uint256 amount);
event EscrowFunded(bytes32 indexed escrowId, address buyer, uint256 amount, uint256 fee);
event DeliveryMarked(bytes32 indexed escrowId, uint64 acceptanceDeadline);
event FundsReleased(bytes32 indexed escrowId, address merchant, uint256 amount, uint256 fee);
event FundsRefunded(bytes32 indexed escrowId, address buyer, uint256 amount);
event EscrowExpired(bytes32 indexed escrowId);
event AutoReleased(bytes32 indexed escrowId);
event EscrowCancelled(bytes32 indexed escrowId);`}</code></pre>

      <h2>Security Properties</h2>
      <ul>
        <li>No admin function can withdraw escrowed funds</li>
        <li>Only the designated buyer can fund a specific escrow</li>
        <li>Only the buyer can release funds (or auto-release via timeout)</li>
        <li>Only the TrustDispute contract can execute dispute resolutions</li>
        <li>Pausable by multisig for emergency situations</li>
        <li>ReentrancyGuard on all state-changing functions</li>
      </ul>
    </div>
  );
}
