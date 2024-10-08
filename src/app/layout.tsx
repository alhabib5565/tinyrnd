import type { Metadata } from "next";
import "./globals.css";
import { cn, mulish } from "@/lib/utils";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import ReactProvider from "@/providers/ReactProvider";

export const metadata: Metadata = {
  title: "Tinyrnd App",
  description: "Generated by Tinyrnd app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(mulish.className, "text-[#1f2732]")}>
        <ReactProvider>
          <Toaster /> {children}
        </ReactProvider>
      </body>
    </html>
  );
}
