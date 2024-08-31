import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import { cn, mulish } from "@/lib/utils";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={cn(mulish.className, "text-[#1f2732]")}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
