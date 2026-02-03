import type { Metadata } from "next";

export const metadata: Metadata = { title: "Security Model" };

export default function SecurityPage() {
  return (
    <div>
      <h1>Security Model</h1>
      <p>
        TrustOS smart contracts are designed with the principle that{" "}
        <strong>no single entity should be able to access or redirect escrowed funds</strong>.
        The system is autonomous and self-executing.
      </p>

      <h2>Non-custodial Guarantee</h2>
      <p>
        There is <strong>no admin function</strong> that can withdraw funds held in escrow.
        The only ways funds can move are:
      </p>
      <ol>
        <li>Buyer explicitly releases to merchant</li>
        <li>Auto-release after protection period expires</li>
        <li>Refund after dispute resolution or expiry</li>
        <li>Dispute resolution (mediator/arbitrator ruling)</li>
      </ol>

      <h2>Role-Based Access Control</h2>
      <table>
        <thead>
          <tr><th>Role</th><th>Can do</th><th>Assigned to</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><code>DEFAULT_ADMIN</code></td>
            <td>Upgrades, grant/revoke roles, change fees</td>
            <td>TimelockController (48h delay)</td>
          </tr>
          <tr>
            <td><code>PAUSER</code></td>
            <td>Emergency pause/unpause</td>
            <td>Multisig (2-of-3, separate from admin)</td>
          </tr>
          <tr>
            <td><code>OPERATOR</code></td>
            <td>Assign mediators, verify merchants</td>
            <td>Rowship backend</td>
          </tr>
          <tr>
            <td><code>MEDIATOR</code></td>
            <td>Resolve disputes in mediation phase</td>
            <td>Verified mediators</td>
          </tr>
          <tr>
            <td><code>ARBITRATOR</code></td>
            <td>Make binding arbitration decisions</td>
            <td>Verified arbitrators</td>
          </tr>
          <tr>
            <td><code>UPGRADER</code></td>
            <td>Execute UUPS upgrades</td>
            <td>TimelockController only</td>
          </tr>
        </tbody>
      </table>

      <h2>TimelockController</h2>
      <p>
        All admin operations go through a 48-hour timelock. This means any upgrade,
        fee change, or role assignment is publicly visible on-chain for 48 hours
        before it executes — giving users time to exit if they disagree.
      </p>
      <ul>
        <li><strong>Proposer:</strong> 2-of-3 multisig</li>
        <li><strong>Executor:</strong> Same multisig after delay</li>
        <li><strong>Delay:</strong> 48 hours (172,800 seconds)</li>
      </ul>

      <h2>Emergency Pause</h2>
      <p>
        A separate 2-of-3 multisig (distinct from the admin multisig) can
        immediately pause all contracts. When paused:
      </p>
      <ul>
        <li>No new escrows can be created or funded</li>
        <li>No releases or refunds can be processed</li>
        <li>Existing deadlines are frozen</li>
        <li>Unpause requires the same multisig approval</li>
      </ul>

      <h2>What Happens if Rowship Disappears?</h2>
      <p>
        The contracts are designed to be fully autonomous. If Rowship&apos;s servers
        go offline permanently:
      </p>
      <ol>
        <li>
          <strong>Funded escrows:</strong> <code>triggerExpiry()</code> — anyone can
          call if the merchant missed the delivery deadline. Buyer gets a full refund.
        </li>
        <li>
          <strong>Delivered escrows:</strong> <code>triggerAutoRelease()</code> — anyone
          can call after the acceptance period. Funds go to the merchant.
        </li>
        <li>
          <strong>Disputed escrows:</strong> <code>advancePhase()</code> — anyone can
          advance expired phases. If arbitration expires, deterministic auto-resolve kicks in.
        </li>
        <li>
          <strong>Auto-resolve rules:</strong> Merchant 0 evidence = refund. Buyer 0
          evidence = release. Both have evidence = 50/50 split.
        </li>
      </ol>
      <p>
        <strong>No funds can ever be permanently stuck.</strong> Every state has a timeout
        path that anyone can trigger.
      </p>

      <h2>Audit Status</h2>
      <table>
        <thead>
          <tr><th>Audit</th><th>Firm</th><th>Status</th></tr>
        </thead>
        <tbody>
          <tr><td>Smart Contract Audit</td><td>TBD (Tier-1)</td><td>Planned</td></tr>
          <tr><td>Bug Bounty</td><td>Immunefi</td><td>Planned</td></tr>
          <tr><td>Formal Verification</td><td>—</td><td>Future consideration</td></tr>
        </tbody>
      </table>

      <h2>Known Risks</h2>
      <ul>
        <li>
          <strong>USDC blacklisting:</strong> Circle can blacklist addresses. If a buyer
          or merchant address is blacklisted, transfers to that address will fail. The
          contract handles this gracefully by reverting the specific transfer, not the
          entire operation.
        </li>
        <li>
          <strong>Upgrade risk:</strong> UUPS proxies allow contract upgrades. Mitigated
          by 48-hour timelock and multisig requirement.
        </li>
        <li>
          <strong>Oracle-free design:</strong> TrustOS does not rely on oracles. All
          amounts are denominated in USDC (no price feeds needed).
        </li>
      </ul>
    </div>
  );
}
