import * as React from "react"

import { cn } from "@/lib/utils"


const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      placeholder="Search"
      className={cn(
        "w-full rounded-[100px] border border-gray-300 bg-gray-100 py-2 pl-4 pr-10 text-gray-600 focus:border-gray-400 focus:outline-none focus:ring-0",
        className
      )}
      ref={ref}
      {...props} />
  );
})
Input.displayName = "Input"

export { Input }
