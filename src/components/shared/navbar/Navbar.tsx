"use client";
import React, { useState } from "react";
import Container from "../Container";
import Image from "next/image";
import navLogo from "../../../assets/logo/nav-logo.png";
import { navItems } from "@/constant/navitems";
import Link from "next/link";
import DropDownNavItem from "./DropDownNavItem";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (index: number) => {
    setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));
  };

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
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
