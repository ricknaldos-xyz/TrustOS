import type { Metadata } from "next";

export const metadata: Metadata = { title: "Webhooks API" };

export default function WebhooksPage() {
  return (
    <div>
      <h1>Webhooks</h1>
      <p>
        TrustOS sends webhook notifications for every significant event in the
        escrow lifecycle. Use webhooks to keep your system in sync with on-chain
        state changes.
      </p>

      <h2>Setting Up Webhooks</h2>
      <p>
        Register a webhook endpoint via the API or dashboard. TrustOS will send
        POST requests to your URL with a JSON payload for each event.
      </p>
      <pre><code>{`curl -X POST https://api.trustos.io/v1/webhooks \\
  -H "Authorization: Bearer tsk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://your-app.com/webhooks/trustos",
    "events": ["escrow.*", "dispute.*"]
  }'`}</code></pre>

      <h2>Webhook Events</h2>
      <table>
        <thead>
          <tr>
            <th>Event</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>escrow.created</code></td><td>Escrow created, awaiting funding</td></tr>
          <tr><td><code>escrow.funded</code></td><td>Buyer deposited USDC into escrow</td></tr>
          <tr><td><code>escrow.delivered</code></td><td>Merchant marked order as delivered</td></tr>
          <tr><td><code>escrow.released</code></td><td>Funds released to merchant</td></tr>
          <tr><td><code>escrow.refunded</code></td><td>Funds returned to buyer</td></tr>
          <tr><td><code>escrow.expired</code></td><td>Delivery deadline passed without delivery</td></tr>
          <tr><td><code>escrow.auto_released</code></td><td>Protection period ended, auto-released to merchant</td></tr>
          <tr><td><code>dispute.opened</code></td><td>Buyer or merchant opened a dispute</td></tr>
          <tr><td><code>dispute.evidence_submitted</code></td><td>New evidence uploaded by either party</td></tr>
          <tr><td><code>dispute.resolved</code></td><td>Dispute resolved with final ruling</td></tr>
        </tbody>
      </table>

      <h2>Payload Format</h2>
      <pre><code>{`{
  "id": "evt_abc123",
  "type": "escrow.funded",
  "created_at": "2026-01-15T10:30:00Z",
  "data": {
    "escrow_id": "esc_xyz789",
    "on_chain_id": "0xabc...",
    "status": "funded",
    "amount": "150.00",
    "token": "USDC",
    "buyer_address": "0xBuyer...",
    "tx_hash": "0x123..."
  }
}`}</code></pre>

      <h2>Signature Verification</h2>
      <p>
        Every webhook includes a <code>X-TrustOS-Signature</code> header containing
        an HMAC-SHA256 signature. Always verify this signature to ensure the webhook
        came from TrustOS.
      </p>
      <pre><code>{`import { verifyWebhookSignature } from "@trustos/sdk";

app.post("/webhooks/trustos", (req, res) => {
  const isValid = verifyWebhookSignature(
    req.body,
    req.headers["x-trustos-signature"],
    process.env.TRUSTOS_WEBHOOK_SECRET
  );

  if (!isValid) {
    return res.status(401).send("Invalid signature");
  }

  const event = req.body;

  switch (event.type) {
    case "escrow.funded":
      // Buyer has paid — fulfill the order
      break;
    case "escrow.released":
      // Funds sent to merchant
      break;
    case "dispute.opened":
      // Handle dispute notification
      break;
  }

  res.status(200).send("OK");
});`}</code></pre>

      <h2>Retry Policy</h2>
      <p>
        If your endpoint returns a non-2xx status code, TrustOS retries with
        exponential backoff:
      </p>
      <ul>
        <li>1st retry: 1 minute</li>
        <li>2nd retry: 5 minutes</li>
        <li>3rd retry: 30 minutes</li>
        <li>4th retry: 2 hours</li>
        <li>5th retry: 24 hours</li>
      </ul>
      <p>
        After 5 failed attempts, the webhook is marked as failed and can be
        retried manually from the dashboard.
      </p>

      <h2>Managing Webhooks</h2>
      <h3>List Webhooks</h3>
      <pre><code>{`GET /v1/webhooks

Authorization: Bearer tsk_live_...`}</code></pre>

      <h3>Delete Webhook</h3>
      <pre><code>{`DELETE /v1/webhooks/:id

Authorization: Bearer tsk_live_...`}</code></pre>
    </div>
  );
}
