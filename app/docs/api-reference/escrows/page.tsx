import type { Metadata } from "next";
import { ApiEndpoint } from "../../_components/ApiEndpoint";
import { ParamTable } from "../../_components/ParamTable";
import { CodeBlock } from "../../_components/CodeBlock";
import { Callout } from "../../_components/Callout";

export const metadata: Metadata = {
  title: "Escrows API",
};

export default function EscrowsApiPage() {
  return (
    <div>
      <h1>Escrows API</h1>
      <p>
        Create, retrieve, and manage non-custodial USDC escrows on Base L2.
        All endpoints require a valid API key passed via the{" "}
        <code>Authorization</code> header.
      </p>

      <Callout type="info" title="Base URL">
        <p>
          All endpoints are relative to <code>https://api.trustos.io/v1</code>
        </p>
      </Callout>

      <h2>Authentication</h2>
      <p>
        Include your API key in every request as a Bearer token:
      </p>
      <CodeBlock language="bash" title="Authentication header">
        {`Authorization: Bearer tros_sk_live_...`}
      </CodeBlock>

      <h2>Escrow statuses</h2>
      <p>
        An escrow transitions through the following statuses during its lifecycle:
      </p>
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>created</code></td>
            <td>Escrow created, awaiting buyer funding via checkout.</td>
          </tr>
          <tr>
            <td><code>funded</code></td>
            <td>Buyer has deposited USDC into the on-chain escrow contract.</td>
          </tr>
          <tr>
            <td><code>delivered</code></td>
            <td>Merchant marked the order as delivered. Protection period is active.</td>
          </tr>
          <tr>
            <td><code>disputed</code></td>
            <td>Buyer has opened a dispute during the protection period.</td>
          </tr>
          <tr>
            <td><code>released</code></td>
            <td>Funds released to merchant (manually, via auto-release, or arbitration).</td>
          </tr>
          <tr>
            <td><code>refunded</code></td>
            <td>Funds returned to buyer (voluntary refund or arbitration).</td>
          </tr>
          <tr>
            <td><code>cancelled</code></td>
            <td>Escrow cancelled before funding.</td>
          </tr>
          <tr>
            <td><code>expired</code></td>
            <td>Escrow expired because the buyer did not fund it in time.</td>
          </tr>
        </tbody>
      </table>

      {/* ------------------------------------------------------------------ */}
      <h2>Create escrow</h2>
      <ApiEndpoint
        method="POST"
        path="/v1/escrows"
        description="Create a new non-custodial escrow. Returns a checkout URL that the buyer uses to fund the escrow on-chain."
      >
        <h3>Request body</h3>
        <ParamTable
          params={[
            {
              name: "orderId",
              type: "string",
              required: true,
              description:
                "Your unique order or invoice identifier. Must be unique per merchant.",
            },
            {
              name: "amount",
              type: "string",
              required: true,
              description:
                'USDC amount as a decimal string (e.g. "150.00"). Minimum 1.00.',
            },
            {
              name: "token",
              type: "string",
              required: false,
              description: 'Token symbol. Defaults to "USDC". Currently only USDC is supported.',
            },
            {
              name: "buyerAddress",
              type: "string",
              required: true,
              description:
                "The buyer's 0x wallet address on Base. Used to verify the on-chain deposit.",
            },
            {
              name: "releaseDays",
              type: "number",
              required: false,
              description:
                "Protection period in days before auto-release. Defaults to 14. Range: 1-90.",
            },
            {
              name: "metadata",
              type: "object",
              required: false,
              description:
                "Arbitrary key-value pairs attached to the escrow (e.g. product name, SKU). Max 10 keys, 500 chars per value.",
            },
          ]}
        />

        <h3>Example request</h3>
        <CodeBlock language="bash" title="curl">
          {`curl -X POST https://api.trustos.io/v1/escrows \\
  -H "Authorization: Bearer tros_sk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "orderId": "order_abc123",
    "amount": "150.00",
    "token": "USDC",
    "buyerAddress": "0x1234567890abcdef1234567890abcdef12345678",
    "releaseDays": 14,
    "metadata": {
      "product": "Vintage Watch",
      "sku": "VW-2024-001"
    }
  }'`}
        </CodeBlock>

        <h3>Response</h3>
        <CodeBlock language="json" title="201 Created">
          {`{
  "id": "esc_8v3kQmNpXr",
  "onChainId": "0xabc123...def456",
  "status": "created",
  "checkoutUrl": "https://pay.trustos.io/esc_8v3kQmNpXr",
  "amount": "150.00",
  "token": "USDC",
  "createdAt": "2025-07-15T10:30:00.000Z"
}`}
        </CodeBlock>

        <Callout type="info" title="Next step">
          <p>
            Redirect your buyer to <code>checkoutUrl</code> to complete the
            on-chain deposit. Once funded, the escrow status changes to{" "}
            <code>funded</code> and a <code>escrow.funded</code> webhook is fired.
          </p>
        </Callout>
      </ApiEndpoint>

      {/* ------------------------------------------------------------------ */}
      <h2>Get escrow</h2>
      <ApiEndpoint
        method="GET"
        path="/v1/escrows/:id"
        description="Retrieve full details of an escrow, including on-chain transaction hashes, buyer and merchant info, and all timestamps."
      >
        <h3>Path parameters</h3>
        <ParamTable
          params={[
            {
              name: "id",
              type: "string",
              required: true,
              description: 'Escrow ID (e.g. "esc_8v3kQmNpXr").',
            },
          ]}
        />

        <h3>Example request</h3>
        <CodeBlock language="bash" title="curl">
          {`curl https://api.trustos.io/v1/escrows/esc_8v3kQmNpXr \\
  -H "Authorization: Bearer tros_sk_live_..."`}
        </CodeBlock>

        <h3>Response</h3>
        <CodeBlock language="json" title="200 OK">
          {`{
  "id": "esc_8v3kQmNpXr",
  "onChainId": "0xabc123...def456",
  "orderId": "order_abc123",
  "status": "funded",
  "amount": "150.00",
  "token": "USDC",
  "buyer": {
    "address": "0x1234567890abcdef1234567890abcdef12345678"
  },
  "merchant": {
    "id": "mer_Qw9xLp",
    "address": "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
  },
  "releaseDays": 14,
  "checkoutUrl": "https://pay.trustos.io/esc_8v3kQmNpXr",
  "metadata": {
    "product": "Vintage Watch",
    "sku": "VW-2024-001"
  },
  "txHashes": {
    "fund": "0x7f1a2b3c...deposit_tx",
    "release": null,
    "refund": null
  },
  "createdAt": "2025-07-15T10:30:00.000Z",
  "fundedAt": "2025-07-15T10:35:12.000Z",
  "deliveredAt": null,
  "releasedAt": null,
  "refundedAt": null,
  "expiresAt": "2025-07-29T10:35:12.000Z"
}`}
        </CodeBlock>
      </ApiEndpoint>

      {/* ------------------------------------------------------------------ */}
      <h2>List escrows</h2>
      <ApiEndpoint
        method="GET"
        path="/v1/escrows"
        description="Retrieve a paginated list of escrows for your merchant account. Supports filtering by status and sorting."
      >
        <h3>Query parameters</h3>
        <ParamTable
          params={[
            {
              name: "status",
              type: "string",
              required: false,
              description:
                "Filter by escrow status. Accepts a single status or comma-separated list (e.g. \"funded,delivered\").",
            },
            {
              name: "page",
              type: "number",
              required: false,
              description: "Page number (1-indexed). Defaults to 1.",
            },
            {
              name: "limit",
              type: "number",
              required: false,
              description:
                "Number of results per page. Defaults to 20. Maximum 100.",
            },
            {
              name: "sort",
              type: "string",
              required: false,
              description:
                'Sort order. Accepts "created_asc", "created_desc" (default), "amount_asc", "amount_desc".',
            },
          ]}
        />

        <h3>Example request</h3>
        <CodeBlock language="bash" title="curl">
          {`curl "https://api.trustos.io/v1/escrows?status=funded&page=1&limit=10&sort=created_desc" \\
  -H "Authorization: Bearer tros_sk_live_..."`}
        </CodeBlock>

        <h3>Response</h3>
        <CodeBlock language="json" title="200 OK">
          {`{
  "data": [
    {
      "id": "esc_8v3kQmNpXr",
      "onChainId": "0xabc123...def456",
      "orderId": "order_abc123",
      "status": "funded",
      "amount": "150.00",
      "token": "USDC",
      "createdAt": "2025-07-15T10:30:00.000Z",
      "fundedAt": "2025-07-15T10:35:12.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "totalItems": 42,
    "totalPages": 5
  }
}`}
        </CodeBlock>
      </ApiEndpoint>

      {/* ------------------------------------------------------------------ */}
      <h2>Release funds</h2>
      <ApiEndpoint
        method="POST"
        path="/v1/escrows/:id/release"
        description="Release escrowed USDC to the merchant wallet. Can be called by the buyer (early release) or triggered automatically after the protection period expires. Merchants can also request release once the escrow status is 'delivered'."
      >
        <h3>Path parameters</h3>
        <ParamTable
          params={[
            {
              name: "id",
              type: "string",
              required: true,
              description: "Escrow ID to release.",
            },
          ]}
        />

        <h3>Example request</h3>
        <CodeBlock language="bash" title="curl">
          {`curl -X POST https://api.trustos.io/v1/escrows/esc_8v3kQmNpXr/release \\
  -H "Authorization: Bearer tros_sk_live_..."`}
        </CodeBlock>

        <h3>Response</h3>
        <CodeBlock language="json" title="200 OK">
          {`{
  "id": "esc_8v3kQmNpXr",
  "status": "released",
  "amount": "150.00",
  "token": "USDC",
  "txHashes": {
    "fund": "0x7f1a2b3c...deposit_tx",
    "release": "0x9d8e7f6a...release_tx",
    "refund": null
  },
  "releasedAt": "2025-07-20T14:22:05.000Z"
}`}
        </CodeBlock>

        <Callout type="warning" title="Irreversible">
          <p>
            Once funds are released on-chain, the transaction cannot be reversed.
            The escrow status permanently changes to <code>released</code>.
          </p>
        </Callout>
      </ApiEndpoint>

      {/* ------------------------------------------------------------------ */}
      <h2>Refund escrow</h2>
      <ApiEndpoint
        method="POST"
        path="/v1/escrows/:id/refund"
        description="Voluntarily refund escrowed USDC back to the buyer. Can only be initiated by the merchant. The escrow must be in 'funded' or 'delivered' status."
      >
        <h3>Path parameters</h3>
        <ParamTable
          params={[
            {
              name: "id",
              type: "string",
              required: true,
              description: "Escrow ID to refund.",
            },
          ]}
        />

        <h3>Example request</h3>
        <CodeBlock language="bash" title="curl">
          {`curl -X POST https://api.trustos.io/v1/escrows/esc_8v3kQmNpXr/refund \\
  -H "Authorization: Bearer tros_sk_live_..."`}
        </CodeBlock>

        <h3>Response</h3>
        <CodeBlock language="json" title="200 OK">
          {`{
  "id": "esc_8v3kQmNpXr",
  "status": "refunded",
  "amount": "150.00",
  "token": "USDC",
  "txHashes": {
    "fund": "0x7f1a2b3c...deposit_tx",
    "release": null,
    "refund": "0xb2c3d4e5...refund_tx"
  },
  "refundedAt": "2025-07-18T09:15:33.000Z"
}`}
        </CodeBlock>

        <Callout type="warning" title="Irreversible">
          <p>
            Once a refund is submitted on-chain, the transaction cannot be reversed.
            The escrow status permanently changes to <code>refunded</code>.
          </p>
        </Callout>
      </ApiEndpoint>

      {/* ------------------------------------------------------------------ */}
      <h2>Error responses</h2>
      <p>
        All error responses follow a consistent format:
      </p>
      <CodeBlock language="json" title="Error response">
        {`{
  "error": {
    "code": "escrow_not_found",
    "message": "No escrow found with id esc_invalid",
    "status": 404
  }
}`}
      </CodeBlock>

      <table>
        <thead>
          <tr>
            <th>HTTP Status</th>
            <th>Code</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>400</td>
            <td><code>validation_error</code></td>
            <td>Missing or invalid request parameters.</td>
          </tr>
          <tr>
            <td>401</td>
            <td><code>unauthorized</code></td>
            <td>Missing or invalid API key.</td>
          </tr>
          <tr>
            <td>404</td>
            <td><code>escrow_not_found</code></td>
            <td>Escrow does not exist or does not belong to your account.</td>
          </tr>
          <tr>
            <td>409</td>
            <td><code>invalid_status_transition</code></td>
            <td>The requested action is not allowed for the current escrow status.</td>
          </tr>
          <tr>
            <td>429</td>
            <td><code>rate_limit_exceeded</code></td>
            <td>Too many requests. Default limit is 100 requests per minute.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
