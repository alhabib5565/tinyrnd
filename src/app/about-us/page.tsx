"use client";
import Container from "@/components/shared/Container";
import PageTopSection from "@/components/shared/navbar/PageTopSection";
import { cn, roboto } from "@/lib/utils";
import { serviceData } from "@/staticData/serviceData";
import Image from "next/image";
import React, { useMemo } from "react";
import img from "../../assets/about-us/about-page.jpg";
import { Button } from "@/components/ui/button";

const AboutUsPage = () => {
  const serviceNames = useMemo(() => {
    return serviceData.map((service) => service.name);
  }, []);

  return (
    <div>
      <PageTopSection />
      <div className="py-[60px] lg:py-28 bg-[#F8F8F8] px-4">
        <div className="max-w-[1140px] mx-auto flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-4">
            <h1
              className={cn(
                "text-3xl lg:text-4xl font-[700] text-primary",
                roboto.className
              )}
            >
              About Us - Tiny R&D
            </h1>
            <p className={cn("text-[16px] ")}>
              Welcome to Tiny R&D, your trusted partner in innovative software
              development, strategically located in Bangladesh and Dubai. We
              specialize in transforming your ideas into reality by delivering
              high-quality MVPs (Minimum Viable Products) in just two months,
              ensuring a swift market entry at a low cost without compromising
              on quality.
            </p>
            <p className={cn("text-[15px] ")}>
              At Tiny R&D, we pride ourselves on our commitment to excellence
              and efficiency. Our team comprises PMP-certified project managers,
              CSM professionals, and experts in agile methodologies, ensuring
              that every project is managed with precision, transparency, and
              flexibility. We believe in the power of agile principles to drive
              rapid, iterative development, allowing us to adapt to your needs
              and deliver results that exceed expectations.
            </p>
          </div>
          <div className="flex-1 space-y-4 grid justify-center">
            <h1
              className={cn(
                "text-3xl lg:text-4xl font-[700] text-primary",
                roboto.className
              )}
            >
              Our Services
            </h1>
            <div>
              {serviceNames.map((service, index) => (
                <p
                  className={cn("py-2 border-b-2 border-primary text-center", {
                    "border-none": index === serviceNames.length - 1,
                  })}
                  key={index}
                >
                  {service}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-[1140px] mx-auto flex flex-col lg:flex-row lg:items-center gap-8 mt-16 ">
          <div className="flex-1">
            <Image style={{ width: "100%", height: "100%" }} alt="" src={img} />
          </div>
          <div className="flex-1 space-y-4">
            <h2
              className={cn(
                "text-[45px] text-primary font-[800]",
                roboto.className
              )}
            >
              Join Us
            </h2>
            <p className="pb-4">
              At Tiny R&D, we are driven by a passion for technology and a
              commitment to our clients’ success. Whether you need a fully
              developed product or additional support for your in-house team, we
              are here to help you achieve your goals with efficiency and
              expertise. Let’s collaborate to bring your vision to life, one
              sprint at a time.
            </p>
            <Button className="text-lg">Contact</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
