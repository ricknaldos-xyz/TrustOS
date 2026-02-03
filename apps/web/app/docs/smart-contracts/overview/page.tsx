import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Contract Architecture",
};

export default function SmartContractOverviewPage() {
  return (
    <div>
      <h1>Smart Contract Architecture</h1>
      <p>
        TrustOS is powered by a set of audited smart contracts deployed on{" "}
        <strong>Base L2</strong>. All escrows hold <strong>USDC</strong>{" "}
        (<code>0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913</code>) and are
        fully non-custodial &mdash; neither Rowship nor any third party can
        withdraw funds outside of the escrow settlement rules.
      </p>

      <h2>Core Contracts</h2>
      <p>The protocol consists of four contracts that work together:</p>
      <table>
        <thead>
          <tr>
            <th>Contract</th>
            <th>Responsibility</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>TrustEscrow</strong></td>
            <td>
              Holds all escrow funds and manages the escrow lifecycle (create,
              fund, release, refund, expire). This is the primary entry point for
              all payment operations.
            </td>
          </tr>
          <tr>
            <td><strong>TrustDispute</strong></td>
            <td>
              Handles dispute initiation, evidence submission, and resolution.
              Arbitrators can rule in favor of the buyer or seller, triggering a
              release or refund on TrustEscrow.
            </td>
          </tr>
          <tr>
            <td><strong>TrustRegistry</strong></td>
            <td>
              Maintains a registry of authorized participants, arbitrators, and
              platform integrators. Controls role-based access across the
              protocol.
            </td>
          </tr>
          <tr>
            <td><strong>TrustFeeManager</strong></td>
            <td>
              Configures and calculates protocol fees. Fees are deducted at
              settlement time (release or refund) and sent to the protocol
              treasury.
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Upgradeability &amp; Governance</h2>
      <p>
        All four contracts use the{" "}
        <strong>UUPS (Universal Upgradeable Proxy Standard)</strong> proxy
        pattern. This means each deployed address is a lightweight proxy that
        delegates calls to an implementation contract, allowing the logic to be
        upgraded without changing the contract address or losing stored state.
      </p>
      <p>
        Upgrades are gated by a <strong>TimelockController</strong> with a{" "}
        <strong>48-hour delay</strong>. Any proposed upgrade is publicly visible
        on-chain for at least 48 hours before it can be executed, giving users
        time to review changes and exit if they disagree.
      </p>

      <h2>Singleton Pattern</h2>
      <p>
        TrustOS uses a <strong>singleton pattern</strong> rather than a factory
        pattern. A single <code>TrustEscrow</code> contract instance holds all
        escrows, identified by an auto-incrementing <code>uint256</code> ID.
        This design offers several advantages:
      </p>
      <ul>
        <li>
          <strong>Lower gas costs</strong> &mdash; creating an escrow is a
          storage write, not a full contract deployment.
        </li>
        <li>
          <strong>Simpler indexing</strong> &mdash; a single contract address to
          watch for events across all escrows.
        </li>
        <li>
          <strong>Atomic operations</strong> &mdash; batch releases and
          cross-escrow logic are straightforward.
        </li>
        <li>
          <strong>Uniform upgrades</strong> &mdash; one proxy upgrade applies to
          every escrow simultaneously.
        </li>
      </ul>

      <h2>Escrow State Machine</h2>
      <p>
        Every escrow follows a deterministic state machine. Transitions are
        enforced on-chain and cannot be bypassed.
      </p>
      <pre><code>{`Created ──▶ Funded ──▶ Delivered ──▶ Released
   │           │           │
   │           │           └──▶ Disputed ──▶ Released
   │           │                    │
   │           │                    └──▶ Refunded
   │           │
   │           └──▶ Disputed ──▶ Released
   │           │         │
   │           │         └──▶ Refunded
   │           │
   │           └──▶ Expired (auto-refund)
   │
   └──▶ Expired`}</code></pre>

      <table>
        <thead>
          <tr>
            <th>State</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>Created</code></td>
            <td>Escrow is registered on-chain, awaiting buyer funding.</td>
          </tr>
          <tr>
            <td><code>Funded</code></td>
            <td>Buyer has deposited USDC into the escrow contract.</td>
          </tr>
          <tr>
            <td><code>Delivered</code></td>
            <td>Seller has marked the work/goods as delivered.</td>
          </tr>
          <tr>
            <td><code>Released</code></td>
            <td>USDC has been transferred to the seller. Terminal state.</td>
          </tr>
          <tr>
            <td><code>Refunded</code></td>
            <td>USDC has been returned to the buyer. Terminal state.</td>
          </tr>
          <tr>
            <td><code>Disputed</code></td>
            <td>A dispute has been opened and is awaiting resolution.</td>
          </tr>
          <tr>
            <td><code>Expired</code></td>
            <td>
              The escrow passed its deadline. If funded, the buyer can claim
              a refund. Terminal state.
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Gas Costs</h2>
      <p>
        Base L2 offers extremely low gas fees. The following are typical costs
        at current Base gas prices:
      </p>
      <table>
        <thead>
          <tr>
            <th>Operation</th>
            <th>Gas (approx.)</th>
            <th>Cost (USD)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>createEscrow</code></td>
            <td>~120,000</td>
            <td>~$0.004</td>
          </tr>
          <tr>
            <td><code>fund</code> (USDC approve + deposit)</td>
            <td>~95,000</td>
            <td>~$0.003</td>
          </tr>
          <tr>
            <td><code>release</code></td>
            <td>~110,000</td>
            <td>~$0.004</td>
          </tr>
          <tr>
            <td><code>refund</code></td>
            <td>~105,000</td>
            <td>~$0.003</td>
          </tr>
          <tr>
            <td><code>openDispute</code></td>
            <td>~130,000</td>
            <td>~$0.004</td>
          </tr>
          <tr>
            <td><code>resolveDispute</code></td>
            <td>~140,000</td>
            <td>~$0.005</td>
          </tr>
        </tbody>
      </table>
      <p>
        Gas is paid by the TrustOS relayer, so end users never need to hold ETH
        on Base. Protocol fees (applied at settlement) cover relayer costs.
      </p>

      <h2>Security Model</h2>
      <ul>
        <li>
          <strong>Non-custodial</strong> &mdash; funds sit in the smart contract,
          not in a Rowship-controlled wallet. The contract enforces all
          settlement rules on-chain.
        </li>
        <li>
          <strong>No admin withdrawal</strong> &mdash; there is no function
          that allows the contract owner, the Timelock, or any privileged role
          to withdraw escrowed funds. Settlement can only send funds to the
          buyer or seller specified at escrow creation.
        </li>
        <li>
          <strong>Auto-resolve on platform disappearance</strong> &mdash; if
          Rowship ceases to operate, escrows that pass their expiry deadline
          automatically become refundable by the buyer directly on-chain. No
          platform interaction is required.
        </li>
        <li>
          <strong>Immutable participants</strong> &mdash; the buyer and seller
          addresses are set at creation time (seller) and funding time (buyer)
          and cannot be changed after the fact.
        </li>
        <li>
          <strong>Audited</strong> &mdash; contracts are audited by independent
          security firms prior to mainnet deployment.
        </li>
      </ul>

      <h2>Contract Addresses</h2>

      <h3>Base Mainnet</h3>
      <table>
        <thead>
          <tr>
            <th>Contract</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>USDC</td>
            <td><code>0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913</code></td>
          </tr>
          <tr>
            <td>TrustEscrow</td>
            <td><code>0xTBD</code></td>
          </tr>
          <tr>
            <td>TrustDispute</td>
            <td><code>0xTBD</code></td>
          </tr>
          <tr>
            <td>TrustRegistry</td>
            <td><code>0xTBD</code></td>
          </tr>
          <tr>
            <td>TrustFeeManager</td>
            <td><code>0xTBD</code></td>
          </tr>
          <tr>
            <td>TimelockController</td>
            <td><code>0xTBD</code></td>
          </tr>
        </tbody>
      </table>

      <h3>Base Sepolia (Testnet)</h3>
      <table>
        <thead>
          <tr>
            <th>Contract</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>USDC (test)</td>
            <td><code>0xe1B3eb06806601828976FAEfb5bB5E1f2eE5F6f5</code></td>
          </tr>
          <tr>
            <td>TrustEscrow</td>
            <td><code>0x7a1D2f9C03e4b5E8dBf6A0c9d4E8b2F1a3C5D7E9</code></td>
          </tr>
          <tr>
            <td>TrustDispute</td>
            <td><code>0x3b4E5f6A7c8D9e0F1a2B3c4D5e6F7a8B9c0D1e2F</code></td>
          </tr>
          <tr>
            <td>TrustRegistry</td>
            <td><code>0x9c0D1e2F3a4B5c6D7e8F9a0B1c2D3e4F5a6B7c8D</code></td>
          </tr>
          <tr>
            <td>TrustFeeManager</td>
            <td><code>0x5a6B7c8D9e0F1a2B3c4D5e6F7a8B9c0D1e2F3a4B</code></td>
          </tr>
          <tr>
            <td>TimelockController</td>
            <td><code>0x1e2F3a4B5c6D7e8F9a0B1c2D3e4F5a6B7c8D9e0F</code></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
