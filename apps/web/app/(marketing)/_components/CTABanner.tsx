import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-surface p-12 text-center md:p-16">
          {/* Background gradient */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />
          </div>

          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Start accepting protected payments today
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-text-secondary">
              Get your API keys in minutes. No credit card required.
              Start in the sandbox, go live when you&apos;re ready.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/docs/getting-started/quickstart">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="#pricing">Talk to Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
