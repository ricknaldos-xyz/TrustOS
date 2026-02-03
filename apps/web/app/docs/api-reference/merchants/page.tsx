import type { Metadata } from "next";

export const metadata: Metadata = { title: "Merchants API" };

export default function MerchantsPage() {
  return (
    <div>
      <h1>Merchants API</h1>
      <p>
        Manage your merchant profile, wallet address, and account settings.
      </p>

      <h2>Register Merchant</h2>
      <pre><code>{`POST /v1/merchants/register

{
  "name": "Acme Store",
  "email": "payments@acme.com",
  "walletAddress": "0xMerchant...",
  "defaultReleaseDays": 14
}`}</code></pre>

      <h3>Response</h3>
      <pre><code>{`{
  "id": "mrc_abc123",
  "name": "Acme Store",
  "email": "payments@acme.com",
  "walletAddress": "0xMerchant...",
  "kycStatus": "pending",
  "defaultReleaseDays": 14,
  "trustScore": null,
  "apiKeys": {
    "sandbox": "tsk_test_...",
    "production": null
  },
  "createdAt": "2026-01-15T10:30:00Z"
}`}</code></pre>
      <p>
        Production API keys are issued after KYC/KYB verification is complete.
        Sandbox keys are available immediately.
      </p>

      <h2>Get Merchant Profile</h2>
      <pre><code>{`GET /v1/merchants/me

Authorization: Bearer tsk_live_...`}</code></pre>

      <h3>Response</h3>
      <pre><code>{`{
  "id": "mrc_abc123",
  "name": "Acme Store",
  "email": "payments@acme.com",
  "walletAddress": "0xMerchant...",
  "kycStatus": "verified",
  "defaultReleaseDays": 14,
  "trustScore": 92,
  "totalEscrows": 47,
  "disputeRate": 0.021,
  "totalVolume": "12450.00",
  "createdAt": "2026-01-15T10:30:00Z"
}`}</code></pre>

      <h2>Update Merchant Profile</h2>
      <pre><code>{`PATCH /v1/merchants/me

Authorization: Bearer tsk_live_...

{
  "name": "Acme Global Store",
  "defaultReleaseDays": 7,
  "webhookUrl": "https://acme.com/webhooks/trustos"
}`}</code></pre>

      <h3>Updatable Fields</h3>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>name</code></td>
            <td>string</td>
            <td>Display name</td>
          </tr>
          <tr>
            <td><code>email</code></td>
            <td>string</td>
            <td>Contact email for notifications</td>
          </tr>
          <tr>
            <td><code>walletAddress</code></td>
            <td>string</td>
            <td>Wallet to receive released funds (requires re-verification)</td>
          </tr>
          <tr>
            <td><code>defaultReleaseDays</code></td>
            <td>number</td>
            <td>Default buyer protection period (1-30 days)</td>
          </tr>
          <tr>
            <td><code>webhookUrl</code></td>
            <td>string</td>
            <td>URL for webhook notifications</td>
          </tr>
        </tbody>
      </table>

      <h2>Trust Score</h2>
      <p>
        Each merchant has a trust score (0-100) calculated from:
      </p>
      <ul>
        <li>Dispute rate (lower is better)</li>
        <li>Response time to disputes</li>
        <li>Total volume processed</li>
        <li>Account age</li>
        <li>KYC verification status</li>
      </ul>
      <p>
        The trust score is visible to buyers during checkout and affects dispute
        resolution timelines. Merchants with higher scores get longer evidence
        submission windows.
      </p>
    </div>
  );
}
