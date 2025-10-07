import * as React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', ...props }, ref) => (
    <input
      ref={ref}
      className={`block w-full rounded border border-gray-300 px-3 py-2 text-base focus:border-primary focus:ring-primary focus:outline-none focus:ring-1 ${className}`}
      {...props}
    />
  )
);
Input.displayName = "Input";
