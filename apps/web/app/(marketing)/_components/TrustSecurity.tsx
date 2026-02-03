import {
  ShieldCheck,
  Lock,
  AlertTriangle,
  Code2,
  RefreshCw,
  Bug,
  Users,
  Clock,
  Scale,
} from "lucide-react";

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: "Audited Smart Contracts",
    description: "Third-party audits by tier-1 security firms before mainnet launch.",
  },
  {
    icon: Lock,
    title: "Non-custodial Architecture",
    description:
      "No admin function can withdraw escrowed funds. The arbiter can only send funds to the predefined buyer or seller — never anywhere else.",
  },
  {
    icon: Users,
    title: "Multi-Signature Governance",
    description:
      "All admin operations require a 2-of-3 multisig (Gnosis Safe) with a 48-hour public delay via TimelockController. No single person controls the system.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Pause",
    description:
      "Separate multisig-controlled pause mechanism to halt operations instantly if a vulnerability is discovered.",
  },
  {
    icon: Scale,
    title: "Four-Eyes Dispute Review",
    description:
      "Minimum two senior team members review every dispute case. No single arbiter decides alone — ensuring consistency and fairness.",
  },
  {
    icon: Code2,
    title: "Open-source Contracts",
    description:
      "All smart contracts are verified on BaseScan. Read the code, verify the logic, audit it yourself.",
  },
  {
    icon: RefreshCw,
    title: "Auto-resolve if We Disappear",
    description:
      "Contracts are autonomous. Anyone can trigger auto-release or auto-refund directly on-chain. Your funds are never stuck.",
  },
  {
    icon: Bug,
    title: "Bug Bounty (Immunefi)",
    description:
      "Active bug bounty program. White-hat hackers help us stay secure with rewards for critical vulnerability reports.",
  },
  {
    icon: Clock,
    title: "Insurance & Guarantee Fund",
    description:
      "Emergency fund from platform fee reserves to compensate users in the event of a security incident. Commercial insurance coverage under evaluation.",
  },
];

export function TrustSecurity() {
  return (
    <section className="border-t border-border bg-surface/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Security is not a feature.{" "}
            <span className="gradient-text">It&apos;s the product.</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Built for a world where you shouldn&apos;t have to trust anyone — including us.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {securityFeatures.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-text">{feature.title}</h3>
                <p className="mt-1 text-sm text-text-secondary">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
