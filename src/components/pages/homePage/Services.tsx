import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { serviceData } from "@/staticData/serviceData";

const Services = () => {
  return (
    <div className="py-[70px] lg:py-32 bg-[#F8F9FA]">
      <Container>
        <SectionHeader
          simpleText="What We Do"
          boldText="Services That Help You Grow."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="relative h-[365px] group border-b-2 border-primary bg-cover bg-center w-full"
              style={{
                backgroundImage: `url(${service.image})`,
              }}
            >
              <div className="absolute inset-0 p-8 md:p-10 pt-7 bg-white hover:bg-black hover:bg-opacity-70 transition-all duration-200">
                <div className="mb-4">
                  <Image
                    className="group-hover:hidden"
                    alt=""
                    height={60}
                    width={60}
                    src={service.cIcon}
                  />
                  <Image
                    className="group-hover:block hidden"
                    alt=""
                    height={60}
                    width={60}
                    src={service.icon}
                  />
                </div>

                <h3 className="font-bold capitalize text-lg md:text-2xl text-[#1f2732] mb-4 group-hover:text-white duration-200 transition-all">
                  {service.name}
                </h3>
                <p className=" text-lg text-[#1f2732] mb-4 group-hover:text-white duration-200 transition-all">
                  {service.description}
                </p>
                <Button variant={"destructive"}>
                  <Link href="#">READ MORE</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
