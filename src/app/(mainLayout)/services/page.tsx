import PageTopSection from "@/components/shared/navbar/PageTopSection";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { serviceData } from "@/staticData/serviceData";

const ServicesPage = () => {
  return (
    <div>
      <PageTopSection />
      <div className="py-[70px] lg:py-32 bg-[#F8F9FA]">
        <Container>
          <SectionHeader
            simpleText="What We Do"
            boldText="Services That Help You Grow."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-6">
            {serviceData.map((service, index) => (
              <div
                key={index}
                className="relative h-[400px] group bg-cover rounded-md bg-center w-full"
                style={{
                  backgroundImage: `url(${service.image})`,
                }}
              >
                <div className="absolute inset-0 p-8 md:p-10 pt-7 bg-[#1F27328C] rounded-md bg-opacity-50 group-hover:bg-white group-hover:bg-opacity-100 transition-all duration-200">
                  <div className="mb-4 w-[75px] -mt-16 h-[75px] rounded-full bg-primary group-hover:bg-[#1f2732] duration-200 transition-colors grid place-items-center">
                    <Image
                      className=""
                      alt=""
                      height={40}
                      width={40}
                      src={service.icon}
                    />
                  </div>

                  <h3 className="font-[800] capitalize text-2xl md:text-4xl group-hover:text-[#1f2732] mb-4 text-white duration-200 transition-all">
                    {service.name}
                  </h3>
                  <div className=" overflow-hidden">
                    <div className="translate-y-[80%] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500 transition-all">
                      <p className=" text-lg text-[#1f2732] mb-4 ">
                        {service.description.split(" ").slice(0, 12).join(" ")}
                      </p>
                      <Button variant={"destructive"}>
                        <Link href="#">READ MORE</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ServicesPage;
