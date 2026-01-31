import type { Metadata } from "next";
import { Space_Grotesk, Teko } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "S'26 Dev Challenge",
  description: "youngje park's solution for S'26 dev challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${teko.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
