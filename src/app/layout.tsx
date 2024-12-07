"use client";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "./_components/themeprovider";
import Logo from "./_components/Logo";
import Navbar from "./_components/Navbar";
import { usePathname } from "next/navigation";
import Searchbar from "./_components/Searchbar";
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isSignInPage = pathname === "/Signup";
  const shouldHideNavbar = isHomePage || isSignInPage;
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen flex justify-center items-center ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Logo />
          <Searchbar />
          {/* only renders navbar when signed in */}
          {!shouldHideNavbar && <Navbar />}
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
