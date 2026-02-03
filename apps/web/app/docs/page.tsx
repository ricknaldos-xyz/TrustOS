import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Bug,
  Building2,
  Code2,
  Rocket,
  Shield,
  ShieldAlert,
  ShieldCheck,
  TrendingUp,
  Globe,
  Zap,
  Scale,
  Clock,
  Users,
  AlertTriangle,
  CheckCircle2,
  Lock,
  DollarSign,
  Layers,
  Target,
  BarChart3,
  Eye,
  FileCheck,
  FileText,
  Handshake,
  Award,
  MessageSquare,
  HeartHandshake,
  Gavel,
  Network,
  Server,
  Database,
  Bell,
  MonitorSmartphone,
  Plug,
  RefreshCw,
  Landmark,
  CreditCard,
  UserCheck,
  Wallet,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation — Product Concept",
  description:
    "TrustOS by Rowship: complete product concept document. Trust infrastructure for stablecoin payments — non-custodial escrow, dispute resolution, and buyer protection for USDC on Base L2.",
};

const quickLinks = [
  {
    icon: Eye,
    title: "Strategic Vision",
    description: "Why we're building TrustOS and where it leads.",
    href: "/docs#strategic-vision",
  },
  {
    icon: Target,
    title: "Market Opportunity",
    description: "$27.6T stablecoin volume — zero buyer protection.",
    href: "/docs#market-opportunity",
  },
  {
    icon: Scale,
    title: "Competitive Analysis",
    description: "How TrustOS compares to Safe, Coinbase, Stripe, Kleros.",
    href: "/docs#competitive-analysis",
  },
  {
    icon: TrendingUp,
    title: "Business Model",
    description: "Revenue structure, pricing tiers, and unit economics.",
    href: "/docs#business-model",
  },
];

export default function DocsOverview() {
  return (
    <div>
      {/* ── Hero ── */}
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Rowship TrustOS — Product Concept
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-text-secondary">
        TrustOS is a <strong className="text-text">trust infrastructure platform for Web3 transactions</strong>,
        designed to enable secure cryptocurrency payments with user protection analogous to
        traditional payment guarantees. Built on non-custodial smart contracts on Base L2,
        TrustOS fills the critical gap between stablecoin payment rails and the consumer
        protection that mainstream commerce demands.
      </p>

      {/* ── Quick links ── */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {quickLinks.map((section) => (
          <Link key={section.href} href={section.href}>
            <Card className="h-full transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
              <CardHeader>
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <section.icon className="h-4.5 w-4.5 text-primary" />
                </div>
                <CardTitle className="flex items-center gap-2">
                  {section.title}
                  <ArrowRight className="h-4 w-4 text-text-muted" />
                </CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 1. STRATEGIC VISION                                            */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="mt-16">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
            <Eye className="h-5 w-5 text-primary" />
          </div>
          <h2 id="strategic-vision" className="text-2xl font-bold tracking-tight">Strategic Vision</h2>
        </div>

        <p className="mt-4 text-text-secondary leading-relaxed">
          Rowship TrustOS is conceived as the <strong className="text-text">trust layer (&ldquo;Trust OS&rdquo;)
          upon which Web3 commerce applications can be deployed securely and transparently</strong>.
          Currently, stablecoin payments lack refund or dispute mechanisms — they resemble cash
          transactions. TrustOS fills that void by providing integrated payment protections
          (escrow and dispute resolution) for stablecoin transactions.
        </p>

        <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-6">
          <h3 className="text-lg font-semibold text-text">The Long-Term Vision</h3>
          <p className="mt-2 text-text-secondary leading-relaxed">
            Establish Rowship TrustOS as the <strong className="text-text">de facto standard for
            secure transactions in the decentralized economy</strong>. The first step is to dominate
            the guaranteed payment use case — creating a wedge product that opens the path to a
            broader trust ecosystem spanning reputation, identity, and complex contract resolution.
          </p>
        </div>

        <p className="mt-6 text-text-secondary leading-relaxed">
          We start focused on payments because it represents the most immediate, highest-impact
          use case for generating trust among users and merchants. By addressing escrow and
          disputes first, Rowship gains traction in a critical niche (crypto e-commerce) before
          extending trust solutions to other domains. In essence, TrustOS brings the transactional
          trust of the traditional financial system to the crypto world — through a decentralized,
          transparent architecture aligned with Web3 principles.
        </p>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 2. THE PROBLEM                                                 */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="mt-16">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500/10">
            <AlertTriangle className="h-5 w-5 text-red-400" />
          </div>
          <h2 id="the-problem" className="text-2xl font-bold tracking-tight">The Problem</h2>
        </div>

        <p className="mt-4 text-text-secondary leading-relaxed">
          Stablecoins are becoming the default settlement rail for cross-border commerce,
          freelance work, and digital goods. In 2025, stablecoin transfer volume surpassed
          <strong className="text-text"> $27.6 trillion</strong> — more than Visa and Mastercard combined.
          Yet the infrastructure to make these payments <em>safe</em> for both parties barely exists.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface p-5">
            <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wider">For Buyers</h3>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              Crypto payments are irreversible. Once you send USDC, there is no chargeback,
              no bank to call, no recourse. If the merchant doesn&apos;t deliver, the money
              is gone. This single fact prevents mainstream adoption.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5">
            <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wider">For Merchants</h3>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              Accepting crypto means losing the trust signals buyers expect. No escrow,
              no dispute mechanism, no protection guarantees. High-value transactions
              require trust that the current stack can&apos;t provide.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5">
            <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wider">For Payment Processors</h3>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              PSPs building stablecoin rails have no off-the-shelf solution for buyer
              protection. They face a build-or-skip choice — and most skip it, leaving
              an entire trust layer missing from crypto commerce.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
          <p className="text-sm text-text-secondary leading-relaxed">
            <strong className="text-amber-400">The core insight:</strong> Traditional
            payment rails (Visa, PayPal, Stripe) built trust through centralized
            intermediaries — chargebacks, buyer protection policies, and dispute
            departments backed by legal teams. Crypto rails eliminated the intermediary
            but forgot to replace the trust. <strong className="text-text">TrustOS puts trust back
            into stablecoin payments — without reintroducing centralized custody.</strong>
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 3. PAYMENTS-FIRST WEDGE STRATEGY                               */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="mt-16">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10">
            <CreditCard className="h-5 w-5 text-indigo-400" />
          </div>
          <h2 id="payments-first" className="text-2xl font-bold tracking-tight">Wedge Product: Payments-First Strategy</h2>
        </div>

        <p className="mt-4 text-text-secondary leading-relaxed">
          The initial TrustOS product follows a <strong className="text-text">&ldquo;Payments-first&rdquo;
          strategy</strong> as the spearhead to enter the market. This means prioritizing a payment
          module with four key pillars:
        </p>

        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-border bg-surface p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                <Lock className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-text">Non-Custodial Escrow with USDC on L2</h3>
            </div>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed">
              Funds from each payment are deposited into an escrow smart contract in USDC on Base L2.
              Base offers low fees and high throughput, ideal for frequent payments, while inheriting
              Ethereum&apos;s security. USDC is chosen for its stability and regulatory compliance,
              facilitating commercial adoption. The escrow ensures payment is locked until release
              conditions are met — no party has unilateral control over funds during the process.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10">
                <Gavel className="h-5 w-5 text-amber-400" />
              </div>
              <h3 className="font-semibold text-text">Integrated Dispute Mechanism</h3>
            </div>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed">
              If issues arise (e.g., product not delivered), the platform offers dispute resolution.
              A designated arbitrator operates in <strong className="text-text">non-custodial mode</strong>:
              they cannot divert funds to an arbitrary account — they can only authorize refund to
              buyer or release to seller, within a determined period. This limits the trust required
              in the arbitrator. After the protection period, the seller can withdraw if no dispute
              was raised. This replicates traditional purchase guarantees (like credit card chargebacks)
              but through smart contracts.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10">
                <Plug className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="font-semibold text-text">Checkout Plugin for Commerce</h3>
            </div>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed">
              To achieve adoption, the product includes a payment plugin that e-commerce merchants
              can easily integrate into their channels. The plugin allows a buyer to select
              &ldquo;Pay with Rowship (USDC)&rdquo; at checkout, guides them to connect their
              Web3 wallet and approve the USDC payment to the escrow contract. For the merchant,
              the plugin provides payment-in-escrow confirmation — equivalent to an &ldquo;authorization&rdquo;
              in the card world.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10">
                <RefreshCw className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="font-semibold text-text">Escrow-as-a-Service</h3>
            </div>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed">
              The entire process is automated: buyer deposits USDC into a Rowship contract (initiated
              via plugin), seller is notified and proceeds with delivery, and after delivery the
              payment releases either automatically after a no-dispute period or early if the buyer
              confirms satisfaction. In case of dispute, Rowship intervenes following a predefined
              resolution flow. All blockchain complexity (L2 interactions, signatures, etc.) is
              abstracted for the end user through the plugin interface and clear notifications.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-5">
          <p className="text-sm text-text-secondary leading-relaxed">
            <strong className="text-primary">Why this wedge works:</strong> The Payments-first
            strategy capitalizes on recent trends where major players are exploring stablecoin
            payments with traditional-like protections. It lets Rowship enter the market solving
            an urgent problem (payments with escrow and disputes) and lay the foundation for our
            broader Web3 trust ecosystem.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 4. MARKET OPPORTUNITY                                          */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="mt-16">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10">
            <TrendingUp className="h-5 w-5 text-emerald-400" />
          </div>
          <h2 id="market-opportunity" className="text-2xl font-bold tracking-tight">Market Opportunity</h2>
        </div>

        <p className="mt-4 text-text-secondary leading-relaxed">
          Stablecoins are the fastest-growing financial instrument in history.
          The trust infrastructure layer that sits between payment rails and commerce
          platforms is a multi-billion dollar opportunity.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { value: "$27.6T", label: "Stablecoin transfer volume (2025)", icon: TrendingUp },
            { value: "$230B+", label: "Stablecoin market cap", icon: DollarSign },
            { value: "1.4B+", label: "All-time stablecoin transactions", icon: Globe },
            { value: "$0", label: "Trust infrastructure available today", icon: AlertTriangle },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-surface p-5 text-center"
            >
              <stat.icon className="mx-auto h-5 w-5 text-emerald-400" />
              <p className="mt-2 text-2xl font-bold text-text">{stat.value}</p>
              <p className="mt-1 text-xs text-text-muted leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-3">
          <div className="rounded-xl border border-border bg-surface p-5">
            <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">
              Cross-Border Remittances &amp; Commerce
            </h3>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              Latin America, Africa, and Southeast Asia are adopting stablecoins for
              everyday commerce — not speculation. Freelancers receiving USDC, merchants
              selling goods cross-border, and PSPs building local on/off ramps. All of
              them need a trust layer to operate safely.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5">
            <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">
              Regulatory Tailwinds
            </h3>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              MiCA in Europe, the US stablecoin framework, and local regulations in Brazil,
              Mexico, and Colombia are legitimizing stablecoin payments. Regulated PSPs need
              compliant infrastructure with built-in consumer protection — exactly what TrustOS provides.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5">
            <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">
              Platform Opportunity: B2B Infrastructure
            </h3>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              Like Stripe built payment infrastructure for internet businesses, TrustOS
              builds trust infrastructure for stablecoin businesses. Each PSP that integrates
              TrustOS brings their entire merchant base. The network effect is built into
              the distribution model.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 5. THE SOLUTION                                                */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="mt-16">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
            <Shield className="h-5 w-5 text-primary" />
          </div>
          <h2 id="the-solution" className="text-2xl font-bold tracking-tight">The Solution: TrustOS</h2>
        </div>

        <p className="mt-4 text-text-secondary leading-relaxed">
          TrustOS is <strong className="text-text">trust-as-a-service for stablecoin payments</strong>.
          A complete infrastructure layer that gives any stablecoin payment the same buyer
          protection, dispute resolution, and delivery guarantees that consumers expect
          from traditional payment methods — powered by non-custodial smart contracts
          on Base L2.
        </p>

        <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6">
          <h3 className="text-lg font-semibold text-text">One-Liner</h3>
          <p className="mt-2 text-xl font-medium text-primary leading-relaxed">
            &ldquo;Stripe&apos;s chargeback protection, but for stablecoin payments — non-custodial,
            on-chain, and integrated through a 5-line SDK.&rdquo;
          </p>
        </div>

        <h3 className="mt-8 text-lg font-semibold">Three Pillars</h3>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Lock className="h-5 w-5 text-primary" />
            </div>
            <h4 className="mt-3 font-semibold text-text">Non-Custodial Escrow</h4>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              USDC is deposited into an audited smart contract — not a wallet controlled
              by Rowship. No one can touch the funds except through the programmatic rules
              of the escrow: release on confirmation, refund on dispute, or auto-release
              after the protection period. The code is the custodian.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Scale className="h-5 w-5 text-primary" />
            </div>
            <h4 className="mt-3 font-semibold text-text">Fair Dispute Resolution</h4>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              Evidence-based, three-phase dispute process: negotiation between parties,
              mediation by a neutral third party, and binding arbitration if needed. Strict
              deadlines prevent stalling. If a merchant doesn&apos;t respond, the buyer is
              automatically refunded. If a buyer abandons a dispute, funds release to
              the merchant. No black boxes.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <h4 className="mt-3 font-semibold text-text">Automatic Protection</h4>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              14-day buyer protection window (configurable). If the buyer doesn&apos;t
              raise a dispute, funds auto-release to the merchant — zero action required.
              If the merchant doesn&apos;t deliver before the deadline, the escrow auto-refunds
              the buyer. The system is self-executing: even if TrustOS goes offline,
              anyone can trigger these actions directly on-chain.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 6. HOW IT WORKS                                                */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="mt-16">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10">
            <Layers className="h-5 w-5 text-cyan-400" />
          </div>
          <h2 id="how-it-works" className="text-2xl font-bold tracking-tight">How It Works</h2>
        </div>

        {/* Happy path */}
        <h3 className="mt-6 text-lg font-semibold">Happy Path: Successful Payment</h3>
        <div className="mt-4 space-y-0">
          {[
            {
              step: "1",
              title: "Merchant creates escrow",
              description:
                "The merchant creates an escrow specifying the amount, buyer, and protection period. TrustOS returns a checkout URL for the buyer.",
            },
            {
              step: "2",
              title: "Buyer deposits USDC",
              description:
                "Buyer opens the checkout page, connects their wallet (Coinbase Wallet, MetaMask, etc.), and deposits USDC into the escrow smart contract. Not to the merchant, not to Rowship — to the contract.",
            },
            {
              step: "3",
              title: "Merchant delivers",
              description:
                "Merchant ships the product or delivers the service, then marks it as delivered with optional tracking info.",
            },
            {
              step: "4",
              title: "Funds release",
              description:
                "Buyer confirms receipt (immediate release) OR the 14-day protection period expires without dispute (auto-release). USDC goes to the merchant minus 1.5% platform fee.",
            },
          ].map((item, i) => (
            <div key={item.step} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {item.step}
                </div>
                {i < 3 && <div className="w-px grow bg-border" />}
              </div>
              <div className="pb-8">
                <h4 className="font-semibold text-text">{item.title}</h4>
                <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dispute flow */}
        <h3 className="mt-8 text-lg font-semibold">Dispute Flow: Buyer Protection in Action</h3>
        <div className="mt-4 space-y-0">
          {[
            {
              step: "1",
              title: "Buyer opens dispute",
              description:
                'Within the protection period, the buyer opens a dispute with a reason ("Item not received", "Not as described", etc.) and uploads evidence (photos, screenshots, conversations).',
            },
            {
              step: "2",
              title: "Merchant responds",
              description:
                "Merchant has 5 days to respond with counter-evidence. If they don't respond, the system auto-resolves in the buyer's favor (MerchantNoShow).",
            },
            {
              step: "3",
              title: "Escalation (if needed)",
              description:
                "If parties can't agree, the dispute escalates: Negotiation → Mediation → Arbitration. Each phase has strict deadlines. Minimum two senior team members review each case (four-eyes principle).",
            },
            {
              step: "4",
              title: "Resolution",
              description:
                "The outcome is executed on-chain: full refund, full release, or split decision. The losing party pays a $5 dispute fee. The resolution is final and enforceable by the smart contract.",
            },
          ].map((item, i) => (
            <div key={item.step} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">
                  {item.step}
                </div>
                {i < 3 && <div className="w-px grow bg-border" />}
              </div>
              <div className="pb-8">
                <h4 className="font-semibold text-text">{item.title}</h4>
                <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* State machine */}
        <h3 className="mt-8 text-lg font-semibold">Escrow State Machine</h3>
        <div className="mt-4 rounded-xl border border-border bg-surface p-5 overflow-x-auto">
          <pre className="text-xs text-text-secondary font-mono leading-relaxed">
{`Created → Funded → Delivered → Released (terminal: payment complete)
                              ↘ Disputed → Resolved (terminal: refund or release)
                   ↘ Expired (terminal: merchant didn't deliver → auto-refund)
           Funded → AutoReleased (terminal: buyer didn't dispute → auto-release)
Created → Cancelled (terminal: cancelled before funding)`}
          </pre>
        </div>
        <p className="mt-3 text-sm text-text-muted">
          Every state transition is enforced on-chain. Off-chain services (API, webhooks)
          mirror the state but cannot override it.
        </p>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 7. TECHNICAL ARCHITECTURE                                      */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="mt-16">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10">
            <Layers className="h-5 w-5 text-violet-400" />
          </div>
          <h2 id="technical-architecture" className="text-2xl font-bold tracking-tight">Technical Architecture</h2>
        </div>

        <p className="mt-4 text-text-secondary leading-relaxed">
          TrustOS combines on-chain smart contracts (for fund custody and transaction truth)
          with off-chain infrastructure (for UX, notifications, and extensibility). This hybrid
          architecture delivers the security of blockchain with the usability users expect.
        </p>

        {/* On-chain */}
        <h3 className="mt-8 text-lg font-semibold">On-Chain Layer</h3>
        <p className="mt-2 text-sm text-text-secondary leading-relaxed">
          Four upgradeable smart contracts on Base L2, governed by a multi-signature wallet (2-of-3)
          with a 48-hour delay on any administrative changes.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            {
              name: "TrustEscrow",
              description:
                "The only contract that holds USDC. Manages the full escrow lifecycle: creation, funding, delivery, release, auto-release, expiry. Emergency pause capability for security incidents.",
            },
            {
              name: "TrustDispute",
              description:
                "Handles dispute lifecycle: opening, evidence submission, settlement proposals, and escalation through mediation to arbitration. The arbiter can only send funds to the predefined buyer or seller — never to any other address.",
            },
            {
              name: "TrustRegistry",
              description:
                "Merchant and PSP registration, KYB status tracking, and on-chain trust scores based on transaction history and dispute rates.",
            },
            {
              name: "TrustFeeManager",
              description:
                "Fee calculation and distribution. Handles platform fees on releases, dispute fees, and PSP surcharges. Manages treasury.",
            },
          ].map((contract) => (
            <div
              key={contract.name}
              className="rounded-xl border border-border bg-surface p-4"
            >
              <h4 className="font-mono text-sm font-semibold text-primary">
                {contract.name}
              </h4>
              <p className="mt-2 text-xs text-text-secondary leading-relaxed">
                {contract.description}
              </p>
            </div>
          ))}
        </div>

        {/* Off-chain */}
        <h3 className="mt-8 text-lg font-semibold">Off-Chain Layer</h3>
        <p className="mt-2 text-sm text-text-secondary leading-relaxed">
          A backend API that orchestrates the interaction between users, merchants, and the blockchain.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            { icon: Server, label: "REST API", value: "Authenticated API for merchants to create escrows, query state, and manage webhooks." },
            { icon: Network, label: "Chain Listener", value: "Real-time event processing from Base L2. Syncs on-chain state to the database and triggers notifications." },
            { icon: Bell, label: "Notifications", value: "Multi-channel alerts (email, future WhatsApp/Telegram). Confirmations, reminders, dispute alerts." },
            { icon: MonitorSmartphone, label: "Merchant Dashboard", value: "Web portal for merchants to monitor escrows, manage disputes, and view analytics." },
            { icon: Plug, label: "Checkout Plugin", value: "Embeddable JS widget for merchant sites. Handles wallet connection, USDC approval, and deposit." },
            { icon: Database, label: "Data Layer", value: "Stores user profiles, order details, dispute evidence, and webhook events. On-chain IDs ensure consistency." },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-border bg-surface p-4">
              <div className="flex items-center gap-2">
                <item.icon className="h-4 w-4 text-violet-400" />
                <h4 className="text-sm font-semibold text-text">{item.label}</h4>
              </div>
              <p className="mt-2 text-xs text-text-secondary leading-relaxed">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Security callouts */}
        <h3 className="mt-8 text-lg font-semibold">Security Principles</h3>
        <div className="mt-4 space-y-3">
          <div className="rounded-xl border border-border bg-surface p-5">
            <h4 className="text-sm font-semibold text-text">Non-Custodial by Design</h4>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              Rowship never holds private keys of end users. Each user manages their own wallet.
              The arbiter can only decide between returning funds to the buyer or releasing to the
              seller — it cannot divert funds anywhere else. Even if Rowship disappears, on-chain
              functions allow anyone to trigger auto-releases and auto-refunds.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5">
            <h4 className="text-sm font-semibold text-text">Progressive Decentralization</h4>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              Contracts are upgradeable during the first 12–18 months to allow rapid iteration.
              All upgrades require multi-signature approval with a 48-hour public delay. The long-term
              goal is to freeze contract logic or transition to decentralized governance once the
              system is proven stable. All contract code will be open-source and audited.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 8. COMPETITIVE ANALYSIS                                        */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="mt-16">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/10">
            <Target className="h-5 w-5 text-orange-400" />
          </div>
          <h2 id="competitive-analysis" className="text-2xl font-bold tracking-tight">Competitive Analysis</h2>
        </div>

        <p className="mt-4 text-text-secondary leading-relaxed">
          The stablecoin payment and escrow/dispute space has several relevant actors.
          TrustOS occupies a novel competitive space where Big Tech fintech adaptations
          to crypto meet purely decentralized solutions.
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              name: "Safe (Gnosis Safe)",
              type: "Multi-sig Custody",
              analysis: "Leading multi-signature custody for crypto assets, protecting tens of billions. However, Safe alone isn't a payment solution with disputes — it's a wallet. A commerce user would need to coordinate contracts and multiple signatures manually, making it unviable as a checkout experience. TrustOS differentiates by offering a purpose-built escrow with automated flows and integrated disputes. We could complement Safe (merchants receiving payments in a Safe wallet) rather than compete directly.",
              vs: "DIY alternative for advanced users only. TrustOS serves the broader market.",
            },
            {
              name: "Coinbase Commerce Protocol (Shopify + Coinbase)",
              type: "Stablecoin Payment Protocol",
              analysis: "In 2025, Coinbase announced an open-source protocol with Shopify introducing credit-card-like guarantees for stablecoin payments — including escrow, programmable refund windows, and fraud detection at the protocol level. This validates our space. However, it's born from a major player and will likely integrate first with Shopify (10% of global e-commerce) and Coinbase networks.",
              vs: "TrustOS differentiates via: (1) Platform independence — we partner with actors not covered by Shopify, (2) LatAm & emerging market focus — Coinbase initially targets US/EU, (3) Neutrality — not tied to a specific exchange, and (4) Agility — faster customization for custom platforms and independent stores.",
            },
            {
              name: "Stripe Crypto / Stablecoin Payments",
              type: "Custodial Stablecoin Acceptance",
              analysis: "Since 2024, Stripe lets US merchants accept USDC payments on Ethereum, Polygon, Solana, and Base — but auto-converts to fiat USD. The model is fully custodial and centralized: Stripe takes immediate custody, processes disputes off-chain through their terms. Limited to US businesses with fiat-only settlement.",
              vs: "TrustOS is 100% on-chain and non-custodial. We don't auto-convert to fiat (advantage for international merchants avoiding devaluation). Our dispute rules are transparent smart contract logic, not a closed process. TrustOS is accessible globally from day 1 — not limited to US businesses.",
            },
            {
              name: "Kleros (Decentralized Arbitration)",
              type: "Arbitration Protocol",
              analysis: "Pioneer of decentralized dispute resolution with cryptographic juries. Fully decentralized and impartial. However: (1) Time — Kleros cases take days/weeks with jury selection and deliberation, (2) UX — requires DApp interaction, PNK token purchases for fees, (3) Cost — jury rewards can approach or exceed disputed amounts for small claims. Kleros is more complementary than competitive.",
              vs: "TrustOS provides faster, simpler in-house arbitration initially. For high-value transactions, we can plug in Kleros as the back-end resolver. Our contract supports different arbiters — including ERC-792 compatible ones. Best of both worlds.",
            },
            {
              name: "Traditional Crypto Gateways (BitPay, CoinPayments, NOWPayments)",
              type: "Custodial Payment Gateways",
              analysis: "Generate deposit addresses, detect on-chain payments, confirm to merchants — often with fiat conversion. No on-chain escrow or dispute mechanism. Any dispute is off-chain through their support terms. Subject to hack/bankruptcy risk from custodial model.",
              vs: "TrustOS provides neutral on-chain custody and coded dispute logic, eliminating dependence on merchant goodwill for refunds. Non-custodial = no hack/bankruptcy risk of an intermediary.",
            },
            {
              name: "PayPal / Traditional Payments",
              type: "Reference Benchmark",
              analysis: "PayPal's buyer protection is the trust benchmark users expect. TrustOS competes with this expectation: for someone to use USDC instead of PayPal, they must feel equally or more protected.",
              vs: "TrustOS targets users who can't use PayPal easily (restricted countries, high-risk merchants, B2B international) or prefer financial sovereignty. A Venezuelan freelancer and their foreign client can use TrustOS for secure USDC payment — impossible with PayPal due to sanctions/regulations.",
            },
          ].map((competitor) => (
            <div key={competitor.name} className="rounded-xl border border-border bg-surface p-5">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-text">{competitor.name}</h4>
                <span className="text-xs font-medium text-text-muted bg-[#1A1A1D] px-2 py-1 rounded">
                  {competitor.type}
                </span>
              </div>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                {competitor.analysis}
              </p>
              <div className="mt-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10 px-3 py-2">
                <p className="text-xs text-emerald-400 leading-relaxed">
                  <strong>TrustOS advantage:</strong> {competitor.vs}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <h3 className="mt-8 text-lg font-semibold">Feature Comparison</h3>
        <div className="mt-4 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="px-4 py-3 text-left font-semibold text-text">Feature</th>
                <th className="px-4 py-3 text-left font-semibold text-text">TrustOS</th>
                <th className="px-4 py-3 text-left font-semibold text-text">PayPal / Stripe</th>
                <th className="px-4 py-3 text-left font-semibold text-text">Direct Crypto</th>
              </tr>
            </thead>
            <tbody className="text-text-secondary text-xs">
              {[
                ["Custody model", "Non-custodial (smart contract)", "Custodial (company holds funds)", "N/A (irreversible)"],
                ["Buyer protection", "14-day escrow + fair disputes", "Chargebacks (buyer-biased)", "None"],
                ["Dispute process", "Evidence-based, deadlines, transparent", "Black box, company decides", "None"],
                ["Merchant chargeback risk", "None (fair process)", "High (3-5% of revenue)", "None"],
                ["Transaction cost", "1.5% + ~$0.01 gas", "2.9% + $0.30", "Gas only (~$0.01)"],
                ["Settlement speed", "Instant on release", "2-7 business days", "Instant"],
                ["Works if provider offline", "Yes (autonomous contracts)", "No", "Yes"],
                ["Cross-border", "Native (USDC is global)", "Limited, FX fees", "Native"],
                ["Global access", "Anyone with a wallet", "US/EU businesses, KYC required", "Anyone"],
                ["Open source", "Yes (contracts + SDK)", "No", "N/A"],
              ].map(([feature, trustos, traditional, crypto], i) => (
                <tr key={feature} className={i < 9 ? "border-b border-border" : ""}>
                  <td className="px-4 py-3 font-medium text-text whitespace-nowrap">{feature}</td>
                  <td className="px-4 py-3 text-emerald-400">{trustos}</td>
                  <td className="px-4 py-3">{traditional}</td>
                  <td className="px-4 py-3">{crypto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Competitive strategy summary */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-5">
          <h4 className="font-semibold text-text">Competitive Strategy Summary</h4>
          <ul className="mt-3 space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-primary shrink-0" />
              <span><strong className="text-text">Market focus:</strong> Emerging markets and underserved use cases not well served by Big Tech solutions</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-primary shrink-0" />
              <span><strong className="text-text">UX + balanced decentralization:</strong> PayPal ease-of-use combined with blockchain transparency and self-custody</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-primary shrink-0" />
              <span><strong className="text-text">Composability:</strong> Willing to integrate with open standards (Kleros ERC-792, Coinbase protocol) rather than being a silo</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-primary shrink-0" />
              <span><strong className="text-text">Competitive costs:</strong> By eliminating costly intermediaries and automating disputes, fees stay lower than traditional interchange (3%)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 9. SERVICE BLUEPRINT                                           */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="mt-16">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10">
            <MessageSquare className="h-5 w-5 text-blue-400" />
          </div>
          <h2 id="service-blueprint" className="text-2xl font-bold tracking-tight">Service Blueprint</h2>
        </div>

        <p className="mt-4 text-text-secondary leading-relaxed">
          Beyond the technical flow, TrustOS is a service with human touchpoints,
          operational processes, and failure recovery procedures.
        </p>

        {/* 5-Stage journey */}
        <h3 className="mt-8 text-lg font-semibold">User Journey (5 Stages)</h3>
        <div className="mt-4 space-y-4">
          {[
            {
              stage: "1",
              title: "Payment Initiation",
              frontstage: "Buyer selects 'Pay with USDC (Rowship Trust)' at checkout. Plugin shows amount, protection period, and guides wallet connection. Buyer sees confirmation: 'Deposit secured in escrow.'",
              backstage: "Contract receives funds, emits PaymentCreated event. Backend detects event, notifies merchant 'Payment #XYZ secured in escrow.' Seller sees payment pending in their order panel.",
            },
            {
              stage: "2",
              title: "Fulfillment",
              frontstage: "Merchant ships product or delivers service. Rowship sends buyer email: 'Your payment is in escrow. You'll receive another email when the seller confirms shipping. Protection until X date.'",
              backstage: "Merchant marks order as 'shipped' via API/dashboard. Backend starts counting protection period from delivery confirmation. Proactive communication ensures both parties know what to expect.",
            },
            {
              stage: "3",
              title: "Completion or Dispute",
              frontstage: "Three possible paths: (a) Buyer satisfied → optional early release via 'Release payment' button, (b) Minor issue → amicable resolution with voluntary partial refund, (c) Formal dispute → buyer clicks 'Initiate dispute', selects reason, uploads evidence.",
              backstage: "Path (a): auto-release after timer or early confirmation. Path (b): seller uses refundByRecipient function. Path (c): on-chain status changes to 'disputed', arbiter team alerted, seller notified with 5-day response window.",
            },
            {
              stage: "4",
              title: "Dispute Resolution",
              frontstage: "Both parties provide evidence. Rowship team evaluates within defined SLA (target: <5 days). Decision communicated: 'Dispute resolved: buyer refunded due to evidence of non-delivery' or 'Seller vindicated with proof of delivery.'",
              backstage: "Arbiter multisig executes resolution on-chain: refundByArbiter or releaseByArbiter. Four-eyes principle: minimum two senior team members review. All evidence and communication logged in ticketing system. Decision is final on-chain.",
            },
            {
              stage: "5",
              title: "Close & Feedback",
              frontstage: "Transaction closed. Both parties may rate the experience. Trust scores updated. Receipts sent.",
              backstage: "Metrics logged: transaction duration, dispute reason, resolution outcome. Internal post-mortem for complex cases. Data feeds continuous improvement of policies and arbitration playbook.",
            },
          ].map((stage) => (
            <div key={stage.stage} className="rounded-xl border border-border bg-surface p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white shrink-0">
                  {stage.stage}
                </div>
                <h4 className="font-semibold text-text">{stage.title}</h4>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-lg bg-[#1A1A1D] p-3">
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Frontstage (User sees)</p>
                  <p className="text-xs text-text-secondary leading-relaxed">{stage.frontstage}</p>
                </div>
                <div className="rounded-lg bg-[#1A1A1D] p-3">
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Backstage (System does)</p>
                  <p className="text-xs text-text-secondary leading-relaxed">{stage.backstage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Operational support */}
        <h3 className="mt-8 text-lg font-semibold">Operational Support Processes</h3>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            { icon: HeartHandshake, title: "Customer Support", description: "Team available for technical issues and questions. Help center (FAQs, videos), chat/email support. SLA: first response <2 hours on business days. Coordinated with arbiter team for dispute escalations." },
            { icon: MonitorSmartphone, title: "24/7 Monitoring", description: "Infrastructure dashboards: API uptime, on-chain event delays, arbiter gas balance. Automatic alerts for stuck transactions, unresolved disputes past deadline. Pager notifications for incidents." },
            { icon: Gavel, title: "Dispute Management", description: "Internal Arbitration Playbook: guidelines for recurring case types, consistency and fairness standards. Four-eyes review for all cases, especially high-value. Ticketing system for full audit trail. External legal counsel available for complex cases." },
            { icon: Bell, title: "Updates & Communication", description: "Every service change (maintenance, contract upgrades, new features) communicated to users via email and platform with advance notice. Deployment calendar and rollback procedures defined." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-surface p-4">
              <div className="flex items-center gap-2">
                <item.icon className="h-4 w-4 text-blue-400" />
                <h4 className="text-sm font-semibold text-text">{item.title}</h4>
              </div>
              <p className="mt-2 text-xs text-text-secondary leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Failure recovery */}
        <h3 className="mt-8 text-lg font-semibold">Failure Recovery &amp; Business Continuity</h3>
        <div className="mt-4 space-y-3">
          {[
            { scenario: "Smart Contract Bug/Exploit", response: "Immediate emergency pause to prevent exploitation. Transparent communication to users — funds frozen but safe. Fix via proxy upgrade (audited) or migration to new contract. Insurance fund / coverage policy activated to compensate losses if any occurred." },
            { scenario: "Backend Service Outage", response: "On-chain funds remain safe regardless. Multi-region redundancy with auto-scaling. During total outage: social channels communicate status, users provided manual etherscan instructions as fallback. On restoration: sync from on-chain events to reconcile any missed state." },
            { scenario: "Key Personnel Unavailable", response: "2-of-3 multisig means any 2 remaining signers can operate. Backup contact list (advisory board members) can assume temporary signing duties. Secure credential backups ensure no access loss." },
            { scenario: "Fraud/Abuse at Scale", response: "Account suspension for terms violators. Anti-fraud analytics (IP, device, pattern analysis). Non-custodial model limits our ability to freeze user funds arbitrarily, but we can deny service (dispute handling) to bad actors, effectively defaulting to seller for buyers who act in bad faith repeatedly." },
            { scenario: "Data Loss", response: "Regular encrypted backups of database and evidence files. Financial source of truth is the blockchain — even total DB loss allows reindexing from on-chain events. Off-chain metadata backed up in multiple locations." },
          ].map((item) => (
            <div key={item.scenario} className="rounded-xl border border-border bg-surface p-4">
              <h4 className="text-sm font-semibold text-red-400">{item.scenario}</h4>
              <p className="mt-2 text-xs text-text-secondary leading-relaxed">{item.response}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 10. CUSTODY MODEL & REGULATION                                 */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="mt-16">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/10">
            <Landmark className="h-5 w-5 text-purple-400" />
          </div>
          <h2 id="custody-regulation" className="text-2xl font-bold tracking-tight">Custody Model, Regulation &amp; Compliance</h2>
        </div>

        {/* Non-custodial nature */}
        <h3 className="mt-6 text-lg font-semibold">Non-Custodial Nature</h3>
        <p className="mt-2 text-text-secondary leading-relaxed">
          TrustOS is designed to be <strong className="text-text">predominantly non-custodial</strong>.
          The platform never takes unilateral possession of user funds. Funds reside in a
          self-executing smart contract that only allows movement back to the buyer or to
          the seller according to established rules. Even the arbiter role is limited to
          deciding destination between original parties — never to an arbitrary address.
        </p>
        <div className="mt-4 rounded-xl border border-border bg-surface p-5">
          <p className="text-sm text-text-secondary leading-relaxed">
            <strong className="text-text">Legal position:</strong> (a) Funds never enter Rowship
            corporate accounts or under discretionary control, and (b) Rowship acts as a technical
            escrow agent, not a traditional custodian. To strengthen non-custody claims: contracts
            are immutable (no backdoors), multi-sig is community-visible, and the roadmap includes
            transitioning to decentralized arbitrators.
          </p>
        </div>

        {/* Regulatory framework */}
        <h3 className="mt-8 text-lg font-semibold">Regulatory Framework by Jurisdiction</h3>
        <div className="mt-4 space-y-3">
          {[
            {
              region: "United States",
              analysis: "Money transmitter laws vary by state. Non-custodial argument is strong but arbiter function could approach 'effecting transfers on behalf of others.' Mitigation: possible geofencing initially, focus on LatAm where the regulatory gap for crypto payments is larger but still compliant with international AML standards.",
            },
            {
              region: "European Union (MiCA)",
              analysis: "Crypto Asset Service Providers (CASPs) may require registration. Non-custodial status likely exempts from custody definitions, but 'crypto payment services' may need registration. Plan: register as a small digital financial services provider in an EU country for passporting.",
            },
            {
              region: "Latin America",
              analysis: "Many countries lack specific crypto laws. Strategy: collaborate with local PSP partners who have remittance/payment licenses. Rowship provides the technology layer; the PSP handles fiat conversion and local compliance. In Argentina, Brazil, and Mexico, offering a crypto escrow service doesn't contravene current norms — but KYC/AML is always implemented.",
            },
            {
              region: "Arbitration Law",
              analysis: "TrustOS's arbitral function could qualify as alternative dispute resolution (ADR). Terms of service include binding arbitration clause where users consent to Rowship as final arbiter. Valid in many jurisdictions, with limitations in consumer protection-heavy regions (EU). Users retain right to pursue traditional legal channels post-resolution.",
            },
          ].map((item) => (
            <div key={item.region} className="rounded-xl border border-border bg-surface p-5">
              <h4 className="text-sm font-semibold text-purple-400">{item.region}</h4>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{item.analysis}</p>
            </div>
          ))}
        </div>

        {/* KYC/AML */}
        <h3 className="mt-8 text-lg font-semibold">KYC/AML &amp; Compliance</h3>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            { icon: Building2, title: "Merchant KYC/KYB", description: "All integrated merchants undergo Know Your Business verification: business data, representatives, legitimacy validation. Detects potential scam storefronts. Integrated with third-party KYB services." },
            { icon: UserCheck, title: "Flexible Buyer KYC", description: "Low friction for consumers. Anonymous wallet-only for small transactions (up to threshold, e.g. $1,000). Verification required for large disputes or cumulative limits. Travel Rule compliance when applicable." },
            { icon: ShieldAlert, title: "Sanctions Screening", description: "Automated screening against OFAC and international sanctions lists using specialized APIs. Flagged wallets blocked from creating new payments or escalated for review. Tornado Cash and known illicit origin detection." },
            { icon: FileText, title: "Suspicious Activity Reporting", description: "Compliance program for reporting suspicious activities to competent authorities when thresholds apply. Despite non-custodial nature, proactive compliance to ensure business continuity and regulatory goodwill." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-surface p-4">
              <div className="flex items-center gap-2">
                <item.icon className="h-4 w-4 text-purple-400" />
                <h4 className="text-sm font-semibold text-text">{item.title}</h4>
              </div>
              <p className="mt-2 text-xs text-text-secondary leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Legal entity */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-5">
          <h4 className="text-sm font-semibold text-text">Legal Entity Structure</h4>
          <p className="mt-2 text-sm text-text-secondary leading-relaxed">
            Rowship will be incorporated in a crypto-friendly jurisdiction (e.g., Switzerland,
            Singapore, or Lisbon) for international service offering, with local representative
            entities alongside PSP partners for regional operations. Revenue from service fees
            is structured as technology service charges. The entity structure anticipates future
            licensing requirements — if regulators decide non-custodial stablecoin escrow requires
            registration, we&apos;re prepared to adjust.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 11. BUSINESS MODEL                                             */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="mt-16">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10">
            <DollarSign className="h-5 w-5 text-green-400" />
          </div>
          <h2 id="business-model" className="text-2xl font-bold tracking-tight">Business Model</h2>
        </div>

        <p className="mt-4 text-text-secondary leading-relaxed">
          Transaction-based revenue aligned with merchant success. We only earn when
          merchants earn — creating a natural incentive to maximize successful
          resolutions and minimize disputes.
        </p>

        <div className="mt-6 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="px-4 py-3 text-left font-semibold text-text">Revenue Line</th>
                <th className="px-4 py-3 text-left font-semibold text-text">Fee</th>
                <th className="px-4 py-3 text-left font-semibold text-text">Details</th>
              </tr>
            </thead>
            <tbody className="text-text-secondary">
              {[
                ["Escrow release fee", "1.5%", "Deducted from USDC at release. Only paid on successful transactions."],
                ["Refund fee", "0%", "No fee on refunds. We don't earn from failed transactions."],
                ["Dispute fee", "$5 flat", "Paid by the losing party. Disincentivizes frivolous disputes."],
                ["PSP surcharge", "+0.1%", "Additional fee on sub-merchant escrows via PSP integration."],
              ].map(([line, fee, details], i) => (
                <tr key={line} className={i < 3 ? "border-b border-border" : ""}>
                  <td className="px-4 py-3 font-medium text-text">{line}</td>
                  <td className="px-4 py-3 font-mono text-emerald-400">{fee}</td>
                  <td className="px-4 py-3">{details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-8 text-lg font-semibold">Subscription Tiers (Post-MVP)</h3>
        <div className="mt-4 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="px-4 py-3 text-left font-semibold text-text">Tier</th>
                <th className="px-4 py-3 text-left font-semibold text-text">Monthly</th>
                <th className="px-4 py-3 text-left font-semibold text-text">Fee</th>
                <th className="px-4 py-3 text-left font-semibold text-text">Escrows/mo</th>
                <th className="px-4 py-3 text-left font-semibold text-text">Extras</th>
              </tr>
            </thead>
            <tbody className="text-text-secondary">
              {[
                ["Starter", "Free", "1.5%", "100", "Sandbox, basic dashboard"],
                ["Growth", "$99", "1.2%", "1,000", "Analytics, priority support"],
                ["Enterprise", "Custom", "0.8%", "Unlimited", "SLA 99.9%, white-label"],
                ["PSP", "Custom", "0.5–0.8%", "Unlimited", "Multi-tenant, dedicated integration"],
              ].map(([tier, monthly, fee, escrows, extras], i) => (
                <tr key={tier} className={i < 3 ? "border-b border-border" : ""}>
                  <td className="px-4 py-3 font-medium text-text">{tier}</td>
                  <td className="px-4 py-3">{monthly}</td>
                  <td className="px-4 py-3 font-mono">{fee}</td>
                  <td className="px-4 py-3">{escrows}</td>
                  <td className="px-4 py-3">{extras}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 12. TARGET AUDIENCES & USE CASES                               */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="mt-16">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10">
            <Users className="h-5 w-5 text-blue-400" />
          </div>
          <h2 id="target-audiences" className="text-2xl font-bold tracking-tight">Target Audiences &amp; Use Cases</h2>
        </div>

        <div className="mt-6 space-y-4">
          {[
            { icon: Building2, color: "blue", title: "Payment Service Providers (PSPs)", subtitle: "Primary distribution channel", description: "PSPs building stablecoin payment rails for their merchant base. Multi-tenant API, white-label checkout, webhook integration. Each PSP integration brings their entire merchant base (10x–100x network effect)." },
            { icon: Wallet, color: "purple", title: "Merchants", subtitle: "Direct integration", description: "E-commerce, digital goods, freelance platforms, marketplaces. Direct API/SDK integration or Shopify/WooCommerce plugins. No chargebacks — fair disputes instead. Trust badge increases buyer conversion. Auto-release means no manual payment management." },
            { icon: Code2, color: "cyan", title: "Developers", subtitle: "Building on TrustOS", description: "Five lines of code to add non-custodial escrow. Full TypeScript SDK, REST API, webhook events, sandbox with testnet USDC. Open-source contracts on BaseScan." },
          ].map((audience) => (
            <div key={audience.title} className="rounded-xl border border-border bg-surface p-6">
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-${audience.color}-500/10`}>
                  <audience.icon className={`h-5 w-5 text-${audience.color}-400`} />
                </div>
                <div>
                  <h3 className="font-semibold text-text">{audience.title}</h3>
                  <p className="text-xs text-text-muted">{audience.subtitle}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">{audience.description}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-8 text-lg font-semibold">Use Cases</h3>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            { title: "Cross-Border E-Commerce", tag: "LatAm Commerce", description: "Buyer in Mexico purchases from merchant in Colombia. USDC avoids FX fees. Escrow guarantees delivery or refund. The smart contract is the trust." },
            { title: "Freelance & Services", tag: "Gig Economy", description: "Designer hired for $2,000 branding project. Client deposits USDC into escrow. Designer delivers milestones. No 'check is in the mail' — money is already locked." },
            { title: "Digital Goods & Software", tag: "Digital Commerce", description: "Indie developer sells $50 SaaS license. Buyer pays USDC, gets access. 14 days to dispute if product doesn't work. Merchant has fair process to defend." },
            { title: "Marketplace Platforms", tag: "Marketplaces", description: "Handmade goods marketplace integrates TrustOS. Every transaction escrowed. No need to build escrow or hold customer funds." },
            { title: "B2B Trade & Invoices", tag: "B2B", description: "Supplier ships $10,000 in goods. Invoice backed by escrow. Buyer inspects, confirms receipt. Instant settlement — no 60-day payment terms." },
            { title: "PSP Infrastructure", tag: "Infrastructure", description: "LatAm payment processor adds USDC to their existing card and bank transfer rails. TrustOS provides the trust layer without building it internally." },
          ].map((uc) => (
            <div key={uc.title} className="rounded-xl border border-border bg-surface p-5">
              <span className="inline-block rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-400">{uc.tag}</span>
              <h4 className="mt-3 font-semibold text-text">{uc.title}</h4>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{uc.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 13. DETAILED ROADMAP                                           */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="mt-16">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10">
            <BarChart3 className="h-5 w-5 text-indigo-400" />
          </div>
          <h2 id="roadmap" className="text-2xl font-bold tracking-tight">Development Roadmap (12 Months)</h2>
        </div>

        <div className="mt-6 space-y-0">
          {[
            {
              phase: "Q1",
              title: "Foundation & MVP",
              color: "bg-primary",
              items: [
                "Complete technical specification of contracts and backend architecture",
                "Implement Escrow v1 in Solidity: create, fund, release, dispute, arbiter functions",
                "Exhaustive unit tests (happy paths + edge cases) + deploy on Base Sepolia testnet",
                "Backend MVP: API service, blockchain event listener, basic dispute management",
                "Checkout plugin alpha: wallet connection, testnet payment flow",
                "Internal QA: complete cycle test (fictitious buyer → payment → expiry/dispute → resolution)",
              ],
              deliverables: "Architecture document, contracts v1 on testnet, internal functional demo, identified issues list",
            },
            {
              phase: "Q2",
              title: "Audit & Closed Pilot",
              color: "bg-emerald-500",
              items: [
                "External security audit by recognized blockchain firm (OpenZeppelin / Trail of Bits / Certik)",
                "Code freeze during audit, fix all critical vulnerabilities, second audit round if needed",
                "Closed pilot with LatAm PSP partner: real transactions on Base mainnet (controlled amounts)",
                "Simulate 1-2 controlled disputes to test arbitration end-to-end with real cases",
                "Refine UX from pilot feedback: notification timing, multi-language (ES/EN), plugin adjustments",
                "Finalize terms of service, privacy policy, legal agreements. Entity registration in optimal jurisdiction",
              ],
              deliverables: "Audit report (published), secured contracts v1.1 deployed on Base, pilot completed with report, legal documentation approved",
            },
            {
              phase: "Q3",
              title: "Public Beta & Growth",
              color: "bg-amber-500",
              items: [
                "Beta launch: onboard 5-10 additional merchants across diverse verticals",
                "WooCommerce/Shopify plugin beta available for voluntary stores",
                "Scale support/arbitration team. Direct merchant communication channel (Telegram/Slack)",
                "Optimize gas costs, DB queries, prepare for 1,000+ concurrent transactions",
                "New features: partial refunds, post-transaction ratings, full multi-language",
                "Infrastructure pentest + cloud security hardening. Resolve all critical findings",
                "Initial marketing: educational content, pilot case studies, ecosystem event participation",
              ],
              deliverables: "~10 merchants integrated, initial usage metrics (GMV, disputes resolved), product improvements shipped, pentest results actioned, marketing materials ready",
            },
            {
              phase: "Q4",
              title: "Official Launch & Scale",
              color: "bg-purple-500",
              items: [
                "v1.0 official launch: press release, crypto/fintech media campaign, launch event",
                "Open self-service merchant registration (subject to KYC approval)",
                "Scale infrastructure: multi-region redundancy, auto-scaling, 24/7 support coverage",
                "Strategic integrations: regional marketplace, Web3 freelancing platform, or DeFi protocol",
                "Mobile optimization / SDK spike for mobile wallets",
                "Second contract audit + ISO 27001 preparation for enterprise trust",
                "Consolidate all metrics, retrospective, investor report. Define TrustOS 2.0 roadmap",
              ],
              deliverables: "v1.0 in production, 50+ registered merchants (target), press kit & blog content, investor metrics report, 2.0 roadmap draft",
            },
          ].map((phase, i) => (
            <div key={phase.phase} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${phase.color} text-xs font-bold text-white shrink-0`}>
                  {phase.phase}
                </div>
                {i < 3 && <div className="w-px grow bg-border" />}
              </div>
              <div className="pb-8">
                <h4 className="font-semibold text-text">{phase.title}</h4>
                <ul className="mt-3 space-y-1.5">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-text-muted shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 rounded-lg bg-[#1A1A1D] px-3 py-2">
                  <p className="text-xs text-text-muted">
                    <strong>Deliverables:</strong> {phase.deliverables}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 14. SUCCESS METRICS                                            */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="mt-16">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10">
            <BarChart3 className="h-5 w-5 text-cyan-400" />
          </div>
          <h2 id="success-metrics" className="text-2xl font-bold tracking-tight">Key Success Metrics</h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { metric: "GMV Processed", target: ">$1M USDC", description: "Total value transacted through TrustOS escrows. Demonstrates traction and real utility." },
            { metric: "Integrated Merchants", target: "≥50 active", description: "Merchants processing at least N transactions/month. Shows commercial validation." },
            { metric: "PSPs Integrated", target: "≥1 in production", description: "Each PSP multiplies merchant count 10x–100x. Network effect driver." },
            { metric: "Dispute Rate", target: "<5%", description: "Low rate indicates good expectation matching. Tracked with resolution breakdown (buyer vs seller wins)." },
            { metric: "Dispute Resolution Time", target: "<7 days avg", description: "From dispute opened to on-chain resolution. No case exceeding 14 days. Competitive with credit card disputes." },
            { metric: "Checkout Conversion", target: ">90%", description: "Buyers who select Rowship and complete payment. High = smooth UX. Drop-off analysis per step." },
            { metric: "Merchant Retention", target: ">80% at 6 months", description: "Cohort retention of integrated merchants. High = real value delivered." },
            { metric: "Security Incidents", target: "0 fund losses", description: "Zero hacks/exploits. Also tracking: attempted attacks detected and blocked." },
            { metric: "Smart Contract Audits", target: "2 in year 1", description: "v1.0 and v1.1 audited by tier-1 firms. Published results for transparency." },
            { metric: "Service Uptime", target: ">99.5%", description: "Platform web/API availability. On-chain escrows always available regardless." },
            { metric: "User Satisfaction (NPS)", target: ">50", description: "Net Promoter Score from both buyers and sellers. Indicates perceived fairness and usefulness." },
            { metric: "Revenue / Take Rate", target: "0.5–1.5% of GMV", description: "Demonstrates monetizable model. Growing acorde to GMV, eventually covering variable costs." },
          ].map((item) => (
            <div key={item.metric} className="rounded-xl border border-border bg-surface p-5">
              <p className="text-2xl font-bold text-text">{item.target}</p>
              <p className="mt-1 text-sm font-semibold text-cyan-400">{item.metric}</p>
              <p className="mt-2 text-xs text-text-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 15. CREDIBILITY & TRUST ELEMENTS                               */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="mt-16">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10">
            <Award className="h-5 w-5 text-emerald-400" />
          </div>
          <h2 id="credibility" className="text-2xl font-bold tracking-tight">Credibility &amp; Trust Elements</h2>
        </div>

        <p className="mt-4 text-text-secondary leading-relaxed">
          Trust isn&apos;t declared — it&apos;s built with concrete actions. These are the
          specific elements we implement to earn the confidence of CTOs, product teams,
          regulatory partners, and investors.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            {
              icon: FileCheck,
              title: "External Security Audits",
              description: "All smart contracts audited by recognized independent firms before production deployment. Audit reports published openly. Periodic re-audits after significant upgrades. We don't ask users to trust blindly — third parties verify the code is secure.",
            },
            {
              icon: Code2,
              title: "Open Source",
              description: "Smart contracts are open source from launch (public GitHub repo). SDKs and integration libraries also open. Clear documentation and code comments for public auditability. No hidden behavior — the community can inspect every line.",
            },
            {
              icon: Bug,
              title: "Bug Bounty Program",
              description: "Active vulnerability reward program through Immunefi. Tiered rewards (up to $X for critical fund-compromising bugs). Incentivizes continuous review from the ethical hacker community, discovering issues before malicious actors.",
            },
            {
              icon: Handshake,
              title: "PSP Pilot Partnership",
              description: "Collaboration with a recognized LatAm payment processor validates commercial viability. Joint announcement with testimonial. The PSP's compliance standards demonstrate regulatory alignment. Their backing signals that established companies trust Rowship.",
            },
            {
              icon: Users,
              title: "Advisory Board",
              description: "Experts from crypto industry, fintech regulation, and traditional payments. Names that investors and partners recognize. Active guidance on product direction, regulatory strategy, and market expansion.",
            },
            {
              icon: Eye,
              title: "Transparent Communication",
              description: "Quarterly/semi-annual reports summarizing achievements, volume processed, and difficulties. Proactive incident disclosure: what happened, how it was resolved, what we changed. Investor dashboards with real-time metrics.",
            },
            {
              icon: Award,
              title: "Certifications & Proactive Compliance",
              description: "Pursuing SOC 2 certification (security and data controls) and ISO/IEC 27001 (information security). Aligned with certification frameworks from day one. Voluntary regulatory engagement — when frameworks catch up to this sector, we're already compliant.",
            },
            {
              icon: ShieldCheck,
              title: "Insurance / Guarantee Fund",
              description: "Evaluating commercial insurance covering losses from platform failures (smart contract bugs, arbitration errors). Additionally, constituting an internal emergency fund (% of fees retained in multi-sig vault) for user compensation if adverse events occur.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-surface p-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10">
                <item.icon className="h-4 w-4 text-emerald-400" />
              </div>
              <h4 className="mt-3 font-semibold text-text">{item.title}</h4>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 16. WHY NOW                                                    */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="mt-16">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/10">
            <Zap className="h-5 w-5 text-orange-400" />
          </div>
          <h2 id="why-now" className="text-2xl font-bold tracking-tight">Why Now?</h2>
        </div>

        <div className="mt-6 space-y-3">
          {[
            { title: "Stablecoin Adoption at Inflection Point", description: "Circle's IPO, Stripe acquiring Bridge, PayPal launching PYUSD, Visa settling in USDC. Stablecoins crossed from crypto-native to mainstream in 2024-2025. The infrastructure that makes stablecoin payments trustworthy is the next layer to be built." },
            { title: "Base L2 Makes Escrow Economically Viable", description: "Before L2s, escrow on Ethereum mainnet cost $5-50 in gas. On Base: $0.004. This makes escrow viable for transactions as small as $5 — opening the long tail of digital commerce." },
            { title: "Regulatory Clarity is Emerging", description: "MiCA in Europe, US stablecoin frameworks, LatAm local regulations — creating a legal environment where stablecoin payment infrastructure can operate with confidence. Regulated PSPs need compliant consumer protection." },
            { title: "PSPs Are Building Crypto Rails Now", description: "Payment processors across Latin America, Africa, and Southeast Asia are actively adding stablecoin support. They need trust infrastructure but don't want to build it. The window to become the default trust layer is open now." },
            { title: "No One Has Built This Yet", description: "No established non-custodial escrow infrastructure for stablecoin payments exists. Solutions are either custodial (reintroducing centralization problems), fragmented (DIY contracts with no dispute layer), or non-existent. First-mover advantage in infrastructure is durable." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-surface p-5">
              <h4 className="font-semibold text-text">{item.title}</h4>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 17. WHY BASE L2                                                */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="mt-16">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10">
            <Globe className="h-5 w-5 text-blue-400" />
          </div>
          <h2 id="why-base" className="text-2xl font-bold tracking-tight">Why Base L2?</h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            { title: "Sub-Cent Gas Costs", description: "~$0.01 per transaction. Creating an escrow costs ~$0.004. Viable for any transaction size — $5 digital goods to $50,000 B2B invoices." },
            { title: "Native USDC", description: "Circle issues USDC natively on Base (0x833589fCD...). Not bridged, not wrapped. Eliminates bridge risk, ensures 1:1 backing." },
            { title: "Coinbase Ecosystem", description: "110M+ Coinbase users can interact with Base via Coinbase Wallet with zero setup. Largest fiat on-ramp connects directly to TrustOS's chain." },
            { title: "2-Second Confirmations", description: "Near-instant finality. Buyers see escrow funded in seconds. Critical for commerce UX — no 15-minute waits." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-surface p-5">
              <h4 className="font-semibold text-text">{item.title}</h4>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 18. KEY CONCEPTS                                               */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="mt-16">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
          <h2 id="key-concepts" className="text-2xl font-bold tracking-tight">Key Concepts</h2>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="px-4 py-3 text-left font-semibold text-text">Concept</th>
                <th className="px-4 py-3 text-left font-semibold text-text">Definition</th>
              </tr>
            </thead>
            <tbody className="text-text-secondary">
              {[
                ["Escrow", "A smart contract vault that holds USDC until predefined conditions are met (delivery confirmed, protection period expired, or dispute resolved)."],
                ["Non-custodial", "No entity (including Rowship) can withdraw escrowed funds. The smart contract enforces all rules autonomously."],
                ["Protection period", "Configurable window (default 14 days) during which a buyer can raise a dispute after delivery. After expiry, funds auto-release to the merchant."],
                ["Auto-release", "Funds are automatically released to the merchant after the protection period expires with no dispute. No action needed from either party."],
                ["Auto-refund", "Funds are automatically returned to the buyer if the merchant fails to deliver before the agreed deadline."],
                ["Dispute", "Evidence-based resolution process initiated by the buyer. Three phases: Negotiation, Mediation, Arbitration — each with strict deadlines."],
                ["Trust Score", "Reputation metric for merchants based on completion rate, dispute rate, and resolution history."],
                ["PSP", "Payment Service Provider — processes payments for multiple merchants. TrustOS provides a multi-tenant API so PSPs can offer escrow protection to their entire merchant base."],
                ["Base L2", "Layer 2 blockchain built by Coinbase on Ethereum. Sub-cent transaction costs, 2-second confirmations, native USDC support."],
                ["USDC", "USD-pegged stablecoin by Circle. Fully backed 1:1 by US dollars. The most regulated and widely adopted stablecoin for commerce."],
              ].map(([concept, definition], i) => (
                <tr key={concept} className={i < 9 ? "border-b border-border" : ""}>
                  <td className="px-4 py-3 font-medium text-text whitespace-nowrap align-top">{concept}</td>
                  <td className="px-4 py-3">{definition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* NEXT STEPS CTA                                                 */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="mt-16 rounded-xl border border-primary/20 bg-primary/5 p-6">
        <h2 className="text-xl font-bold text-text">Next Steps</h2>
        <p className="mt-2 text-sm text-text-secondary leading-relaxed">
          TrustOS is ready for investment and development. Here&apos;s how to move forward.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            { icon: Rocket, title: "Schedule a Deep Dive", subtitle: "Walk through the architecture and roadmap in detail" },
            { icon: Target, title: "Review the Financials", subtitle: "Unit economics, revenue projections, and funding needs" },
            { icon: Handshake, title: "Meet the Team", subtitle: "Background, expertise, and advisory board" },
            { icon: Globe, title: "See the Prototype", subtitle: "Live demo of the escrow flow on Base testnet" },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3"
            >
              <item.icon className="h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="font-semibold text-text">{item.title}</p>
                <p className="text-xs text-text-muted">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
