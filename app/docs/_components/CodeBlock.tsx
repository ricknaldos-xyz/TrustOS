"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ children, language, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group my-6 overflow-hidden rounded-xl border border-border bg-surface">
      {(title || language) && (
        <div className="flex items-center justify-between border-b border-border px-4 py-2">
          <span className="text-xs text-text-muted">{title || language}</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs text-text-muted opacity-0 transition-opacity hover:text-text-secondary group-hover:opacity-100 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" /> Copied
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" /> Copy
              </>
            )}
          </button>
        </div>
      )}
      <pre className="overflow-x-auto p-4">
        <code className="font-mono text-[13px] leading-relaxed text-text-secondary">
          {children}
        </code>
      </pre>
    </div>
  );
}
