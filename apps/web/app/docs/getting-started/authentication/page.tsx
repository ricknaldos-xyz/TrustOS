import type { Metadata } from "next";
import Link from "next/link";
import { Callout } from "../../_components/Callout";
import { CodeBlock } from "../../_components/CodeBlock";

export const metadata: Metadata = {
  title: "Authentication",
  description:
    "Learn how to authenticate with the TrustOS API using API keys, manage environments, and follow security best practices.",
};

export default function AuthenticationPage() {
  return (
    <div>
      <h1>Authentication</h1>
      <p>
        Every request to the TrustOS API must be authenticated with an API key.
        Keys are scoped to a single merchant account and environment.
      </p>

      {/* ── Environments ── */}
      <h2>Environments</h2>
      <p>
        TrustOS provides two isolated environments. Each has its own API keys,
        data, and blockchain network.
      </p>

      <div className="my-6 overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-surface">
              <th className="px-4 py-3 text-left font-semibold text-text">
                Environment
              </th>
              <th className="px-4 py-3 text-left font-semibold text-text">
                Key prefix
              </th>
              <th className="px-4 py-3 text-left font-semibold text-text">
                Network
              </th>
              <th className="px-4 py-3 text-left font-semibold text-text">
                Base URL
              </th>
            </tr>
          </thead>
          <tbody className="text-text-secondary">
            <tr className="border-b border-border">
              <td className="px-4 py-3">Sandbox</td>
              <td className="px-4 py-3">
                <code>tsk_test_</code>
              </td>
              <td className="px-4 py-3">Base Sepolia</td>
              <td className="px-4 py-3">
                <code>https://api.sandbox.trustos.io</code>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3">Production</td>
              <td className="px-4 py-3">
                <code>tsk_live_</code>
              </td>
              <td className="px-4 py-3">Base Mainnet</td>
              <td className="px-4 py-3">
                <code>https://api.trustos.io</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="info" title="Start with sandbox">
        <p>
          Use sandbox keys during development. The sandbox uses Base Sepolia
          testnet USDC, so no real funds are at risk. You can request testnet
          USDC from the{" "}
          <Link href="https://dashboard.trustos.io">TrustOS Dashboard</Link>.
        </p>
      </Callout>

      {/* ── Sending your key ── */}
      <h2>Sending your API key</h2>
      <p>
        Include your API key in the <code>Authorization</code> header as a
        Bearer token on every request.
      </p>

      <CodeBlock language="bash" title="cURL">
        {`curl https://api.sandbox.trustos.io/v1/escrows \\
  -H "Authorization: Bearer tsk_test_abc123..." \\
  -H "Content-Type: application/json"`}
      </CodeBlock>

      <h3>Using the SDK</h3>
      <p>
        The TrustOS SDK handles the header automatically. Pass your key when
        initializing the client.
      </p>

      <CodeBlock language="typescript" title="src/trustos.ts">
        {`import { TrustOS } from "@trustos/sdk";

const trustos = new TrustOS({
  apiKey: process.env.TRUSTOS_API_KEY!, // "tsk_test_..."
});

// The SDK adds the Authorization header to every request
const escrows = await trustos.escrows.list();`}
      </CodeBlock>

      <h3>Using fetch directly</h3>
      <p>
        If you prefer plain HTTP, set the header yourself.
      </p>

      <CodeBlock language="typescript" title="src/api.ts">
        {`const response = await fetch(
  "https://api.sandbox.trustos.io/v1/escrows",
  {
    method: "POST",
    headers: {
      Authorization: \`Bearer \${process.env.TRUSTOS_API_KEY}\`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      orderId: "order_12345",
      amount: "150.00",
      token: "USDC",
      buyerAddress: "0xAbC...789",
    }),
  }
);

const escrow = await response.json();
console.log(escrow.id); // "esc_a1b2c3..."`}
      </CodeBlock>

      {/* ── Security ── */}
      <h2>Key security best practices</h2>
      <p>
        API keys grant full access to your merchant account. Treat them like
        passwords.
      </p>
      <ul>
        <li>
          <strong>Never expose keys in client-side code.</strong> API calls must
          be made from your server or serverless functions. Keys embedded in
          browser JavaScript, mobile app bundles, or public repositories can be
          extracted by anyone.
        </li>
        <li>
          <strong>Use environment variables.</strong> Store your key in an
          environment variable (e.g. <code>TRUSTOS_API_KEY</code>) and reference
          it at runtime. Never hard-code keys in source files.
        </li>
        <li>
          <strong>Rotate keys periodically.</strong> You can create multiple keys
          per environment in the dashboard. Roll over to a new key and revoke
          the old one without downtime.
        </li>
        <li>
          <strong>Scope access with separate keys.</strong> Create separate keys
          for staging and CI pipelines so you can revoke them independently.
        </li>
        <li>
          <strong>Monitor usage.</strong> The dashboard shows request logs per
          key. Review them regularly for unexpected activity.
        </li>
      </ul>

      <Callout type="danger" title="Compromised key?">
        <p>
          If you suspect a key has been leaked, revoke it immediately in the{" "}
          <Link href="https://dashboard.trustos.io">Dashboard</Link> under{" "}
          <strong>Settings &rarr; API Keys</strong>. Create a replacement key and
          update your environment variables. Revocation takes effect instantly.
        </p>
      </Callout>

      {/* ── Rate limits ── */}
      <h2>Rate limits</h2>
      <p>
        Rate limits are applied per API key on a sliding 60-second window.
      </p>

      <div className="my-6 overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-surface">
              <th className="px-4 py-3 text-left font-semibold text-text">
                Environment
              </th>
              <th className="px-4 py-3 text-left font-semibold text-text">
                Limit
              </th>
              <th className="px-4 py-3 text-left font-semibold text-text">
                Window
              </th>
            </tr>
          </thead>
          <tbody className="text-text-secondary">
            <tr className="border-b border-border">
              <td className="px-4 py-3">Sandbox</td>
              <td className="px-4 py-3">100 requests</td>
              <td className="px-4 py-3">per minute</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Production</td>
              <td className="px-4 py-3">1,000 requests</td>
              <td className="px-4 py-3">per minute</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        When you exceed the limit, the API returns a{" "}
        <code>429 Too Many Requests</code> response with a{" "}
        <code>Retry-After</code> header indicating how many seconds to wait.
      </p>

      <CodeBlock language="json" title="429 response">
        {`{
  "error": {
    "code": "rate_limit_exceeded",
    "message": "Too many requests. Retry after 12 seconds.",
    "retryAfter": 12
  }
}`}
      </CodeBlock>

      <Callout type="info" title="Need higher limits?">
        <p>
          If your integration requires higher throughput, contact us at{" "}
          <a href="mailto:support@trustos.io">support@trustos.io</a> to
          discuss a custom rate-limit plan.
        </p>
      </Callout>

      {/* ── Next steps ── */}
      <h2>Next steps</h2>
      <ul>
        <li>
          <Link href="/docs/getting-started/quickstart">Quickstart</Link> —
          Create your first escrow in 5 minutes
        </li>
        <li>
          <Link href="/docs/api-reference/escrows">API Reference</Link> — Full
          REST API documentation
        </li>
        <li>
          <Link href="/docs/sdk/installation">SDK Reference</Link> — TypeScript
          SDK with complete type definitions
        </li>
      </ul>
    </div>
  );
}
