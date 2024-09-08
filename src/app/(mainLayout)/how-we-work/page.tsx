import Container from "@/components/shared/Container";
import PageTopSection from "@/components/shared/navbar/PageTopSection";
import SectionHeader from "@/components/shared/SectionHeader";
import processLineImg from "../../../assets/work process/process-line.png";

import React from "react";
import Image from "next/image";
import { howWeWorkData } from "@/staticData/howWeWorkdData";
import { cn } from "@/lib/utils";

const HowWeWorkPage = () => {
  return (
    <div>
      <PageTopSection />
      <Container className="py-12">
        <SectionHeader
          simpleText="Our History"
          boldText="Our Work Process – Tiny R&D"
        />
        <p className="text-lg font-[300]">
          At Tiny R&D, we follow a streamlined and agile work process designed
          to deliver your MVP efficiently and effectively. Our approach ensures
          that every project is handled carefully, from the initial concept to
          the final product. Here’s a glimpse into our work process:
        </p>
      </Container>
      <div className="bg-[#020101] py-[70px] lg:py-32">
        <Container className="relative">
          <div className="absolute top left-0">
            <Image alt="" src={processLineImg} />
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
            {howWeWorkData.map((item, index) => (
              <div className="text-center group " key={index}>
                <div className="relative mx-auto w-fit ">
                  <Image
                    height={170}
                    width={170}
                    className={cn(
                      "rounded-full  ",
                      {
                        "w-[238px] h-[238px] md:-mt-8": index % 2 !== 0,
                      },
                      {
                        "group-hover:scale-[1.4]  duration-500 transition-all origin-center group-hover:mb-8":
                          index % 2 === 0,
                      }
                    )}
                    alt=""
                    src={item.image}
                  />
                  <span
                    className={cn(
                      "absolute bottom-0 right-0  h-[50px] w-[50px] rounded-full bg-primary text-white grid place-items-center text-2xl font-[900]",
                      {
                        "group-hover:translate-y-[50%] group-hover:translate-x-[80%] duration-500 transition-all":
                          index % 2 === 0,
                      }
                    )}
                  >
                    0{index + 1}
                  </span>
                </div>
                <h2 className="text-[20px] font-[800] text-white py-4">
                  {item.title}
                </h2>
                <p className="text-lg font-[300] text-white w-[9] md:w-[80%] mx-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HowWeWorkPage;
