import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner";
import {Button} from "../components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Careerio - AI Career Coach",
  description:
    "Careerio is your AI-powered training platform designed to help you develop the right skills, ace interviews, and land your dream job with your own AI career guidance.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/*HEADER*/}
            <Header />

            {/*MAIN*/}
            <main className="min-h-screen">{children}</main>
            <Toaster position="bottom-right" richColors />
            {/*FOOTER*/}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Made with ❤️ by Swapnil</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
