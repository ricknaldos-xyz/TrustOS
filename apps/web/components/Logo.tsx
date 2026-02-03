import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <rect width="28" height="28" rx="6" fill="#6366F1" />
        <path
          d="M14 6L7 10v4c0 5.25 3 10.13 7 12 4-1.87 7-6.75 7-12v-4l-7-4z"
          fill="white"
          fillOpacity="0.9"
        />
        <path
          d="M12 14.5l2 2 4-4"
          stroke="#6366F1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-lg font-bold tracking-tight text-text">
        Trust<span className="text-primary">OS</span>
      </span>
    </div>
  );
}
