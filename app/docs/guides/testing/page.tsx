import type { Metadata } from "next";

export const metadata: Metadata = { title: "Testing Guide" };

export default function TestingPage() {
  return (
    <div>
      <h1>Testing</h1>
      <p>
        This guide covers how to test your TrustOS integration in the sandbox
        environment before going live.
      </p>

      <h2>Setup</h2>
      <ol>
        <li>Register a sandbox merchant account</li>
        <li>Get your <code>tsk_test_</code> API key</li>
        <li>Configure the SDK to use sandbox</li>
      </ol>
      <pre><code>{`import { TrustOS } from "@trustos/sdk";

const trustos = new TrustOS({
  apiKey: "tsk_test_...",  // Sandbox key auto-detects environment
});`}</code></pre>

      <h2>Test the Full Escrow Lifecycle</h2>

      <h3>1. Create an Escrow</h3>
      <pre><code>{`const escrow = await trustos.escrows.create({
  orderId: "TEST-001",
  amount: "100.00",
  token: "USDC",
  buyerAddress: "0xYourTestWallet...",
});

console.log(escrow.id);          // "esc_..."
console.log(escrow.checkoutUrl); // Sandbox checkout URL`}</code></pre>

      <h3>2. Fund the Escrow</h3>
      <p>
        Open the <code>checkoutUrl</code> in a browser, connect your test wallet
        (on Base Sepolia), and approve the USDC deposit. You&apos;ll need test USDC
        from the sandbox faucet.
      </p>

      <h3>3. Verify Funding</h3>
      <pre><code>{`// Poll for status change
const funded = await trustos.escrows.get(escrow.id);
console.log(funded.status); // "funded"

// Or listen for webhook: "escrow.funded"`}</code></pre>

      <h3>4. Mark as Delivered</h3>
      <pre><code>{`await trustos.escrows.markDelivered(escrow.id);`}</code></pre>

      <h3>5. Release or Auto-Release</h3>
      <pre><code>{`// Manual release (buyer confirms)
await trustos.escrows.release(escrow.id);

// Or wait for auto-release (sandbox: instant, no 14-day wait)`}</code></pre>

      <h2>Test Dispute Flow</h2>
      <pre><code>{`// 1. Create and fund an escrow (steps above)

// 2. Open a dispute
const dispute = await trustos.disputes.open({
  escrowId: escrow.id,
  reason: "Testing dispute flow - item not received",
});

// 3. Submit evidence (as merchant)
await trustos.disputes.submitEvidence(dispute.id, {
  type: "text",
  contentUrl: "https://example.com/evidence",
  description: "Test evidence submission",
});

// 4. In sandbox, disputes resolve instantly
// Check the outcome:
const resolved = await trustos.disputes.get(dispute.id);
console.log(resolved.phase);   // "resolved"
console.log(resolved.outcome); // varies`}</code></pre>

      <h2>Webhook Testing</h2>
      <p>
        Use a tool like <code>ngrok</code> to expose a local endpoint for webhook testing:
      </p>
      <pre><code>{`# Terminal 1: Start your local server
node server.js  # listening on port 3000

# Terminal 2: Expose via ngrok
ngrok http 3000

# Use the ngrok URL as your webhook endpoint:
# https://abc123.ngrok.io/webhooks/trustos`}</code></pre>

      <h2>Sandbox Shortcuts</h2>
      <table>
        <thead>
          <tr><th>Feature</th><th>Sandbox Behavior</th></tr>
        </thead>
        <tbody>
          <tr><td>Auto-release timer</td><td>Instant (no 14-day wait)</td></tr>
          <tr><td>Dispute deadlines</td><td>Instant (no 5/7-day waits)</td></tr>
          <tr><td>Arbitration</td><td>Auto-resolved immediately</td></tr>
          <tr><td>USDC</td><td>Free test tokens from faucet</td></tr>
          <tr><td>Gas</td><td>Free (Base Sepolia testnet)</td></tr>
        </tbody>
      </table>

      <h2>Checklist Before Going Live</h2>
      <ul>
        <li>Full escrow lifecycle works (create → fund → deliver → release)</li>
        <li>Dispute flow works (open → evidence → resolve)</li>
        <li>Webhooks received and signature verified</li>
        <li>Error handling tested (invalid params, duplicate orders)</li>
        <li>Production API key obtained (requires KYC)</li>
        <li>Webhook endpoint uses HTTPS</li>
        <li>API key stored securely (environment variable, not in code)</li>
      </ul>
    </div>
  );
}
