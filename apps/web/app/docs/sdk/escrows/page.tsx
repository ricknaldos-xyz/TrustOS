import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SDK Escrows",
};

export default function SdkEscrowsPage() {
  return (
    <div>
      <h1>SDK &mdash; Escrows</h1>
      <p>
        The <code>trustos.escrows</code> namespace contains all methods for
        creating, querying, and settling non-custodial USDC escrows on Base L2.
        Every method returns a typed promise, and all on-chain operations are
        submitted through the TrustOS relayer so your users never need to hold
        ETH for gas.
      </p>

      <h2>TypeScript Interfaces</h2>
      <p>
        The following interfaces are exported from <code>@trustos/sdk</code> and
        describe the shapes used throughout the escrows namespace.
      </p>
      <pre><code>{`interface Escrow {
  /** Unique escrow identifier (UUID). */
  id: string;
  /** On-chain escrow ID (uint256 as string). */
  onChainId: string;
  /** Current state of the escrow. */
  state:
    | "created"
    | "funded"
    | "delivered"
    | "released"
    | "refunded"
    | "disputed"
    | "expired";
  /** USDC amount held in escrow (human-readable, e.g. "250.00"). */
  amount: string;
  /** Ethereum address of the seller / payee. */
  seller: string;
  /** Ethereum address of the buyer / payer. Populated after funding. */
  buyer: string | null;
  /** Human-readable description of the escrow. */
  description: string;
  /** URL the buyer can visit to fund the escrow. */
  fundUrl: string;
  /** Base L2 transaction hash of the creation tx. */
  txHash: string;
  /** ISO-8601 timestamp when the escrow was created. */
  createdAt: string;
  /** ISO-8601 timestamp when the escrow expires. */
  expiresAt: string;
  /** ISO-8601 timestamp of the last state change. */
  updatedAt: string;
}

interface CreateEscrowParams {
  /** USDC amount as a decimal string (e.g. "100.00"). */
  amount: string;
  /** Ethereum address of the seller / payee. */
  seller: string;
  /** Human-readable description (max 280 chars). */
  description: string;
  /** Time-to-live in seconds before the escrow expires. */
  expiresIn: number;
  /** Optional idempotency key to prevent duplicate escrows. */
  idempotencyKey?: string;
  /** Optional metadata object stored off-chain. */
  metadata?: Record<string, string>;
}

interface EscrowListParams {
  /** Filter by escrow state. */
  state?: Escrow["state"];
  /** Filter by seller address. */
  seller?: string;
  /** Filter by buyer address. */
  buyer?: string;
  /** Number of results per page (default 20, max 100). */
  limit?: number;
  /** Cursor for pagination (from previous response). */
  cursor?: string;
}`}</code></pre>

      <h2>Methods</h2>

      <h3>
        <code>trustos.escrows.create(params)</code>
      </h3>
      <p>
        Creates a new escrow. The escrow is registered on-chain via the
        TrustEscrow contract and enters the <code>created</code> state. A{" "}
        <code>fundUrl</code> is returned for the buyer to deposit USDC.
      </p>
      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>params</code></td>
            <td><code>CreateEscrowParams</code></td>
            <td>Escrow creation parameters (see interface above).</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Returns:</strong> <code>Promise&lt;Escrow&gt;</code>
      </p>
      <pre><code>{`const escrow = await trustos.escrows.create({
  amount: "500.00",
  seller: "0xABCDEF1234567890ABCDEF1234567890ABCDEF12",
  description: "Website redesign milestone 1",
  expiresIn: 60 * 60 * 24 * 14, // 14 days
  idempotencyKey: "order-42",
  metadata: {
    orderId: "42",
    project: "website-redesign",
  },
});

console.log(escrow.id);      // "esc_a1b2c3d4..."
console.log(escrow.fundUrl); // "https://pay.trustos.io/esc_a1b2c3d4..."
console.log(escrow.state);   // "created"`}</code></pre>

      <h3>
        <code>trustos.escrows.get(id)</code>
      </h3>
      <p>
        Retrieves a single escrow by its ID. Use this to poll for state changes
        or to display escrow details in your UI.
      </p>
      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>id</code></td>
            <td><code>string</code></td>
            <td>The escrow ID returned from <code>create</code>.</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Returns:</strong> <code>Promise&lt;Escrow&gt;</code>
      </p>
      <pre><code>{`const escrow = await trustos.escrows.get("esc_a1b2c3d4");

console.log(escrow.state);     // "funded"
console.log(escrow.buyer);     // "0x1234..."
console.log(escrow.amount);    // "500.00"
console.log(escrow.expiresAt); // "2026-02-16T00:00:00.000Z"`}</code></pre>

      <h3>
        <code>trustos.escrows.list(filters?)</code>
      </h3>
      <p>
        Returns a paginated list of escrows matching the given filters. Results
        are ordered by creation date, newest first.
      </p>
      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>filters</code></td>
            <td><code>EscrowListParams</code></td>
            <td>Optional filters and pagination options.</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Returns:</strong>{" "}
        <code>{"Promise<{ data: Escrow[]; pagination: { cursor: string | null; hasMore: boolean } }>"}</code>
      </p>
      <pre><code>{`// List all funded escrows for a specific seller
const { data, pagination } = await trustos.escrows.list({
  state: "funded",
  seller: "0xABCDEF1234567890ABCDEF1234567890ABCDEF12",
  limit: 10,
});

console.log(data.length);          // 10
console.log(pagination.hasMore);   // true
console.log(pagination.cursor);    // "cur_xyz..."

// Fetch the next page
const page2 = await trustos.escrows.list({
  state: "funded",
  seller: "0xABCDEF1234567890ABCDEF1234567890ABCDEF12",
  limit: 10,
  cursor: pagination.cursor!,
});`}</code></pre>

      <h3>
        <code>trustos.escrows.release(id)</code>
      </h3>
      <p>
        Releases the escrowed USDC to the seller. This triggers an on-chain
        transaction that transfers the funds from the TrustEscrow contract to
        the seller address. The escrow moves to the <code>released</code> state.
      </p>
      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>id</code></td>
            <td><code>string</code></td>
            <td>The escrow ID to release.</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Returns:</strong> <code>Promise&lt;Escrow&gt;</code> &mdash; the
        updated escrow with <code>state: &quot;released&quot;</code>.
      </p>
      <pre><code>{`const released = await trustos.escrows.release("esc_a1b2c3d4");

console.log(released.state);   // "released"
console.log(released.txHash);  // "0xabcdef..." (release tx hash)`}</code></pre>

      <h3>
        <code>trustos.escrows.refund(id)</code>
      </h3>
      <p>
        Refunds the escrowed USDC back to the buyer. This triggers an on-chain
        transaction that transfers the funds from the TrustEscrow contract to
        the buyer address. The escrow moves to the <code>refunded</code> state.
      </p>
      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>id</code></td>
            <td><code>string</code></td>
            <td>The escrow ID to refund.</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Returns:</strong> <code>Promise&lt;Escrow&gt;</code> &mdash; the
        updated escrow with <code>state: &quot;refunded&quot;</code>.
      </p>
      <pre><code>{`const refunded = await trustos.escrows.refund("esc_a1b2c3d4");

console.log(refunded.state);   // "refunded"
console.log(refunded.txHash);  // "0x123456..." (refund tx hash)`}</code></pre>

      <h2>Error Handling</h2>
      <p>
        All methods throw a <code>TrustOSError</code> when the API returns a
        non-2xx response. The error includes a machine-readable <code>code</code>{" "}
        and a human-readable <code>message</code>.
      </p>
      <pre><code>{`import { TrustOSError } from "@trustos/sdk";

try {
  await trustos.escrows.release("esc_invalid");
} catch (err) {
  if (err instanceof TrustOSError) {
    console.error(err.code);    // "ESCROW_NOT_FOUND"
    console.error(err.message); // "Escrow esc_invalid not found"
    console.error(err.status);  // 404
  }
}`}</code></pre>
    </div>
  );
}
