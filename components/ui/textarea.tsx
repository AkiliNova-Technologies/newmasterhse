import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-32 w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm text-navy outline-none transition-[color,box-shadow] placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-orange-500 focus-visible:ring-1 focus-visible:ring-orange-500 aria-invalid:border-red-500 aria-invalid:ring-1 aria-invalid:ring-red-500",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
