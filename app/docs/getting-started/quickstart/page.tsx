import type { Metadata } from "next";
import Link from "next/link";
import { Callout } from "../../_components/Callout";
import { CodeBlock } from "../../_components/CodeBlock";

export const metadata: Metadata = {
  title: "Quickstart",
  description:
    "Create your first non-custodial USDC escrow on Base in under 5 minutes.",
};

export default function QuickstartPage() {
  return (
    <div>
      <h1>Quickstart</h1>
      <p>
        Create your first non-custodial USDC escrow on Base in under 5 minutes.
        This guide walks you through installing the SDK, creating an escrow,
        funding it, and releasing payment.
      </p>

      <Callout type="info" title="Sandbox environment">
        <p>
          All examples in this guide use the sandbox environment which runs on{" "}
          <strong>Base Sepolia</strong> (testnet). No real funds are involved.
          When you are ready to go live, swap your API key prefix from{" "}
          <code>tsk_test_</code> to <code>tsk_live_</code> and switch to Base
          mainnet.
        </p>
      </Callout>

      {/* ── Step 1 ── */}
      <h2>1. Install the SDK</h2>
      <p>
        Add the TrustOS TypeScript SDK to your project using your preferred
        package manager.
      </p>

      <CodeBlock language="bash" title="Terminal">
        {`npm install @trustos/sdk`}
      </CodeBlock>

      <p>Or with yarn / pnpm:</p>

      <CodeBlock language="bash" title="Terminal">
        {`yarn add @trustos/sdk
# or
pnpm add @trustos/sdk`}
      </CodeBlock>

      {/* ── Step 2 ── */}
      <h2>2. Get your API keys</h2>
      <p>
        Sign in to the{" "}
        <Link href="https://dashboard.trustos.io">TrustOS Dashboard</Link> and
        generate a sandbox API key. Your key will look like{" "}
        <code>tsk_test_abc123...</code>. See the{" "}
        <Link href="/docs/getting-started/authentication">
          Authentication
        </Link>{" "}
        page for details on key management and security best practices.
      </p>

      <Callout type="warning" title="Keep keys secret">
        <p>
          API keys carry full access to your merchant account. Never expose them
          in client-side code or commit them to version control. Use environment
          variables instead.
        </p>
      </Callout>

      {/* ── Step 3 ── */}
      <h2>3. Initialize the client</h2>
      <p>
        Create a TrustOS client instance with your API key. In a real
        application you would read the key from an environment variable.
      </p>

      <CodeBlock language="typescript" title="src/trustos.ts">
        {`import { TrustOS } from "@trustos/sdk";

const trustos = new TrustOS({
  apiKey: process.env.TRUSTOS_API_KEY!, // "tsk_test_..."
});`}
      </CodeBlock>

      {/* ── Step 4 ── */}
      <h2>4. Create an escrow</h2>
      <p>
        An escrow is a smart-contract vault that holds USDC until the order
        conditions are met. Call <code>escrows.create</code> with the order
        details.
      </p>

      <CodeBlock language="typescript" title="src/create-escrow.ts">
        {`const escrow = await trustos.escrows.create({
  orderId: "order_12345",
  amount: "150.00",            // USDC amount (string to avoid floating point)
  token: "USDC",
  buyerAddress: "0xAbC...789", // buyer's wallet address on Base
  protectionPeriodDays: 14,    // optional, defaults to 14
  metadata: {                  // optional key-value pairs
    sku: "WIDGET-XL",
    customerEmail: "buyer@example.com",
  },
});

console.log(escrow.id);          // "esc_a1b2c3..."
console.log(escrow.status);      // "awaiting_payment"
console.log(escrow.checkoutUrl); // "https://pay.trustos.io/esc_a1b2c3"`}
      </CodeBlock>

      {/* ── Step 5 ── */}
      <h2>5. Share the checkout URL</h2>
      <p>
        The <code>escrow.checkoutUrl</code> is a hosted payment page where the
        buyer connects their wallet and deposits USDC into the escrow contract.
        You can redirect the buyer to this URL or embed it in your checkout
        flow.
      </p>

      <CodeBlock language="typescript" title="Example: redirect in an API route">
        {`// Next.js API route example
export async function POST(req: Request) {
  const { orderId, amount, buyerAddress } = await req.json();

  const escrow = await trustos.escrows.create({
    orderId,
    amount,
    token: "USDC",
    buyerAddress,
  });

  return Response.json({ checkoutUrl: escrow.checkoutUrl });
}`}
      </CodeBlock>

      {/* ── Step 6 ── */}
      <h2>6. Handle the webhook</h2>
      <p>
        When the buyer deposits USDC, TrustOS fires an{" "}
        <code>escrow.funded</code> webhook to the endpoint you configure in the
        dashboard. Use this event to start fulfillment.
      </p>

      <CodeBlock language="typescript" title="src/webhooks.ts">
        {`import { TrustOS } from "@trustos/sdk";

const trustos = new TrustOS({
  apiKey: process.env.TRUSTOS_API_KEY!,
  webhookSecret: process.env.TRUSTOS_WEBHOOK_SECRET!,
});

// Express / Next.js API route handler
export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("x-trustos-signature")!;

  const event = trustos.webhooks.verify(body, signature);

  switch (event.type) {
    case "escrow.funded":
      // Buyer deposited USDC — start fulfillment
      console.log("Escrow funded:", event.data.escrowId);
      await startFulfillment(event.data.orderId);
      break;

    case "escrow.released":
      // Funds released to merchant
      console.log("Payment complete:", event.data.escrowId);
      break;

    case "escrow.disputed":
      // Buyer opened a dispute
      console.log("Dispute opened:", event.data.escrowId);
      break;
  }

  return new Response("ok", { status: 200 });
}`}
      </CodeBlock>

      {/* ── Step 7 ── */}
      <h2>7. Mark delivery</h2>
      <p>
        Once you have shipped the order or delivered the service, mark the
        escrow as delivered. This starts the protection period countdown.
      </p>

      <CodeBlock language="typescript" title="src/deliver.ts">
        {`await trustos.escrows.markDelivered("esc_a1b2c3", {
  trackingNumber: "1Z999AA10123456784",  // optional
  carrier: "UPS",                         // optional
  note: "Shipped via UPS Ground",         // optional
});`}
      </CodeBlock>

      {/* ── Step 8 ── */}
      <h2>8. Release</h2>
      <p>
        Payment release happens in one of two ways:
      </p>
      <ul>
        <li>
          <strong>Auto-release</strong> — If the buyer does not raise a dispute
          within the protection period (default 14 days), the smart contract
          automatically releases USDC to your merchant wallet.
        </li>
        <li>
          <strong>Buyer confirmation</strong> — The buyer can confirm receipt
          early, which triggers immediate release.
        </li>
      </ul>
      <p>
        No action is required from you at this stage. You will receive an{" "}
        <code>escrow.released</code> webhook when the funds land in your wallet.
      </p>

      <Callout type="info" title="Non-custodial guarantee">
        <p>
          At no point does TrustOS (or Rowship) hold custody of funds. USDC sits
          in an audited smart contract on Base L2. Even if TrustOS goes offline,
          auto-release and auto-refund can be triggered directly on-chain.
        </p>
      </Callout>

      {/* ── Next steps ── */}
      <h2>Next steps</h2>
      <ul>
        <li>
          <Link href="/docs/getting-started/authentication">
            Authentication
          </Link>{" "}
          — API key management and security
        </li>
        <li>
          <Link href="/docs/api-reference/escrows">API Reference</Link> — Full
          REST API documentation
        </li>
        <li>
          <Link href="/docs/sdk/installation">SDK Reference</Link> — TypeScript
          SDK with complete type definitions
        </li>
        <li>
          <Link href="/docs/smart-contracts/overview">Smart Contracts</Link> —
          On-chain architecture and ABIs
        </li>
      </ul>
    </div>
  );
}
