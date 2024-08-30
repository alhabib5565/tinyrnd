import { TNavItem } from "@/constant/navitems";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";

const DropDownNavItem = ({
  item,
  isOpen,
  onDropdownToggle,
}: {
  item: TNavItem;
  isOpen: boolean;
  onDropdownToggle: () => void;
}) => {
  return (
    <div className="relative">
      <div
        className="cursor-pointer flex items-center gap-2"
        onClick={onDropdownToggle} // Only toggle on click
      >
        <Link
          className="py-5 px-2 uppercase text-sm font-extrabold tracking-[0.8px] hover:text-primary duration-200 transition-colors flex gap-2 items-center"
          href={"#"}
        >
          {item.name}
          <ChevronDown
            className={`${
              isOpen ? "rotate-180" : ""
            } duration-200 transition-all`}
          />
        </Link>
      </div>
      {isOpen && (
        <div className="bg-white w-[300px] shadow-lg p-4 absolute left-0 top-[100%] flex flex-col gap-2 z-10">
          {item.dropdown?.map((subItem) => (
            <Link
              href={subItem.href}
              key={subItem.href}
              className="hover:text-primary duration-200 transition-colors"
            >
              {subItem.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownNavItem;
