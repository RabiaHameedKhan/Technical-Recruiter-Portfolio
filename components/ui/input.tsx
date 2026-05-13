import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "flex min-h-11 w-full rounded-xl border border-[#470047]/25 bg-white px-4 py-3 text-sm text-[#470047] transition-all duration-200 placeholder:text-[#470047]/60 focus:outline-none focus:ring-2 focus:ring-[#470047] disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";

export { Input };
