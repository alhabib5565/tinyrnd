import SectionHeader from "@/components/shared/SectionHeader";
import React from "react";
import img1 from "../../../assets/testimonial/img1.jpg";
import img2 from "../../../assets/testimonial/img2.jpg";
import img3 from "../../../assets/testimonial/img3.jpg";
import Container from "@/components/shared/Container";
import Image from "next/image";
import { Quote } from "lucide-react";
import Marquee from "react-fast-marquee";

const testimonialsData = [
  {
    image: img1,
    name: "Zachary Holden",
    designation: "CEO & Founder",
    text: `We've used web design agency for the last five years. We can't understand how we've been living without web design agency. Thank You!`,
  },
  {
    image: img2,
    name: "Daniel Johann",
    designation: "Satisfied customers",
    text: `I am so pleased with this product. Absolutely wonderful! You won't regret it. It's really wonderful. Definitely worth the investment.`,
  },
  {
    image: img3,
    name: "Alannah Jeffcott",
    designation: "Business Consultant",
    text: `I'd be lost without web design agency. Web design agency is the most valuable business resource we have EVER purchased.`,
  },
];

const Testimonials = () => {
  return (
    <div className="pt-[70px] lg:pt-32 bg-[#F8F9FA]">
      <SectionHeader
        simpleText="Our Testimonials"
        boldText="What They’re Saying?"
      />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {testimonialsData.map((testimonial, index) => (
            <div key={index}>
              <div className="flex gap-4 ">
                <Image
                  height={140}
                  width={100}
                  alt=""
                  className="rounded-md"
                  src={testimonial.image}
                />
                <div className="pt-4">
                  <h3 className="text-lg font-bold ">{testimonial.name}</h3>
                  <p className="tracking-[0.8px] flex gap-2 items-center text-[#090d2] text-[16px]">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
              <div className=" p-4 pt-8 pl-6 bg-white ml-6 -mt-8 relative rounded-md rounded-tl-none text-lg border-b-2 border-primary">
                <Quote
                  className="rotate-180 text-primary absolute right-5 -top-5"
                  size={40}
                />
                <span
                  className="h-7 w-7 bg-white absolute -top-[25px] left-0"
                  style={{
                    clipPath: "polygon(0 0, 0 100%, 100% 100%)",
                  }}
                ></span>
                {testimonial.text}
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Marquee speed={100}>
        <div className="bg-primary py-8 mt-[70px] lg:mt-32 flex text-3xl md:text-5xl lg:text-7xl text-white">
          <h4 className="font-[800]">
            Design &amp; Branding — Web Development — Product Design —
          </h4>

          <h4 className="font-[800]">
            Mobile Application — Web Application — SEO Optimization -
          </h4>
        </div>
      </Marquee>
    </div>
  );
};

export default Testimonials;
