import Container from "@/components/shared/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import image from "../../../assets/who-we-are/extra-sec-img.jpg";
import Image from "next/image";

//extra section
const WebSolutions = () => {
  return (
    <div>
      <div
        className="relative h-[572px] bg-cover bg-center w-full"
        style={{
          backgroundImage: `url(https://tinyrnd.com/wp-content/uploads/2023/09/bg-01.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-[#1F2732] bg-opacity-70">
          <div className="pt-[70px] lg:pt-32 text-center mx-auto space-y-5 max-w-[800px]">
            <span className="smple-tex text-[15px] font-bold pb-3 mb-3 uppercase text-primary relative">
              Who We Are
            </span>
            <h2 className="text-[2.2rem] font-extrabold text-white tracking-[-0.2px]">
              Web solutions allows your business to increase productivity
            </h2>
          </div>
        </div>
      </div>
      <Container className="flex relative flex-col lg:flex-row gap-6 -mt-60">
        <div className="flex-1 bg-[#f8f8f8] p-12 rounded-[17px]">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="bg-white px-5 py">
              <AccordionTrigger className="text-lg text-left text-[#42545e] hover:no-underline hover:text-primary font-bold">
                1. What services does Tiny R&D offer?
              </AccordionTrigger>
              <AccordionContent className="text-lg p-6 pt-0">
                Tiny R&D specializes in MVP development, project management,
                full-stack development, UI/UX design, mobile app development,
                and outstaffing developers. Our goal is to deliver high-quality
                solutions quickly and efficiently, tailored to meet your
                specific needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-white px-5 py">
              <AccordionTrigger className="text-lg text-left text-[#42545e] hover:no-underline hover:text-primary font-bold">
                2. How long does it take to develop an MVP?
              </AccordionTrigger>
              <AccordionContent className="text-lg p-6 pt-0">
                We typically deliver MVPs within 2 to 3 months, depending on the
                complexity and requirements of the project. Our streamlined
                process ensures that you receive a fully functional product
                quickly, allowing you to enter the market with confidence.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-white px-5 py">
              <AccordionTrigger className="text-lg text-left text-[#42545e] hover:no-underline hover:text-primary font-bold">
                3. Can I customize the services according to my project needs?
              </AccordionTrigger>
              <AccordionContent className="text-lg p-6 pt-0">
                Absolutely! We understand that every project is unique, and we
                offer flexible service packages that can be tailored to fit your
                specific requirements. Whether you need a full-stack development
                team or just a few key features, we can adjust our offerings to
                suit your needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="bg-white px-5 py">
              <AccordionTrigger className="text-lg text-left text-[#42545e] hover:no-underline hover:text-primary font-bold">
                4. How do I get started with Tiny R&D?
              </AccordionTrigger>
              <AccordionContent className="text-lg p-6 pt-0">
                Getting started is easy! Simply contact us through our website
                or apply for a consultation. We will discuss your project
                requirements, outline a plan, and provide you with a detailed
                proposal to kick off your MVP development journey.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="flex-1 image-hover-effect rounded-[17px] relative overflow-hidden">
          <Image alt="" src={image} />
        </div>
      </Container>
    </div>
  );
};

export default WebSolutions;
