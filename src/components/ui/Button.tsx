// TODO: Button component — variantes: primary, secondary, ghost
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost"
}

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-lg font-medium transition-colors",
        variant === "primary" && "bg-emerald-600 text-white hover:bg-emerald-700",
        variant === "secondary" && "border border-gray-200 hover:bg-gray-50",
        variant === "ghost" && "hover:bg-gray-100",
        className
      )}
      {...props}
    />
  )
}
