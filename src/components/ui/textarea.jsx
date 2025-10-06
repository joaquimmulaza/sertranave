import * as React from "react";

export const Textarea = React.forwardRef(({ className = '', ...props }, ref) => (
  <textarea
    ref={ref}
    className={`block w-full rounded border border-gray-300 px-3 py-2 text-base focus:border-primary focus:ring-primary focus:outline-none focus:ring-1 ${className}`}
    {...props}
  />
));
Textarea.displayName = "Textarea";
