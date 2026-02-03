import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const methodColors: Record<string, string> = {
  GET: "bg-success/10 text-success border-success/20",
  POST: "bg-primary/10 text-primary border-primary/20",
  PUT: "bg-warning/10 text-warning border-warning/20",
  PATCH: "bg-warning/10 text-warning border-warning/20",
  DELETE: "bg-error/10 text-error border-error/20",
};

interface ApiEndpointProps {
  method: string;
  path: string;
  description?: string;
  children?: ReactNode;
}

export function ApiEndpoint({
  method,
  path,
  description,
  children,
}: ApiEndpointProps) {
  return (
    <div className="my-6 rounded-xl border border-border bg-surface overflow-hidden">
      <div className="flex items-center gap-3 border-b border-border px-4 py-3">
        <span
          className={cn(
            "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-bold",
            methodColors[method] || methodColors.GET
          )}
        >
          {method}
        </span>
        <code className="font-mono text-sm text-text">{path}</code>
      </div>
      {description && (
        <div className="border-b border-border px-4 py-3">
          <p className="text-sm text-text-secondary">{description}</p>
        </div>
      )}
      {children && <div className="p-4">{children}</div>}
    </div>
  );
}
