import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { CardProvider } from "@/contexts/CardContext";
import Header from "@/components/Header";

const spacegrotesk = Space_Grotesk({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Interactive Card Details Form | FScode",
  description: "Solution for the Interactive Card details challenge from Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spacegrotesk.className} relative flex min-h-screen flex-col scroll-smooth text-[18px] antialiased sm:w-full sm:items-center sm:justify-center`}
      >
        <div className="sm:relative sm:mx-auto sm:flex sm:w-full sm:max-w-[1080px] sm:items-center sm:justify-between sm:gap-x-[40px] sm:pr-12">
          <CardProvider>
            <Header />
            {children}
          </CardProvider>
        </div>
      </body>
    </html>
  );
}
