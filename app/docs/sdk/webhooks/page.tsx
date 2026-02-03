import type { Metadata } from "next";

export const metadata: Metadata = { title: "Webhook Verification" };

export default function SDKWebhooksPage() {
  return (
    <div>
      <h1>Webhook Verification</h1>
      <p>
        The SDK provides helpers to verify webhook signatures and parse event payloads
        with full type safety.
      </p>

      <h2>Verify Signature</h2>
      <pre><code>{`import { verifyWebhookSignature } from "@trustos/sdk";

const isValid = verifyWebhookSignature(
  rawBody,                              // string or Buffer
  request.headers["x-trustos-signature"], // signature header
  process.env.TRUSTOS_WEBHOOK_SECRET!     // your webhook secret
);`}</code></pre>

      <h2>Express / Node.js Example</h2>
      <pre><code>{`import express from "express";
import { verifyWebhookSignature, type WebhookEvent } from "@trustos/sdk";

const app = express();

// Important: use raw body parser for webhook routes
app.post(
  "/webhooks/trustos",
  express.raw({ type: "application/json" }),
  (req, res) => {
    const signature = req.headers["x-trustos-signature"] as string;

    if (!verifyWebhookSignature(req.body, signature, process.env.TRUSTOS_WEBHOOK_SECRET!)) {
      return res.status(401).send("Invalid signature");
    }

    const event: WebhookEvent = JSON.parse(req.body.toString());

    switch (event.type) {
      case "escrow.funded":
        handleEscrowFunded(event.data);
        break;
      case "escrow.released":
        handleEscrowReleased(event.data);
        break;
      case "dispute.opened":
        handleDisputeOpened(event.data);
        break;
    }

    res.status(200).send("OK");
  }
);`}</code></pre>

      <h2>Next.js App Router Example</h2>
      <pre><code>{`// app/api/webhooks/trustos/route.ts
import { verifyWebhookSignature, type WebhookEvent } from "@trustos/sdk";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("x-trustos-signature")!;

  if (!verifyWebhookSignature(body, signature, process.env.TRUSTOS_WEBHOOK_SECRET!)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const event: WebhookEvent = JSON.parse(body);

  // Handle the event
  console.log(\`Received \${event.type}:\`, event.data);

  return NextResponse.json({ received: true });
}`}</code></pre>

      <h2>WebhookEvent Type</h2>
      <pre><code>{`interface WebhookEvent {
  id: string;
  type: WebhookEventType;
  created_at: string;
  data: Record<string, unknown>;
}

type WebhookEventType =
  | "escrow.created"
  | "escrow.funded"
  | "escrow.delivered"
  | "escrow.released"
  | "escrow.refunded"
  | "escrow.expired"
  | "escrow.auto_released"
  | "dispute.opened"
  | "dispute.evidence_submitted"
  | "dispute.resolved";`}</code></pre>
    </div>
  );
}
