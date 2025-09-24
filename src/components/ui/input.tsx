import * as React from "react";
import clsx from "clsx";

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={clsx("w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-black/10", className)} {...props} />;
}
