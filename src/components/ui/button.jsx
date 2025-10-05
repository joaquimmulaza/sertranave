import * as React from "react";

export const Button = React.forwardRef(({ className = '', ...props }, ref) => (
  <button
    ref={ref}
    className={`inline-flex items-center justify-center rounded bg-primary text-white px-4 py-2 font-medium shadow hover:bg-primary/90 transition-colors focus:outline-none focus:ring-1 focus:ring-primary/50 ${className}`}
    {...props}
  />
));
Button.displayName = "Button";
