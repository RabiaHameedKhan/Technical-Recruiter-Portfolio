"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border border-[#4A0E4E] bg-[#4A0E4E] px-6 py-3 !text-[#F5F0FF] shadow-sm hover:border-[#6B1870] hover:bg-[#6B1870] active:border-[#3A0A3E] active:bg-[#3A0A3E]",
        outline: "border border-[#4A0E4E] bg-transparent px-6 py-3 text-[#4A0E4E] hover:bg-[#4A0E4E] hover:text-[#F5F0FF]",
        ghost: "px-4 py-2 text-[#4A0E4E] hover:bg-[#EDE5FF] hover:text-[#4A0E4E]",
        secondary: "border border-[#F5F0FF] bg-[#F5F0FF] px-6 py-3 text-[#4A0E4E] shadow-sm hover:bg-[#EDE5FF]"
      },
      size: {
        default: "h-11",
        sm: "h-10 px-4",
        lg: "h-12 px-8 text-base",
        icon: "h-11 w-11 p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
