import { Button as HeadlessButton } from "@headlessui/react";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "~/utils/cn";

type ButtonVariant = "default" | "flat";
type ButtonColor = "primary" | "secondary" | "danger" | "success" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    color?: ButtonColor;
}

const buttonStyles = {

    variants: {
        default: "transition-all duration-200 active:scale-95 hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ",
        flat: "transition-all duration-200 active:scale-95 hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border-none",
    },
    
    colors: {
        primary: "bg-primary-500 hover:bg-primary-600 border-primary-300 focus:ring-primary-400 text-white",
        secondary: "bg-indigo-500 hover:bg-indigo-600 border-indigo-300 focus:ring-indigo-400 text-white",
        tertiary: "bg-neutral-500 hover:bg-neutral-600 border-neutral-300 focus:ring-neutral-400 text-white",
        danger: "bg-red-500 hover:bg-red-600 border-red-300 focus:ring-red-400 text-white",
        success: "bg-green-500 hover:bg-green-600 border-green-300 focus:ring-green-400 text-white",
        outline: "bg-white hover:bg-neutral-50 border-neutral-300 focus:ring-neutral-400 text-neutral-700"
    },

    sizes: {
        sm: "text-sm px-3 py-1 border rounded-lg font-medium",
        md: "text-base px-5 py-2 border-2 rounded-xl font-medium", 
        lg: "text-lg px-5 py-2 border-2 rounded-xl font-medium"
    }
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", color = "primary", size = "md", children, ...props }, ref) => (
        <HeadlessButton
            ref={ref}
            className={cn(
                `${buttonStyles.variants[variant]} ${buttonStyles.colors[color]} ${buttonStyles.sizes[size]}`,
                className
            )}
            {...props}
        >
            {children}
        </HeadlessButton>
    )
);

Button.displayName = "Button";
