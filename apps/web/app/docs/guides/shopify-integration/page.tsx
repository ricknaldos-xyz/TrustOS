import type { Metadata } from "next";

export const metadata: Metadata = { title: "Shopify Integration" };

export default function ShopifyPage() {
  return (
    <div>
      <h1>Shopify Integration</h1>
      <p>
        Accept USDC payments with buyer protection on your Shopify store.
        This guide walks you through the integration step by step.
      </p>

      <blockquote>
        The Shopify plugin is planned for Phase 3. In the meantime, you can
        integrate TrustOS via the API using a custom payment flow.
      </blockquote>

      <h2>Overview</h2>
      <p>The integration flow works as follows:</p>
      <ol>
        <li>Customer places order on your Shopify store</li>
        <li>Your backend creates a TrustOS escrow via the API</li>
        <li>Customer is redirected to the TrustOS checkout page to pay with USDC</li>
        <li>After payment, customer is redirected back to your Shopify order confirmation</li>
        <li>You receive a webhook when the escrow is funded</li>
        <li>You fulfill the order and mark it as delivered via the TrustOS API</li>
        <li>Funds auto-release after the protection period (or buyer confirms early)</li>
      </ol>

      <h2>Step 1: Create a Custom Payment Flow</h2>
      <p>
        In your Shopify backend (or a serverless function), create an escrow when
        an order is placed:
      </p>
      <pre><code>{`// /api/create-payment.ts
import { TrustOS } from "@trustos/sdk";

const trustos = new TrustOS({ apiKey: process.env.TRUSTOS_API_KEY! });

export async function createPayment(order: ShopifyOrder) {
  const escrow = await trustos.escrows.create({
    orderId: order.id.toString(),
    amount: order.total_price,
    token: "USDC",
    buyerAddress: order.note_attributes?.walletAddress,
    metadata: {
      shopifyOrderId: order.id,
      customerEmail: order.email,
    },
  });

  return escrow.checkoutUrl;
}`}</code></pre>

      <h2>Step 2: Add Wallet Address Collection</h2>
      <p>
        You need the buyer&apos;s wallet address. Add a custom field to your checkout
        or use a cart attribute. The TrustOS checkout widget also supports
        collecting the wallet address at payment time.
      </p>

      <h2>Step 3: Handle Webhooks</h2>
      <pre><code>{`// /api/webhooks/trustos.ts
import { verifyWebhookSignature } from "@trustos/sdk";

export async function handleWebhook(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("x-trustos-signature")!;

  if (!verifyWebhookSignature(body, signature, process.env.TRUSTOS_WEBHOOK_SECRET!)) {
    return new Response("Invalid", { status: 401 });
  }

  const event = JSON.parse(body);

  switch (event.type) {
    case "escrow.funded":
      // Mark Shopify order as "payment received"
      await updateShopifyOrder(event.data.metadata.shopifyOrderId, {
        financial_status: "paid",
      });
      break;

    case "escrow.released":
      // Payment confirmed, funds received
      break;

    case "dispute.opened":
      // Pause fulfillment, notify support team
      break;
  }

  return new Response("OK");
}`}</code></pre>

      <h2>Step 4: Mark Delivery</h2>
      <p>
        When you fulfill the Shopify order, also notify TrustOS:
      </p>
      <pre><code>{`// After Shopify fulfillment
await trustos.escrows.markDelivered(escrowId);`}</code></pre>

      <h2>Coming Soon</h2>
      <p>
        A native Shopify plugin is planned that automates the entire flow:
      </p>
      <ul>
        <li>One-click install from Shopify App Store</li>
        <li>Automatic escrow creation on order placement</li>
        <li>Built-in wallet connection widget</li>
        <li>Automatic delivery marking on fulfillment</li>
        <li>Dispute management from Shopify admin</li>
      </ul>
    </div>
  );
}
