import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spacegrotesk = Space_Grotesk({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "次に(tsugini) | FScode",
  description: "A basic NextJS template for Frontend Mentor Challenges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spacegrotesk.className} flex min-h-screen flex-col scroll-smooth bg-[url(/images/bg-main-mobile.png)] bg-contain text-[18px] bg-no-repeat antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
