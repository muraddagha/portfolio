import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MouseLight from "@/components/MouseLight";
import Aside from "@/components/Aside";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Murad Aghakishiyev",
  description: "Murad's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900`}>

        <div>
          <div className="relative">
            <MouseLight />

            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
              <div className="lg:flex lg:justify-between lg:gap-4">
                <Aside />
                <main id="content" className=" pt-12 lg:w-1/2 lg:py-24">
                  {children}
                  <Footer />
                </main>
              </div>
            </div>

          </div>
        </div>
      </body>
    </html>
  );
}
