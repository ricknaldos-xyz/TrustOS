"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const tsCode = `import { TrustOS } from "@trustos/sdk";

const trustos = new TrustOS({ apiKey: "tsk_live_..." });

// Create an escrow
const escrow = await trustos.escrows.create({
  orderId: "ORD-2026-001",
  amount: "150.00",
  token: "USDC",
  buyerAddress: "0xBuyer...",
});

console.log(escrow.checkoutUrl);
// → https://trustos.io/checkout/esc_abc123

// After delivery, release funds
await trustos.escrows.release(escrow.id);`;

const curlCode = `# Create an escrow
curl -X POST https://api.trustos.io/v1/escrows \\
  -H "Authorization: Bearer tsk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "orderId": "ORD-2026-001",
    "amount": "150.00",
    "token": "USDC",
    "buyerAddress": "0xBuyer..."
  }'

# Response
{
  "id": "esc_abc123",
  "status": "created",
  "checkoutUrl": "https://trustos.io/checkout/esc_abc123",
  "amount": "150.00"
}`;

const pythonCode = `from trustos import TrustOS

client = TrustOS(api_key="tsk_live_...")

# Create an escrow
escrow = client.escrows.create(
    order_id="ORD-2026-001",
    amount="150.00",
    token="USDC",
    buyer_address="0xBuyer...",
)

print(escrow.checkout_url)
# → https://trustos.io/checkout/esc_abc123

# After delivery, release funds
client.escrows.release(escrow.id)`;

const tabs = [
  { id: "typescript", label: "TypeScript", code: tsCode },
  { id: "curl", label: "cURL", code: curlCode },
  { id: "python", label: "Python", code: pythonCode },
];

export function CodeExample() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Integrate in minutes
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Create an escrow with a single API call. Our SDK handles wallet
              connections, transaction signing, and state management.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Full TypeScript types and autocomplete",
                "Webhook verification helpers",
                "Sandbox environment for testing",
                "Comprehensive error handling",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-text-secondary"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Tabs defaultValue="typescript">
              <TabsList className="w-full justify-start">
                {tabs.map((tab) => (
                  <TabsTrigger key={tab.id} value={tab.id}>
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {tabs.map((tab) => (
                <TabsContent key={tab.id} value={tab.id}>
                  <div className="overflow-hidden rounded-xl border border-border bg-surface">
                    <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                      <div className="h-3 w-3 rounded-full bg-error/60" />
                      <div className="h-3 w-3 rounded-full bg-warning/60" />
                      <div className="h-3 w-3 rounded-full bg-success/60" />
                    </div>
                    <pre className="overflow-x-auto p-5">
                      <code className="font-mono text-[13px] leading-relaxed text-text-secondary">
                        {tab.code}
                      </code>
                    </pre>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
