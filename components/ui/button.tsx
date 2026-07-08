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
        default: "border border-primary bg-primary px-6 py-3 !text-white shadow-sm hover:border-[#137474] hover:bg-[#137474] active:border-[#0F5F5F] active:bg-[#0F5F5F]",
        outline: "border border-primary bg-transparent px-6 py-3 text-primary hover:bg-primary hover:text-white",
        ghost: "px-4 py-2 text-primary hover:bg-primary hover:text-white",
        secondary: "border border-white bg-white px-6 py-3 text-primary shadow-sm hover:border-primary hover:bg-primary hover:text-white"
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
