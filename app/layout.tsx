import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Centered Relationship Coaching & Ministries",
  description: "Helping to Build Christ-Centered Relationships that Last.",
  openGraph: {
    title: "Centered Relationship Coaching & Ministries",
    description: "Helping to Build Christ-Centered Relationships that Last.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Centered Relationship Coaching & Ministries",
    description: "Helping to Build Christ-Centered Relationships that Last."
  },
  metadataBase: new URL("https://example.com") // TODO: replace with your live domain
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
