import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import BackgroundImage from "@/components/BackgroundImage";
import Providers from "./Providers";
import "./globals.css";

const bricolage_grotesque_init = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumina",
  description: "Refine your text with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bricolage_grotesque_init.className} antialiased h-screen`}
      >
        <Providers>
          <BackgroundImage />
          {children}
        </Providers>
      </body>
    </html>
  );
}
