import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SDK Installation",
};

export default function SdkInstallationPage() {
  return (
    <div>
      <h1>SDK Installation</h1>
      <p>
        The <code>@trustos/sdk</code> package provides a typed JavaScript/TypeScript client
        for the TrustOS API. It handles authentication, request signing, and provides
        convenient methods for managing non-custodial USDC escrows on Base L2.
      </p>

      <h2>Install</h2>
      <p>Add the SDK to your project using your preferred package manager:</p>
      <pre><code>{`# npm
npm install @trustos/sdk

# pnpm
pnpm add @trustos/sdk

# yarn
yarn add @trustos/sdk`}</code></pre>

      <h2>Initialize the Client</h2>
      <p>
        Import and instantiate the TrustOS client with your API key. You can
        obtain an API key from the{" "}
        <a href="https://dashboard.trustos.io">TrustOS Dashboard</a>.
      </p>
      <pre><code>{`import { TrustOS } from "@trustos/sdk";

// Production (default)
const trustos = new TrustOS({
  apiKey: process.env.TRUSTOS_API_KEY!,
});

// Sandbox — pass baseUrl explicitly
const trustosSandbox = new TrustOS({
  apiKey: process.env.TRUSTOS_SANDBOX_API_KEY!,
  baseUrl: "https://api.sandbox.trustos.io",
});`}</code></pre>

      <h3>Configuration Options</h3>
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
            <td><code>string</code></td>
            <td>&mdash;</td>
            <td>Required. Your TrustOS API key.</td>
          </tr>
          <tr>
            <td><code>baseUrl</code></td>
            <td><code>string</code></td>
            <td><code>https://api.trustos.io</code></td>
            <td>API base URL. Override for sandbox or self-hosted environments.</td>
          </tr>
        </tbody>
      </table>

      <h2>TypeScript Support</h2>
      <p>
        The SDK is written in TypeScript and ships with built-in type
        declarations. There is no need to install a separate{" "}
        <code>@types</code> package &mdash; all interfaces, parameter types,
        and return types are included out of the box.
      </p>
      <pre><code>{`// Full autocompletion and type checking works automatically
import { TrustOS, Escrow, CreateEscrowParams } from "@trustos/sdk";`}</code></pre>

      <h2>Environments</h2>
      <p>
        TrustOS provides two environments. Use the sandbox for development and
        testing before going live.
      </p>
      <table>
        <thead>
          <tr>
            <th>Environment</th>
            <th>Base URL</th>
            <th>Network</th>
            <th>USDC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sandbox</td>
            <td><code>https://api.sandbox.trustos.io</code></td>
            <td>Base Sepolia (testnet)</td>
            <td>Testnet USDC</td>
          </tr>
          <tr>
            <td>Production</td>
            <td><code>https://api.trustos.io</code></td>
            <td>Base (mainnet)</td>
            <td>USDC</td>
          </tr>
        </tbody>
      </table>

      <h2>Quick Example</h2>
      <p>
        The following snippet demonstrates the most common workflow: creating an
        escrow, checking its status, and releasing the funds to the seller.
      </p>
      <pre><code>{`import { TrustOS } from "@trustos/sdk";

const trustos = new TrustOS({
  apiKey: process.env.TRUSTOS_API_KEY!,
});

async function main() {
  // 1. Create an escrow
  const escrow = await trustos.escrows.create({
    amount: "250.00",            // USDC amount
    seller: "0xSELLER_ADDRESS",
    description: "Logo design project",
    expiresIn: 60 * 60 * 24 * 7, // 7 days
  });

  console.log("Escrow created:", escrow.id);
  console.log("Fund URL:", escrow.fundUrl);

  // 2. Check status (after buyer funds the escrow)
  const status = await trustos.escrows.get(escrow.id);
  console.log("Status:", status.state); // "funded"

  // 3. Release funds to the seller
  const released = await trustos.escrows.release(escrow.id);
  console.log("Released:", released.state); // "released"
}

main();`}</code></pre>
    </div>
  );
}
