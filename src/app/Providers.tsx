"use client";
import ResultProvider from "@/context/ResultContext";
import TweetProvider from "@/context/TweetContext";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <TweetProvider>
        <ResultProvider>
          <Toaster />
          {children}
        </ResultProvider>
      </TweetProvider>
    </ThemeProvider>
  );
}
