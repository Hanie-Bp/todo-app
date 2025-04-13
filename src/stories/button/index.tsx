import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[4px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary-secondaryHover active:bg-secondary-secondaryActive",
        secondaryOutline:
          "border-2 border-primary bg-background text-foreground",
        primaryOutline:
          "border-2 border-secondary bg-background text-foreground",
        ghost: "",
        disabled: "text-muted bg-muted-background cursor-not-allowed",
        full: "w-full",
        warning:"bg-red-400 text-red-900 hover:bg-red-200 hover:text-red-500 rounded-3xl",
        unWarnung:"bg-teal-400 text-teal-900 hover:bg-teal-200 hover:text-teal-600 rounded-3xl"
      },
      size: {
        sm: "px-3.5 py-1.5 text-xs",
        md: "px-5 py-2 text-base",
        icon: "p-[5px]",
        iconButton: "py-2 px-[11px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
