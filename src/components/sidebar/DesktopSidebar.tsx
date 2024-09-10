"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../assets/logo/nav-logo.png";
import { sidebardItems } from "@/constant/sidebarItems";
import SidebarDropdownItem from "./SidebarDropdownItem";
import SingleSidebarItem from "./SingleSidebarItem";

const DesktopSidebar = () => {
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

      <div className="space-y-2">
        {sidebardItems.map((item, index) => {
          return item.nestedItems && item.nestedItems.length > 0 ? (
            <SidebarDropdownItem item={item} key={index} />
          ) : (
            <SingleSidebarItem key={index} item={item} />
          );
        })}
      </div>
    </div>
  );
};

export default DesktopSidebar;
