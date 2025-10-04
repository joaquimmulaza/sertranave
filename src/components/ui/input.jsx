import * as React from "react";

export const Input = React.forwardRef(({ className = '', ...props }, ref) => (
  <input
    ref={ref}
    className={`block w-full rounded border border-gray-300 px-3 py-2 text-base focus:border-primary focus:ring-primary focus:outline-none focus:ring-2 ${className}`}
    {...props}
  />
));
Input.displayName = "Input";
