import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import React from "react";
import aboutImg1 from "../../../assets/about-us/about-us-1.jpg";
import aboutImg2 from "../../../assets/about-us/about-us-2.jpg";
import avater from "../../../assets/about-us/about-us-avater.jpg";
import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="py-[70px] lg:py-32 ">
      <Container>
        <div className="flex items-center gap-10 pb-[70px] lg:pb-32">
          <div className="flex flex-1 gap-6 relative">
            <div className="image-hover-effect relative flex-1 rounded-lg overflow-hidden">
              <Image
                style={{ height: "100%", width: "100%" }}
                width={200}
                height={250}
                alt=""
                src={aboutImg1}
              />
            </div>
            <div className="image-hover-effect relative rounded-lg flex-1 overflow-hidden">
              <Image
                style={{ height: "100%", width: "100%" }}
                width={200}
                height={250}
                alt=""
                src={aboutImg2}
              />
            </div>
            <div className="bg-primary rounded-lg px-8 py-5 absolute  top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10">
              <div className="flex gap-4 items-center">
                <Image className="rounded-full" alt=" " src={avater} />
                <p className="text-lg font-semibold text-white">Wilcoxon</p>
              </div>
              <p className="text-xl py-4 font-bold text-white">
                Fsat & Easy <br /> Process
              </p>
              <span className="w-16 p-0.5 bg-white block"></span>
            </div>
          </div>
          <div className="flex-1">
            <SectionHeader
              className="text-left"
              simpleText="Who We Are"
              boldText="We are award winning web development agency."
            />
            <p className="text-[16px] text-[#42545e] font-medium mt-4 group-hover:text-white duration-200 transition-all">
              Our objective is to offer a high-quality service and a dependable
              source of income to our investors while simultaneously minimizing
              any potential risks and automating and simplifying the
              relationships.
            </p>

            {/* list */}
            <ul className="space-y-4 pt-16">
              <li className="tracking-[0.8px] flex gap-2 items-center text-[#090d2] text-[16px]">
                <Check className="text-primary" size={20} /> Remarkable to
                receive such a personalized touch.
              </li>
              <li className="tracking-[0.8px] flex gap-2 items-center text-[#090d2] text-[16px]">
                <Check className="text-primary" size={20} /> Duis aute irure
                dolor in reprehenderit in voluptate.
              </li>
              <li className="tracking-[0.8px] flex gap-2 items-center text-[#090d2] text-[16px]">
                <Check className="text-primary" size={20} /> I did not escape
                without a fight. Velit esse cillum dolore.
              </li>
            </ul>

            {/* call and button */}
            <div className="flex justify-between items-center pt-16 ">
              <div className="flex gap-4 items-center ">
                <div className="h-14 w-14 bg-black text-white rounded-md grid place-items-center">
                  <Phone />
                </div>
                <div>
                  <h3 className="text-lg font-bold ">Call Anytime</h3>
                  <p className="tracking-[0.8px] flex gap-2 items-center text-[#090d2] text-[16px]">
                    +8801405468432
                  </p>
                </div>
              </div>
              <Button className="text-[17px] font-bold px-8 py-4 rounded-none hover:bg-black hover:text-primary transition-colors duration-300 uppercase">
                <Link href="#" className="">
                  <span>Learn More</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
