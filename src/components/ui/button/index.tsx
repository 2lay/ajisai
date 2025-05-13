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
        primary: "bg-indigo-500 hover:bg-indigo-600 border-indigo-300 focus:ring-indigo-400 text-white shadow-indigo-200",
        secondary: "bg-gray-500 hover:bg-gray-600 border-gray-300 focus:ring-gray-400 text-white shadow-gray-200",
        danger: "bg-red-500 hover:bg-red-600 border-red-300 focus:ring-red-400 text-white shadow-red-200",
        success: "bg-green-500 hover:bg-green-600 border-green-300 focus:ring-green-400 text-white shadow-green-200",
        outline: "bg-white hover:bg-gray-50 border-gray-300 focus:ring-gray-400 text-gray-700 shadow-gray-100"
    },

    sizes: {
        sm: "text-sm px-3 py-1 border rounded-lg font-medium",
        md: "text-base px-5 py-2 border-2 rounded-xl font-medium", 
        lg: "text-lg px-7 py-3 border-2 rounded-xl font-medium"
    }
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => (
        <HeadlessButton
            ref={ref}
            className={cn(
                `shadow-md transition-all duration-200 active:scale-95 hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${buttonStyles.variants[variant]} ${buttonStyles.sizes[size]}`,
                className
            )}
            {...props}
        >
            {children}
        </HeadlessButton>
    )
);

Button.displayName = "Button";
