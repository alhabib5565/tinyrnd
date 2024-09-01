"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../assets/logo/nav-logo.png";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";
import { usePathname } from "next/navigation";

const DesktopSidebar = () => {
  const pathName = usePathname();
  return (
    <div className=" w-[300px] fixed top-0 left-0 min-h-screen overflow-y-scroll">
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
      <Link href="/dashboard/contact-messages">
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
  );
};

export default DesktopSidebar;
