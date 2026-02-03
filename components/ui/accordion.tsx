"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextValue {
  openItems: Set<string>;
  toggle: (value: string) => void;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context) throw new Error("Accordion components must be used within <Accordion>");
  return context;
}

function Accordion({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggle = (value: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(value)) {
        next.delete(value);
      } else {
        next.add(value);
      }
      return next;
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggle }}>
      <div className={cn("divide-y divide-border", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

function AccordionItem({
  value,
  children,
  className,
}: {
  value: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className} data-accordion-value={value}>
      {children}
    </div>
  );
}

function AccordionTrigger({
  value,
  children,
  className,
}: {
  value: string;
  children: ReactNode;
  className?: string;
}) {
  const { openItems, toggle } = useAccordion();
  const isOpen = openItems.has(value);

  return (
    <button
      onClick={() => toggle(value)}
      className={cn(
        "flex w-full items-center justify-between py-4 text-left text-sm font-medium text-text hover:text-primary transition-colors cursor-pointer",
        className
      )}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 text-text-muted transition-transform duration-200",
          isOpen && "rotate-180"
        )}
      />
    </button>
  );
}

function AccordionContent({
  value,
  children,
  className,
}: {
  value: string;
  children: ReactNode;
  className?: string;
}) {
  const { openItems } = useAccordion();
  const isOpen = openItems.has(value);

  if (!isOpen) return null;

  return (
    <div className={cn("pb-4 text-sm text-text-secondary", className)}>
      {children}
    </div>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
