import React from "react";
import Container from "./Container";
import Image from "next/image";
import logo from "../../assets/logo/footer-logo.png";
import {
  Facebook,
  Linkedin,
  LocateIcon,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-[#1F2732] pt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* logo icon */}
          <div>
            {" "}
            <div className="max-w-[180px]">
              <div className="py-2 bg-white flex justify-center">
                <Image alt="" src={logo} height={22} width={118} />
              </div>
              <div className="flex gap-2 mt-4">
                <Link
                  href="#"
                  className="h-10 w-10 grid place-content-center bg-[#FFFFFF1A] hover:bg-primary duration-200 transition-colors text-white"
                >
                  <Facebook />
                </Link>
                <Link
                  href="#"
                  className="h-10 w-10 grid place-content-center bg-[#FFFFFF1A] hover:bg-primary duration-200 transition-colors text-white"
                >
                  <Twitter />
                </Link>
                <Link
                  href="#"
                  className="h-10 w-10 grid place-content-center bg-[#FFFFFF1A] hover:bg-primary duration-200 transition-colors text-white"
                >
                  <Youtube />
                </Link>
                <Link
                  href="#"
                  className="h-10 w-10 grid place-content-center bg-[#FFFFFF1A] hover:bg-primary duration-200 transition-colors text-white"
                >
                  <Linkedin />
                </Link>
              </div>
            </div>
          </div>

          {/* contact */}
          <div>
            <h3 className="text-white uppercase tracking-[-0.2px] text-2xl mb-6 font-[800]">
              Contact us
            </h3>
            <div className="space-y-6">
              <p className="flex gap-2 items-center">
                <MapPin className="text-primary" size={30} />{" "}
                <span className="text-white text-lg">
                  Aftab Nagar Rampura Dhaka.
                </span>
              </p>

              <p className="flex gap-2 items-center">
                <Phone className="text-primary" size={30} />{" "}
                <span className="text-white text-lg">(+880) 01405468432</span>
              </p>

              <p className="flex gap-2 items-center">
                <Mail className="text-primary" size={30} />{" "}
                <span className="text-white text-lg">info@tinyrnd.com</span>
              </p>
            </div>
          </div>

          {/* newslater */}
          <div>
            <h3 className="text-white uppercase tracking-[-0.2px] text-2xl mb-6 font-[800]">
              Newsletter
            </h3>
            <p className="text-white text-lg mb-2">
              Enter your e-mail to get the latest news.
            </p>

            <input
              type="text"
              className="w-full h-10 bg-[#FFFFFF1A] placeholder:text-slate-400 text-white text-lg   px-3 py-2 transition duration-300 ease focus:outline-none border border-transparent focus:border-primary"
              placeholder="Subscribe with us"
            />
          </div>
        </div>
      </Container>
      <hr className="mt-20" />
      <div className=" py-10 text-center text-white">
        <p className="text-lg">
          © {year} All rights reserved by{" "}
          <span className="text-primary">Tiny R&D</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
