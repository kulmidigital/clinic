import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Northway Pharma - Coming Soon",
  description: "We're working hard to bring you a better pharmacy experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
