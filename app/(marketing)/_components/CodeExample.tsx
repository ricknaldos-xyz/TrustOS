"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Shield, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

// TrustOS (Escrow) examples
const trustosTsCode = `import { TrustOS } from "@trustos/sdk";

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

const trustosCurlCode = `# Create an escrow
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

const trustosPythonCode = `from trustos import TrustOS

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

// TrustPay (Instant) examples
const trustpayTsCode = `import { TrustOS } from "@trustos/sdk";

const trustos = new TrustOS({ apiKey: "tsk_live_..." });

// Create instant payment request
const payment = await trustos.payments.create({
  orderId: "ORD-2026-001",
  amount: "29.99",
  token: "USDC",
  merchantAddress: "0xMerchant...",
});

console.log(payment.checkoutUrl);
// → https://trustos.io/pay/pay_xyz789

// Payment confirms in ~2 seconds
// Funds go directly to merchant`;

const trustpayCurlCode = `# Create instant payment
curl -X POST https://api.trustos.io/v1/payments \\
  -H "Authorization: Bearer tsk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "orderId": "ORD-2026-001",
    "amount": "29.99",
    "token": "USDC",
    "merchantAddress": "0xMerchant..."
  }'

# Response
{
  "id": "pay_xyz789",
  "status": "pending",
  "checkoutUrl": "https://trustos.io/pay/pay_xyz789",
  "amount": "29.99"
}

# Webhook: payment.completed (in ~2 sec)`;

const trustpayPythonCode = `from trustos import TrustOS

client = TrustOS(api_key="tsk_live_...")

# Create instant payment request
payment = client.payments.create(
    order_id="ORD-2026-001",
    amount="29.99",
    token="USDC",
    merchant_address="0xMerchant...",
)

print(payment.checkout_url)
# → https://trustos.io/pay/pay_xyz789

# Payment confirms in ~2 seconds
# Funds go directly to merchant`;

const trustosTabs = [
  { id: "typescript", label: "TypeScript", code: trustosTsCode },
  { id: "curl", label: "cURL", code: trustosCurlCode },
  { id: "python", label: "Python", code: trustosPythonCode },
];

const trustpayTabs = [
  { id: "typescript", label: "TypeScript", code: trustpayTsCode },
  { id: "curl", label: "cURL", code: trustpayCurlCode },
  { id: "python", label: "Python", code: trustpayPythonCode },
];

export function CodeExample() {
  const [product, setProduct] = useState<"trustos" | "trustpay">("trustos");
  const tabs = product === "trustos" ? trustosTabs : trustpayTabs;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Integrate in minutes
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              {product === "trustos"
                ? "Create an escrow with a single API call. Funds are held in smart contract until delivery."
                : "Accept instant USDC payments. 2-second confirmation on Base L2."}
            </p>

            {/* Product toggle */}
            <div className="mt-6">
              <div className="inline-flex rounded-lg border border-border bg-surface p-1">
                <button
                  onClick={() => setProduct("trustos")}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-all cursor-pointer",
                    product === "trustos"
                      ? "bg-primary text-white"
                      : "text-text-secondary hover:text-text"
                  )}
                >
                  <Shield className="h-4 w-4" />
                  TrustOS
                </button>
                <button
                  onClick={() => setProduct("trustpay")}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-all cursor-pointer",
                    product === "trustpay"
                      ? "bg-accent text-background"
                      : "text-text-secondary hover:text-text"
                  )}
                >
                  <Zap className="h-4 w-4" />
                  TrustPay
                </button>
              </div>
            </div>

            <ul className="mt-8 space-y-3">
              {(product === "trustos"
                ? [
                    "Full TypeScript types and autocomplete",
                    "Webhook verification helpers",
                    "Built-in dispute handling",
                    "Auto-release after protection period",
                  ]
                : [
                    "Full TypeScript types and autocomplete",
                    "Instant webhook notifications",
                    "2-second payment confirmation",
                    "Direct merchant settlement",
                  ]
              ).map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-text-secondary"
                >
                  <div className={cn(
                    "h-1.5 w-1.5 rounded-full",
                    product === "trustos" ? "bg-primary" : "bg-accent"
                  )} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Tabs defaultValue="typescript" key={product}>
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
                      <span className={cn(
                        "ml-auto text-xs font-medium",
                        product === "trustos" ? "text-primary" : "text-accent"
                      )}>
                        {product === "trustos" ? "Escrow API" : "Payments API"}
                      </span>
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
