import Container from "@/components/shared/Container";
import Image from "next/image";
import React from "react";
import about1 from "../../../assets/who-we-are/about-1.jpg";
import about2 from "../../../assets/who-we-are/about2.jpg";
import about3 from "../../../assets/who-we-are/about3.jpg";
import signature from "../../../assets/who-we-are/signature-2.png";

//company logo
import companyLogo5 from "../../../assets/who-we-are/compnay-logo5.png";
import companyLogo6 from "../../../assets/who-we-are/company-logo6.png";
import companyLogo7 from "../../../assets/who-we-are/company-logo7.png";
import companyLogo8 from "../../../assets/who-we-are/company-logo8.png";

import cto from "../../../assets/who-we-are/cto.jpg";

import SectionHeader from "@/components/shared/SectionHeader";
import { Check, Play } from "lucide-react";
import Marquee from "react-fast-marquee";

const WhoWeAre = () => {
  return (
    <div className="py-[70px] lg:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-7 items-center gap-10 pb-[70px] lg:pb-32">
          <div className="col-span-1 lg:col-span-3 grid grid-cols-2 gap-6 relative">
            <div className="image-hover-effect relative col-span-2 h-[285px] rounded-lg overflow-hidden">
              <Image
                style={{ height: "100%", width: "100%" }}
                width={350}
                height={250}
                alt=""
                src={about1}
              />
            </div>
            <div className="image-hover-effect relative col-span-1 h-[285px] rounded-lg overflow-hidden">
              <Image
                style={{ height: "100%", width: "100%" }}
                width={200}
                height={250}
                alt=""
                src={about2}
              />
            </div>
            <div className="image-hover-effect relative col-span-1 h-[285px] rounded-lg overflow-hidden">
              <Image
                style={{ height: "100%", width: "100%" }}
                width={200}
                height={250}
                alt=""
                src={about3}
              />
            </div>
            <div className="bg-primary rounded-lg px-8 py-5 absolute left-5 bottom-5 z-10 flex items-center gap-2">
              <p className="text-lg font-semibold text-white">
                10+ Years of Experience
              </p>{" "}
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-black bg-opacity-20 grid place-items-center"
              >
                <Play size={15} color="white" />
              </a>
            </div>
          </div>
          <div className="lg:pl-14 col-span-1 lg:col-span-4">
            <SectionHeader
              className="text-left"
              simpleText="Who We Are"
              boldText="We offer the best design and development services!
"
            />
            <p className="text-[16px] text-[#42545e] font-medium mt-4 group-hover:text-white duration-200 transition-all">
              Our objective is to offer a high-quality service and a dependable
              source of income to our investors while simultaneously minimizing
              any potential risks and automating and simplifying the
              relationships.
            </p>
            <div className="flex flex-col md:flex-row md:items-center pt-16 gap-8">
              <div className="bg-white shadow-md py-9 pl-12 pr-8 border-t-2 border-primary relative">
                <Image alt="" src={signature} />
                <h3 className="text-[1.1rem] font-[800] mt-5 ">MD Al-Habib</h3>
                <p className="text-[16px] text-[#42545e] font-[400] mt-2 group-hover:text-white duration-200 transition-all">
                  CTO, Tiny R&D
                </p>
                <Image
                  className="absolute ml-10 md:ml-0 top-10 -left-10 rounded-full"
                  alt=""
                  src={cto}
                />
              </div>
              <ul className="space-y-4">
                <li
                  className="tracking-[0.8px] flex gap-2 items-center text-[#090d2] text-[16px] font-semibold"
                  data-wow-delay="200ms"
                >
                  <Check className="text-primary" size={20} /> Provide Web
                  Design &amp; Development
                </li>
                <li
                  className="tracking-[0.8px] flex gap-2 items-center text-[#090d2] text-[16px] font-semibold"
                  data-wow-delay="300ms"
                >
                  <Check className="text-primary" size={20} /> We Provide Logo
                  Design &amp; Copywriting
                </li>
                <li
                  className="tracking-[0.8px] flex gap-2 items-center text-[#090d2] text-[16px] font-semibold"
                  data-wow-delay="400ms"
                >
                  <Check className="text-primary" size={20} /> Best Website
                  Support &amp; Consultations
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />

        <div className="pt-[70px] lg:pt-32">
          <Marquee>
            <div className="w-[300px]">
              <Image height={60} width={180} src={companyLogo5} alt="" />
            </div>
            <div className="w-[300px]">
              <Image height={60} width={180} src={companyLogo6} alt="" />
            </div>
            <div className="w-[300px]">
              <Image height={60} width={180} src={companyLogo7} alt="" />
            </div>
            <div className="w-[300px]">
              <Image height={60} width={180} src={companyLogo5} alt="" />
            </div>
            <div className="w-[300px]">
              <Image height={60} width={180} src={companyLogo8} alt="" />
            </div>
          </Marquee>
        </div>
      </Container>
    </div>
  );
};

export default WhoWeAre;
