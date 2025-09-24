import * as React from "react";
import clsx from "clsx";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={clsx("rounded-xl border bg-white", className)}>{children}</div>;
}
export function CardContent({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={clsx("p-4", className)}>{children}</div>;
}
