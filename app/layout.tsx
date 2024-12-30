import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Northway Pharmaceuticals",
  description: "Providing quality healthcare solutions to the community.",
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
