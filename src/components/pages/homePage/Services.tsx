import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import React from "react";
import icon1 from "../../../assets/service-icon/icon1.png";
import icon2 from "../../../assets/service-icon/icon2.png";
import icon3 from "../../../assets/service-icon/icon3.png";
import icon4 from "../../../assets/service-icon/icon4.png";
import icon5 from "../../../assets/service-icon/icon5.png";
import icon6 from "../../../assets/service-icon/icon6.png";
import cIcon1 from "../../../assets/service-icon/c-icon-1.png";
import cIcon2 from "../../../assets/service-icon/c-icon-2.png";
import cIcon3 from "../../../assets/service-icon/c-icon-3.png";
import cIcon4 from "../../../assets/service-icon/c-icon-4.png";
import cIcon5 from "../../../assets/service-icon/c-icon-5.png";
import cIcon6 from "../../../assets/service-icon/c-icon-6.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const serviceData = [
  {
    name: "Project Management Service",
    cIcon: cIcon1,
    icon: icon1,
    image:
      "https://flywebwp.websitelayout.net/wp-content/uploads/2024/02/service-10.jpg",
    description:
      "As a certified project management company, we specialize inguiding technological",
  },
  {
    name: "Full Stake Development",
    cIcon: cIcon2,
    icon: icon2,
    image:
      "https://flywebwp.websitelayout.net/wp-content/uploads/2024/02/service-11.jpg",
    description:
      "We provide complete Full Stack Development services, offering end-to-end solutions designed to meet your specific business needs.",
  },
  {
    name: "Get MVP in 2 month",
    cIcon: cIcon3,
    icon: icon3,
    image:
      "https://flywebwp.websitelayout.net/wp-content/uploads/2024/02/service-12.jpg",
    description:
      "Our streamlined approach starts with comprehensive analytics—analyzing your competitors, defining your target audience",
  },
  {
    name: "Outstaffing developers",
    cIcon: cIcon4,
    icon: icon4,
    image:
      "https://flywebwp.websitelayout.net/wp-content/uploads/2024/02/service-13.jpg",
    description:
      "We offers top-tier Outstaffing services, providing you with highly skilled developers to strengthen your in-house team.",
  },
  {
    name: "UI & UX Design",
    cIcon: cIcon5,
    icon: icon5,
    image:
      "https://flywebwp.websitelayout.net/wp-content/uploads/2024/02/service-14.jpg",
    description:
      "At Tiny R&D, we specialize in creating intuitive and visually captivating UI & UX designs that elevate user experiences.",
  },
  {
    name: "Mobile App Development",
    cIcon: cIcon6,
    icon: icon6,
    image:
      "https://flywebwp.websitelayout.net/wp-content/uploads/2024/02/service-14.jpg",
    description:
      "We offer end-to-end Mobile App Development services, transforming your ideas into",
  },
];

const Services = () => {
  return (
    <div className="py-32 bg-[#F8F9FA]">
      <Container>
        <SectionHeader
          simpleText="What We Do"
          boldText="Services That Help You Grow."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="relative h-[365px] group border-b-2 border-primary bg-cover bg-center w-full"
              style={{
                backgroundImage: `url(${service.image})`,
              }}
            >
              <div className="absolute inset-0 p-10 pt-7 bg-white hover:bg-black hover:bg-opacity-70 transition-all duration-200">
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

                <h3 className="font-bold capitalize text-[1.6rem] text-[#1f2732] mb-4 group-hover:text-white duration-200 transition-all">
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
