import type { Metadata } from "next";
import { ApiEndpoint } from "../../_components/ApiEndpoint";
import { ParamTable } from "../../_components/ParamTable";
import { CodeBlock } from "../../_components/CodeBlock";
import { Callout } from "../../_components/Callout";

export const metadata: Metadata = {
  title: "Disputes API",
};

export default function DisputesApiPage() {
  return (
    <div>
      <h1>Disputes API</h1>
      <p>
        Open, track, and resolve disputes on escrowed USDC payments. The dispute
        system provides an evidence-based resolution process with defined phases
        and deadlines, ensuring fair outcomes for both buyers and merchants.
      </p>

      <Callout type="info" title="Base URL">
        <p>
          All endpoints are relative to <code>https://api.trustos.io/v1</code>
        </p>
      </Callout>

      <h2>Dispute phases</h2>
      <p>
        Every dispute progresses through a series of phases. Each phase has a
        time limit; if no action is taken, the dispute automatically advances.
      </p>
      <table>
        <thead>
          <tr>
            <th>Phase</th>
            <th>Duration</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>negotiation</code></td>
            <td>72 hours</td>
            <td>
              Buyer and merchant communicate directly. Either party can submit
              evidence or propose a resolution.
            </td>
          </tr>
          <tr>
            <td><code>mediation</code></td>
            <td>5 days</td>
            <td>
              A TrustOS mediator reviews submitted evidence and attempts to
              broker an agreement between both parties.
            </td>
          </tr>
          <tr>
            <td><code>arbitration</code></td>
            <td>7 days</td>
            <td>
              An independent arbitrator reviews all evidence and renders a
              binding decision. The outcome is enforced on-chain.
            </td>
          </tr>
          <tr>
            <td><code>resolved</code></td>
            <td>&mdash;</td>
            <td>
              Final state. The dispute outcome has been executed on-chain
              (funds released or refunded).
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Dispute outcomes</h2>
      <p>
        When a dispute reaches resolution, one of the following outcomes is applied:
      </p>
      <table>
        <thead>
          <tr>
            <th>Outcome</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>full_refund</code></td>
            <td>100% of escrowed USDC is returned to the buyer.</td>
          </tr>
          <tr>
            <td><code>full_release</code></td>
            <td>100% of escrowed USDC is released to the merchant.</td>
          </tr>
          <tr>
            <td><code>split_decision</code></td>
            <td>
              Escrowed USDC is split between buyer and merchant at a ratio
              determined by the arbitrator.
            </td>
          </tr>
          <tr>
            <td><code>merchant_no_show</code></td>
            <td>
              Merchant failed to respond within the deadline. Full refund is
              issued to the buyer automatically.
            </td>
          </tr>
          <tr>
            <td><code>buyer_abandoned</code></td>
            <td>
              Buyer failed to provide evidence within the deadline. Full release
              is issued to the merchant automatically.
            </td>
          </tr>
        </tbody>
      </table>

      {/* ------------------------------------------------------------------ */}
      <h2>Open dispute</h2>
      <ApiEndpoint
        method="POST"
        path="/v1/disputes"
        description="Open a new dispute on a funded or delivered escrow. Only the buyer can initiate a dispute, and only during the protection period."
      >
        <h3>Request body</h3>
        <ParamTable
          params={[
            {
              name: "escrowId",
              type: "string",
              required: true,
              description:
                'The ID of the escrow to dispute (e.g. "esc_8v3kQmNpXr").',
            },
            {
              name: "reason",
              type: "string",
              required: true,
              description:
                "A description of why the dispute is being opened. Maximum 2000 characters.",
            },
          ]}
        />

        <h3>Example request</h3>
        <CodeBlock language="bash" title="curl">
          {`curl -X POST https://api.trustos.io/v1/disputes \\
  -H "Authorization: Bearer tros_sk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "escrowId": "esc_8v3kQmNpXr",
    "reason": "Item received is significantly different from the listing. The watch has visible scratches and the band is broken."
  }'`}
        </CodeBlock>

        <h3>Response</h3>
        <CodeBlock language="json" title="201 Created">
          {`{
  "id": "dsp_Tn4mKqWv",
  "escrowId": "esc_8v3kQmNpXr",
  "status": "open",
  "phase": "negotiation",
  "reason": "Item received is significantly different from the listing. The watch has visible scratches and the band is broken.",
  "outcome": null,
  "evidence": [],
  "phaseDeadline": "2025-07-21T10:30:00.000Z",
  "createdAt": "2025-07-18T10:30:00.000Z",
  "resolvedAt": null
}`}
        </CodeBlock>

        <Callout type="info" title="Escrow status change">
          <p>
            Opening a dispute changes the escrow status to <code>disputed</code>{" "}
            and pauses the auto-release countdown. Funds remain locked in the
            smart contract until the dispute is resolved.
          </p>
        </Callout>
      </ApiEndpoint>

      {/* ------------------------------------------------------------------ */}
      <h2>Get dispute</h2>
      <ApiEndpoint
        method="GET"
        path="/v1/disputes/:id"
        description="Retrieve full details of a dispute, including its current phase, all submitted evidence, and resolution outcome (if resolved)."
      >
        <h3>Path parameters</h3>
        <ParamTable
          params={[
            {
              name: "id",
              type: "string",
              required: true,
              description: 'Dispute ID (e.g. "dsp_Tn4mKqWv").',
            },
          ]}
        />

        <h3>Example request</h3>
        <CodeBlock language="bash" title="curl">
          {`curl https://api.trustos.io/v1/disputes/dsp_Tn4mKqWv \\
  -H "Authorization: Bearer tros_sk_live_..."`}
        </CodeBlock>

        <h3>Response</h3>
        <CodeBlock language="json" title="200 OK">
          {`{
  "id": "dsp_Tn4mKqWv",
  "escrowId": "esc_8v3kQmNpXr",
  "status": "open",
  "phase": "mediation",
  "reason": "Item received is significantly different from the listing. The watch has visible scratches and the band is broken.",
  "outcome": null,
  "evidence": [
    {
      "id": "evi_Xk2pLm",
      "disputeId": "dsp_Tn4mKqWv",
      "submittedBy": "buyer",
      "type": "image",
      "contentUrl": "https://uploads.trustos.io/evi/photo_scratches.jpg",
      "description": "Photo showing scratches on the watch face.",
      "createdAt": "2025-07-18T11:00:00.000Z"
    },
    {
      "id": "evi_Rn7qBw",
      "disputeId": "dsp_Tn4mKqWv",
      "submittedBy": "merchant",
      "type": "document",
      "contentUrl": "https://uploads.trustos.io/evi/shipping_receipt.pdf",
      "description": "Shipping receipt confirming item was packed in original condition.",
      "createdAt": "2025-07-19T08:15:00.000Z"
    }
  ],
  "buyer": {
    "address": "0x1234567890abcdef1234567890abcdef12345678"
  },
  "merchant": {
    "id": "mer_Qw9xLp",
    "address": "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
  },
  "phaseDeadline": "2025-07-26T10:30:00.000Z",
  "createdAt": "2025-07-18T10:30:00.000Z",
  "resolvedAt": null
}`}
        </CodeBlock>
      </ApiEndpoint>

      {/* ------------------------------------------------------------------ */}
      <h2>List disputes</h2>
      <ApiEndpoint
        method="GET"
        path="/v1/disputes"
        description="Retrieve a paginated list of disputes for your merchant account."
      >
        <h3>Query parameters</h3>
        <ParamTable
          params={[
            {
              name: "status",
              type: "string",
              required: false,
              description:
                'Filter by dispute status: "open" or "resolved".',
            },
            {
              name: "phase",
              type: "string",
              required: false,
              description:
                'Filter by current phase: "negotiation", "mediation", "arbitration", or "resolved".',
            },
            {
              name: "escrowId",
              type: "string",
              required: false,
              description: "Filter disputes by a specific escrow ID.",
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
          ]}
        />

        <h3>Example request</h3>
        <CodeBlock language="bash" title="curl">
          {`curl "https://api.trustos.io/v1/disputes?status=open&phase=negotiation&page=1&limit=10" \\
  -H "Authorization: Bearer tros_sk_live_..."`}
        </CodeBlock>

        <h3>Response</h3>
        <CodeBlock language="json" title="200 OK">
          {`{
  "data": [
    {
      "id": "dsp_Tn4mKqWv",
      "escrowId": "esc_8v3kQmNpXr",
      "status": "open",
      "phase": "negotiation",
      "reason": "Item received is significantly different from the listing.",
      "outcome": null,
      "phaseDeadline": "2025-07-21T10:30:00.000Z",
      "createdAt": "2025-07-18T10:30:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "totalItems": 3,
    "totalPages": 1
  }
}`}
        </CodeBlock>
      </ApiEndpoint>

      {/* ------------------------------------------------------------------ */}
      <h2>Submit evidence</h2>
      <ApiEndpoint
        method="POST"
        path="/v1/disputes/:id/evidence"
        description="Submit evidence for an open dispute. Both the buyer and the merchant can submit evidence during the negotiation and mediation phases. Evidence is immutable once submitted."
      >
        <h3>Path parameters</h3>
        <ParamTable
          params={[
            {
              name: "id",
              type: "string",
              required: true,
              description: "Dispute ID to submit evidence for.",
            },
          ]}
        />

        <h3>Request body</h3>
        <ParamTable
          params={[
            {
              name: "type",
              type: "string",
              required: true,
              description:
                'Evidence type. One of: "image", "document", "text", "link", "video".',
            },
            {
              name: "contentUrl",
              type: "string",
              required: true,
              description:
                "URL to the evidence content. Must be a publicly accessible HTTPS URL or a TrustOS upload URL. Maximum file size: 25 MB.",
            },
            {
              name: "description",
              type: "string",
              required: true,
              description:
                "A brief description of what this evidence demonstrates. Maximum 1000 characters.",
            },
          ]}
        />

        <h3>Example request</h3>
        <CodeBlock language="bash" title="curl">
          {`curl -X POST https://api.trustos.io/v1/disputes/dsp_Tn4mKqWv/evidence \\
  -H "Authorization: Bearer tros_sk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "image",
    "contentUrl": "https://uploads.trustos.io/evi/photo_scratches.jpg",
    "description": "Photo showing deep scratches on the watch face that were not disclosed in the listing."
  }'`}
        </CodeBlock>

        <h3>Response</h3>
        <CodeBlock language="json" title="201 Created">
          {`{
  "id": "evi_Xk2pLm",
  "disputeId": "dsp_Tn4mKqWv",
  "submittedBy": "buyer",
  "type": "image",
  "contentUrl": "https://uploads.trustos.io/evi/photo_scratches.jpg",
  "description": "Photo showing deep scratches on the watch face that were not disclosed in the listing.",
  "createdAt": "2025-07-18T11:00:00.000Z"
}`}
        </CodeBlock>

        <Callout type="warning" title="Phase restrictions">
          <p>
            Evidence can only be submitted during the <code>negotiation</code>{" "}
            and <code>mediation</code> phases. Once the dispute enters{" "}
            <code>arbitration</code>, no new evidence is accepted. Submit all
            supporting materials before the phase deadline.
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
    "code": "dispute_not_found",
    "message": "No dispute found with id dsp_invalid",
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
            <td><code>dispute_not_found</code></td>
            <td>Dispute does not exist or does not belong to your account.</td>
          </tr>
          <tr>
            <td>409</td>
            <td><code>dispute_already_exists</code></td>
            <td>A dispute is already open for this escrow.</td>
          </tr>
          <tr>
            <td>409</td>
            <td><code>evidence_phase_closed</code></td>
            <td>Evidence submission is not allowed in the current dispute phase.</td>
          </tr>
          <tr>
            <td>422</td>
            <td><code>escrow_not_disputable</code></td>
            <td>The escrow is not in a status that allows disputes (must be funded or delivered).</td>
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
