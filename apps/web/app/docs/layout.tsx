import type { Metadata } from "next";
import { Sidebar } from "./_components/Sidebar";

export const metadata: Metadata = {
  title: {
    default: "Documentation",
    template: "%s | TrustOS Docs",
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="pt-14 lg:pt-0 lg:ml-64">
        <div className="mx-auto max-w-3xl px-6 py-10 lg:px-8 lg:py-16">
          <article className="prose-trustos">{children}</article>
        </div>
      </main>
    </div>
  );
}
