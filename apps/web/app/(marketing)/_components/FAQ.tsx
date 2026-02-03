"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is TrustOS?",
    answer:
      "TrustOS is a trust infrastructure for stablecoin payments. It provides non-custodial escrow, evidence-based dispute resolution, and buyer protection for USDC transactions on Base L2. Think of it as the PayPal Buyer Protection layer for crypto payments.",
  },
  {
    question: "How does the escrow work?",
    answer:
      "When a buyer makes a payment, their USDC is deposited into a smart contract on Base — not into Rowship's account. The funds are held by immutable code until the buyer confirms receipt, the protection period expires (auto-release), or a dispute is resolved. If the merchant doesn't deliver before the deadline, the buyer is auto-refunded.",
  },
  {
    question: "Who controls the funds?",
    answer:
      "Nobody. The smart contract is non-custodial — no person or company, including Rowship, can withdraw escrowed funds. The arbiter can only decide between returning funds to the buyer or releasing to the seller — never to any other address. All admin operations require a 2-of-3 multisig with a 48-hour public delay.",
  },
  {
    question: "What happens if there's a dispute?",
    answer:
      "Either party can open a dispute during the protection period. Both sides submit evidence (screenshots, tracking info, logs). The process escalates through three phases: Negotiation → Mediation → Arbitration — each with strict deadlines. If the merchant doesn't respond within 5 days, the buyer gets an automatic refund. Every case is reviewed by at least two team members (four-eyes principle). The losing party pays a $5 dispute fee.",
  },
  {
    question: "What happens if TrustOS goes offline?",
    answer:
      "The smart contracts are autonomous and self-executing. Anyone can call the auto-release or auto-refund functions directly on the blockchain. If a dispute expires without resolution, the contract applies deterministic rules: merchant no-show = refund to buyer, buyer abandoned = release to merchant. Your funds are never stuck.",
  },
  {
    question: "Which stablecoins are supported?",
    answer:
      "Currently, TrustOS supports USDC on Base L2. Support for USDT and DAI is planned for future releases. We chose USDC on Base for its native support, sub-cent gas costs (~$0.01 per transaction), and 2-second confirmation times.",
  },
  {
    question: "How much does it cost?",
    answer:
      "1.5% fee on released escrows (deducted automatically). 0% fee on refunds — you never pay when the buyer gets their money back. $5 flat fee per dispute, paid by the losing party. PSPs get custom pricing (0.5–0.8%) with a +0.1% surcharge on sub-merchant escrows. No monthly fees on the Starter plan.",
  },
  {
    question: "How do I get started?",
    answer:
      "Sign up, get your API keys, and create your first escrow in the sandbox environment. Our quickstart guide walks you through the entire process. When you're ready to go live, switch to production API keys and you're set.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Everything you need to know about TrustOS.
          </p>
        </div>

        <Accordion className="mt-12">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger value={`faq-${i}`}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent value={`faq-${i}`}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
