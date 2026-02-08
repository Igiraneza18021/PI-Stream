import Header from "@/components/navbar/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  verification: {
    google: 'LNIHjq83_6ghxpoOyNT2MpMlnr9ehcj-rUehGV1cM7M',
  },
  title: "Pifilms",
  description: "A films of Pima",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "app-bg-enhanced")}>
        <Header />
        {children}
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
