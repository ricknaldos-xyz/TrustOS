import type { Metadata } from "next";

export const metadata: Metadata = { title: "SDK Client Setup" };

export default function ClientPage() {
  return (
    <div>
      <h1>Client Setup</h1>
      <p>
        The <code>TrustOS</code> client is the main entry point for interacting
        with the TrustOS API. Initialize it once and use it throughout your application.
      </p>

      <h2>Basic Setup</h2>
      <pre><code>{`import { TrustOS } from "@trustos/sdk";

const trustos = new TrustOS({
  apiKey: process.env.TRUSTOS_API_KEY!,
});`}</code></pre>

      <h2>Configuration Options</h2>
      <table>
        <thead>
          <tr>
            <th>Option</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>apiKey</code></td>
            <td>string</td>
            <td>—</td>
            <td>Your TrustOS API key (required)</td>
          </tr>
          <tr>
            <td><code>baseUrl</code></td>
            <td>string</td>
            <td>Auto-detected from key prefix</td>
            <td>API base URL</td>
          </tr>
          <tr>
            <td><code>timeout</code></td>
            <td>number</td>
            <td>30000</td>
            <td>Request timeout in milliseconds</td>
          </tr>
          <tr>
            <td><code>retries</code></td>
            <td>number</td>
            <td>2</td>
            <td>Number of automatic retries on network errors</td>
          </tr>
        </tbody>
      </table>

      <h2>Environment Detection</h2>
      <p>
        The SDK automatically detects the environment based on your API key prefix:
      </p>
      <ul>
        <li><code>tsk_test_</code> → Sandbox (<code>api.sandbox.trustos.io</code>)</li>
        <li><code>tsk_live_</code> → Production (<code>api.trustos.io</code>)</li>
      </ul>
      <p>
        You can override this by providing a custom <code>baseUrl</code>.
      </p>

      <h2>Error Handling</h2>
      <p>
        The SDK throws typed errors that you can catch and handle:
      </p>
      <pre><code>{`import { TrustOS, TrustOSError } from "@trustos/sdk";

try {
  const escrow = await trustos.escrows.create({
    orderId: "ORD-001",
    amount: "150.00",
    token: "USDC",
    buyerAddress: "0xBuyer...",
  });
} catch (error) {
  if (error instanceof TrustOSError) {
    console.error(error.code);    // "INVALID_PARAMS"
    console.error(error.message); // "Amount must be greater than 0"
    console.error(error.status);  // 400
  }
}`}</code></pre>

      <h2>Available Resources</h2>
      <ul>
        <li><code>trustos.escrows</code> — Create, get, list, release, refund escrows</li>
        <li><code>trustos.disputes</code> — Open disputes, submit evidence, list disputes</li>
        <li><code>trustos.merchants</code> — Get and update merchant profile</li>
        <li><code>trustos.webhooks</code> — Manage webhook endpoints</li>
      </ul>
    </div>
  );
}
