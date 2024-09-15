"use client";
import React, { useState } from "react";
import Container from "../Container";
import Image from "next/image";
import navLogo from "../../../assets/logo/nav-logo.png";
import Link from "next/link";
import DropDownNavItem from "./DropDownNavItem";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGetAllMainMenuQuery as useGetAllNavItems } from "@/redux/api/main.menu.api";
import { TNavItem } from "@/constant/navitems";

const Navbar = () => {
  const { data, isLoading } = useGetAllNavItems({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (index: number) => {
    setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));
  };

  if (isLoading) {
    return <div className="h-20 bg-gray-300 animate-ping"></div>;
  }
  const navItems = data?.data as TNavItem[];
  return (
    <div className="bg-white shadow-lg">
      <Container>
        <nav className="flex justify-between items-center h-[70px]">
          <Image alt="Logo" src={navLogo} width={120} height={44} />

          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-black">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:flex items-center lg:gap-6 absolute lg:relative top-[70px] left-0 lg:top-0 w-full lg:w-auto bg-white lg:bg-transparent z-10 shadow-lg lg:shadow-none`}
          >
            {navItems.map((item, index) => (
              <div key={index} className="w-full lg:w-auto">
                {item?.dropdown && item.dropdown.length > 0 ? (
                  <DropDownNavItem
                    item={item}
                    isOpen={activeDropdown === index}
                    onDropdownToggle={() => handleDropdownToggle(index)}
                  />
                ) : (
                  <Link
                    className="block py-5 px-2 cursor-pointer uppercase text-sm font-extrabold tracking-[0.8px] hover:text-primary duration-500 transition-colors"
                    href={item.URL}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <Button className=" hidden lg:flex text-[17px] font-bold px-6 py-4 rounded-none hover:bg-black  transition-colors duration-300 uppercase">
            <Link href="#" className="">
              <span>Request A Demo</span>
            </Link>
          </Button>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
