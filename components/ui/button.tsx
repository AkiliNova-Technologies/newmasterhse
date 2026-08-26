import * as React from "react";
import { cn } from "@/lib/utils";

function Button({ className, type = "button", ...props }: React.ComponentProps<"button">) {
  return (
    <button
      type={type}
      data-slot="button"
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-full bg-orange-500 px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
        className,
      )}
      {...props}
    />
  );
}

export { Button };
