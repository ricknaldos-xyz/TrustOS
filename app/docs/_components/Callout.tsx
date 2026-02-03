import { Info, AlertTriangle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const variants = {
  info: {
    icon: Info,
    className: "border-primary/30 bg-primary/5",
    iconClassName: "text-primary",
  },
  warning: {
    icon: AlertTriangle,
    className: "border-warning/30 bg-warning/5",
    iconClassName: "text-warning",
  },
  danger: {
    icon: AlertCircle,
    className: "border-error/30 bg-error/5",
    iconClassName: "text-error",
  },
};

interface CalloutProps {
  type?: keyof typeof variants;
  title?: string;
  children: ReactNode;
}

export function Callout({ type = "info", title, children }: CalloutProps) {
  const variant = variants[type];
  const Icon = variant.icon;

  return (
    <div
      className={cn(
        "my-6 flex gap-3 rounded-lg border p-4",
        variant.className
      )}
    >
      <Icon className={cn("mt-0.5 h-5 w-5 shrink-0", variant.iconClassName)} />
      <div>
        {title && (
          <p className="mb-1 text-sm font-semibold text-text">{title}</p>
        )}
        <div className="text-sm text-text-secondary [&>p]:mt-0">{children}</div>
      </div>
    </div>
  );
}
