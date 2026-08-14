import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Note Board",
  description: "Read-only list of saved notes"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
