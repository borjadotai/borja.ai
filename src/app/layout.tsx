import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import ThemeSwitch from "@/components/ThemeSwitcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Borja Leiva",
  description: "Product Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <main className="w-full flex min-h-screen flex-col items-center py-8 bg-white dark:bg-black-primary">
            <ThemeSwitch />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
