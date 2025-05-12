import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "~/utils/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "outlined" | "elevated";
}

const cardStyles = {
    base: "rounded-xl p-4",
    variants: {
        outlined: "border border-gray-200",
        elevated: "bg-white shadow-md"
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
