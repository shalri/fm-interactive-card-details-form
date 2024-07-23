import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { CardProvider } from "@/contexts/CardContext";
import Header from "@/components/Header";

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
        //   className={`${spacegrotesk.className} flex min-h-screen flex-col scroll-smooth bg-[url(/images/bg-main-mobile.png)] bg-contain bg-no-repeat text-[18px] antialiased sm:w-full sm:items-center sm:justify-center sm:bg-[url(/images/bg-main-desktop.png)]`}
        //
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
