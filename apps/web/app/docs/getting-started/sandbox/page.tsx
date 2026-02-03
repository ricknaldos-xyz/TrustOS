import type { Metadata } from "next";

export const metadata: Metadata = { title: "Sandbox Environment" };

export default function SandboxPage() {
  return (
    <div>
      <h1>Sandbox Environment</h1>
      <p>
        TrustOS provides a full sandbox environment on Base Sepolia testnet. Use it
        to test your integration before going live — all functionality is identical
        to production.
      </p>

      <h2>Sandbox vs Production</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Sandbox</th>
            <th>Production</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>API Base URL</td>
            <td><code>api.sandbox.trustos.io</code></td>
            <td><code>api.trustos.io</code></td>
          </tr>
          <tr>
            <td>API Key Prefix</td>
            <td><code>tsk_test_</code></td>
            <td><code>tsk_live_</code></td>
          </tr>
          <tr>
            <td>Chain</td>
            <td>Base Sepolia (testnet)</td>
            <td>Base Mainnet</td>
          </tr>
          <tr>
            <td>USDC</td>
            <td>Test USDC (free faucet)</td>
            <td>Real USDC</td>
          </tr>
          <tr>
            <td>Rate Limits</td>
            <td>100 req/min</td>
            <td>1,000 req/min</td>
          </tr>
          <tr>
            <td>Gas Costs</td>
            <td>Free (testnet ETH)</td>
            <td>~$0.01 per tx</td>
          </tr>
        </tbody>
      </table>

      <h2>Getting Testnet Tokens</h2>
      <h3>Base Sepolia ETH</h3>
      <p>
        You need a small amount of testnet ETH for gas fees. Get it from the
        official Base Sepolia faucet.
      </p>

      <h3>Test USDC</h3>
      <p>
        TrustOS provides a faucet for test USDC in the sandbox dashboard. After
        registering, navigate to <strong>Settings → Sandbox</strong> and click
        &quot;Request Test USDC&quot; to receive 1,000 test USDC to your wallet.
      </p>

      <h2>Testing Wallets</h2>
      <p>
        For automated testing, you can use any Ethereum-compatible wallet on Base
        Sepolia. We recommend creating dedicated test wallets — never use wallets
        that hold real assets on testnet.
      </p>
      <pre><code>{`# Generate a test wallet with cast (Foundry)
cast wallet new

# Example output:
# Address: 0x1234...abcd
# Private key: 0xdeadbeef...`}</code></pre>

      <h2>Sandbox Limitations</h2>
      <ul>
        <li>Sandbox data is reset periodically (every 30 days)</li>
        <li>Webhooks in sandbox may have higher latency than production</li>
        <li>Dispute arbitration is instant in sandbox (no waiting periods)</li>
        <li>Rate limits are lower (100 req/min vs 1,000 req/min)</li>
      </ul>

      <h2>Switching to Production</h2>
      <p>
        When you&apos;re ready to go live, simply swap your API key from{" "}
        <code>tsk_test_</code> to <code>tsk_live_</code> and update the base URL
        to <code>api.trustos.io</code>. The API interface is identical.
      </p>
      <pre><code>{`// Sandbox
const trustos = new TrustOS({
  apiKey: "tsk_test_...",
  baseUrl: "https://api.sandbox.trustos.io"
});

// Production — just change the key
const trustos = new TrustOS({
  apiKey: "tsk_live_..."
});`}</code></pre>
    </div>
  );
}
