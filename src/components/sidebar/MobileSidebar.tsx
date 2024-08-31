"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../assets/logo/nav-logo.png";
import { Button } from "../ui/button";
import { Mail, MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileSidebar = () => {
  const pathName = usePathname();
  const [hide, setHide] = useState(true);
  const handleHide = () => {
    setHide((prev) => !prev);
  };
  return (
    <div className="relative">
      <Button
        variant={"outline"}
        onClick={handleHide}
        className="absolute top-4 left-5 z-50"
      >
        <MenuIcon className="text-black " />
      </Button>
      <div
        className={cn(
          " w-[300px] fixed top-0 left-0 min-h-screen overflow-y-scroll z-20 bg-white transition-all duration-200 ease-out",
          {
            "translate-x-[-100%]": hide,
          }
        )}
      >
        <Link href="/">
          <Image
            alt="logo"
            src={logo}
            width={180}
            height={400}
            className="mx-auto my-4 "
          />
        </Link>
        <hr className=" mb-6" />
        <Link onClick={handleHide} href="/dashboard/contact-messages">
          <Button
            variant={
              pathName === "/dashboard/contact-messages" ? "secondary" : "ghost"
            }
            className="w-full flex justify-start gap-4 capitalize text-lg"
          >
            <Mail size={20} />
            Contact Messages
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MobileSidebar;
