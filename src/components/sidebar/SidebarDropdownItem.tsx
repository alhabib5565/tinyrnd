"use client";
import { TSidebarItemWithDropdown } from "@/types/sidebar.type";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SidebarDropdownItem = ({ item }: { item: TSidebarItemWithDropdown }) => {
  const pathName = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const handleDropdownOpen = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  return (
    <div className="relative">
      <Button
        asChild
        onClick={handleDropdownOpen}
        variant="ghost"
        className="capitalize text-lg"
      >
        <div className=" w-full flex justify-start gap-4 cursor-pointer">
          <item.icon size={20} />
          <span className="grow text-left"> {item?.name}</span>
          <ChevronDown
            className={cn({
              "rotate-180 duration-300 ": isDropdownOpen,
              "rotate-0 duration-300 ": !isDropdownOpen,
            })}
          />
        </div>
      </Button>
      {isDropdownOpen && (
        <div className="absolute w-full h-full top-[100%] left-0 ">
          {item.nestedItems?.map((dropdownItem, index) => (
            <Link
              //   className="block "
              key={index}
              href={dropdownItem?.href || ""}
            >
              <Button
                variant={
                  pathName === dropdownItem?.href ? "secondary" : "ghost"
                }
                className=" pl-8 w-full flex justify-start gap-4 capitalize text-lg"
              >
                <dropdownItem.icon size={20} />
                {dropdownItem?.name}
              </Button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarDropdownItem;
