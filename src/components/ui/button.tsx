import * as React from "react";
import clsx from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export function Button({ asChild, className, children, ...rest }: Props) {
  const base = clsx(
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition",
    className
  );
  if (asChild) return <span className={base}>{children}</span>;
  return <button className={base} {...rest}>{children}</button>;
}
