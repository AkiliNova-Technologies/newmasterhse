import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-11 w-full min-w-0 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-navy outline-none transition-[color,box-shadow] placeholder:text-gray-400 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-orange-500 focus-visible:ring-1 focus-visible:ring-orange-500 aria-invalid:border-red-500 aria-invalid:ring-1 aria-invalid:ring-red-500/15",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
