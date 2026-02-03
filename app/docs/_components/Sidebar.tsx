"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/Logo";
import { docsNav, type NavItem } from "@/lib/docs";
import { cn } from "@/lib/utils";

function NavLink({ item, onClick }: { item: NavItem; onClick?: () => void }) {
  const pathname = usePathname();
  const hrefPath = item.href.split("#")[0] || item.href;
  const isAnchor = item.href.includes("#");
  const isActive = !isAnchor && pathname === hrefPath;

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={cn(
        "block rounded-md px-3 py-1.5 text-sm transition-colors",
        isAnchor && "pl-5 text-xs",
        isActive
          ? "bg-primary/10 font-medium text-primary"
          : "text-text-secondary hover:text-text"
      )}
    >
      {item.title}
    </Link>
  );
}

function ComingSoonSection({ section }: { section: NavItem }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between mb-2 px-3 cursor-pointer"
      >
        <span className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-text-muted/50">
            {section.title}
          </span>
          <span className="rounded-full bg-elevated px-2 py-0.5 text-[10px] font-medium text-text-muted">
            Soon
          </span>
        </span>
        <ChevronDown
          className={cn(
            "h-3 w-3 text-text-muted/50 transition-transform",
            expanded && "rotate-180"
          )}
        />
      </button>
      {expanded && section.items && (
        <div className="space-y-0.5 opacity-50">
          {section.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-1.5 text-sm text-text-muted hover:text-text-secondary transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function SidebarContent({ onLinkClick }: { onLinkClick?: () => void }) {
  return (
    <nav className="p-4 space-y-6">
      {docsNav.map((section) =>
        section.comingSoon ? (
          <ComingSoonSection key={section.title} section={section} />
        ) : (
          <div key={section.title}>
            <h4 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-text-muted">
              {section.title}
            </h4>
            {section.items ? (
              <div className="space-y-0.5">
                {section.items.map((item) => (
                  <NavLink key={item.href} item={item} onClick={onLinkClick} />
                ))}
              </div>
            ) : (
              <NavLink item={section} onClick={onLinkClick} />
            )}
          </div>
        )
      )}
    </nav>
  );
}

export function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile header bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex h-14 items-center gap-3 border-b border-border bg-background/80 backdrop-blur-xl px-4 lg:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-8 w-8 items-center justify-center rounded-md text-text-secondary hover:text-text hover:bg-elevated cursor-pointer"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <Link href="/">
          <Logo />
        </Link>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={cn(
          "fixed top-14 left-0 z-40 h-[calc(100vh-3.5rem)] w-72 border-r border-border bg-background overflow-y-auto transition-transform duration-200 lg:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <SidebarContent onLinkClick={() => setMobileOpen(false)} />
      </aside>

      {/* Desktop sidebar */}
      <aside className="fixed top-0 left-0 z-40 hidden h-screen w-64 border-r border-border bg-background overflow-y-auto lg:block">
        <div className="flex h-16 items-center border-b border-border px-6">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <SidebarContent />
      </aside>
    </>
  );
}
