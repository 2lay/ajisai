import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "~/utils/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "outlined" | "elevated" | "translucent";
}

const cardStyles = {
    base: "rounded-xl p-4 w-full md:w-3/4 lg:w-1/2 p-4 md:p-6 transition-colors duration-500",
    variants: {
        outlined: "border border-neutral-300 dark:border-neutral-700",
        elevated: "bg-neutral-50 dark:bg-white shadow-md",
        translucent: "bg-neutral-50/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 backdrop-blur-sm"
    }
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = "elevated", children, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                cardStyles.base,
                cardStyles.variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
);

Card.displayName = "Card";
