import { Button as HeadlessButton } from "@headlessui/react";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "~/utils/cn";

type ButtonVariant = "primary" | "secondary" | "danger" | "success" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
}

const buttonStyles = {
    variants: {
        primary: "bg-indigo-500 hover:bg-indigo-600 border-indigo-300 focus:ring-indigo-400 text-white",
        secondary: "bg-gray-500 hover:bg-gray-600 border-gray-300 focus:ring-gray-400 text-white",
        danger: "bg-red-500 hover:bg-red-600 border-red-300 focus:ring-red-400 text-white",
        success: "bg-green-500 hover:bg-green-600 border-green-300 focus:ring-green-400 text-white",
        outline: "bg-transparent hover:bg-gray-100 border-gray-300 focus:ring-gray-400 text-gray-700"
    },

    sizes: {
        sm: "text-sm px-3 py-1",
        md: "text-base px-4 py-2",
        lg: "text-lg px-6 py-3"
    }
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => (
        <HeadlessButton
            ref={ref}
            className={cn(
                `font-semibold rounded-xl border-2 shadow-sm transition-colors focus:outline-none focus:ring-2 ${buttonStyles.variants[variant]} ${buttonStyles.sizes[size]}`,
            )}
            {...props}
        >
            {children}
        </HeadlessButton>
    )
);

Button.displayName = "Button";
