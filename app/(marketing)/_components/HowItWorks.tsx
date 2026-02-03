import { Store, Wallet, Package, CircleDollarSign } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Store,
    title: "Merchant creates escrow",
    description:
      "The merchant creates an escrow specifying the amount, buyer, and protection period. TrustOS returns a checkout URL for the buyer.",
  },
  {
    number: "02",
    icon: Wallet,
    title: "Buyer deposits USDC",
    description:
      "Buyer opens the checkout, connects their wallet, and deposits USDC into the smart contract. Not to the merchant, not to us — to the contract.",
  },
  {
    number: "03",
    icon: Package,
    title: "Merchant delivers",
    description:
      "Ship the product or deliver the service, then mark it as delivered. If the merchant doesn't deliver before the deadline, the buyer is auto-refunded.",
  },
  {
    number: "04",
    icon: CircleDollarSign,
    title: "Funds release",
    description:
      "Buyer confirms receipt (immediate release) or the 14-day protection period expires without dispute (auto-release). USDC goes to the merchant minus 1.5% fee.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Four steps. No middlemen. Full transparency.
          </p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Connector line */}
          <div className="absolute top-12 left-[12.5%] hidden h-px w-3/4 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 md:block" />

          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center">
                <div className="absolute inset-0 rounded-2xl bg-primary/10" />
                <step.icon className="relative h-10 w-10 text-primary" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Step {step.number}
              </span>
              <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
