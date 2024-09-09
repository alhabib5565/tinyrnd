import Container from "@/components/shared/Container";
import PageTopSection from "@/components/shared/navbar/PageTopSection";
import { cn } from "@/lib/utils";
import { serviceDataWithDetails } from "@/staticData/serviceDataWithDetails";
import { Check, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type TParams = {
  params: { serviceName: string };
};
const ServiceDetailsPage = (params: TParams) => {
  const serviceInfo = serviceDataWithDetails.find((item) => {
    // console.log(item.serviceName, params?.params?.serviceName);
    return (
      item.serviceName.split(" ").join("-").toLowerCase() ===
      params?.params?.serviceName
    );
  });
  // console.log(serviceInfo);
  return (
    <div>
      <PageTopSection />
      <div className="py-[70px] lg:py-32">
        <Container>
          <div className="grid grid-cols-9 gap-12">
            {/* left side */}
            <div className="lg:col-span-3 col-span-9 bg-[#F8F9FA] p-6 rounded-md h-fit">
              <h3 className="text-2xl font-[800] mb-6">Main Services</h3>
              <div className="flex flex-col gap-4">
                {serviceDataWithDetails.map((item) => (
                  <Link
                    className={cn(
                      "bg-white py-[14px] pl-8 pr-5 rounded-md font-[600] hover:bg-[#1f2732] hover:text-white duration-300 transition-colors flex justify-between items-center",
                      {
                        "bg-[#1f2732] text-white":
                          item.serviceName
                            .split(" ")
                            .join("-")
                            .toLowerCase() === params?.params?.serviceName,
                      }
                    )}
                    key={item.serviceName}
                    href={item.serviceName.split(" ").join("-").toLowerCase()}
                  >
                    <span>{item.serviceName}</span>
                    <ChevronRight />
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 col-span-9">
              <div className="pb-12">
                <Image
                  className="rounded-lg"
                  style={{ width: "100%" }}
                  alt={serviceInfo?.serviceName || ""}
                  src={serviceInfo?.mainImage || ""}
                />
              </div>
              <h2 className="text-2xl lg:text-[40px] font-[800]">
                {serviceInfo?.serviceName}
              </h2>
              <p className="text-[16px] text-[#42545e] font-[600] pt-6">
                {serviceInfo?.tagline}
              </p>
              {serviceInfo?.overview
                .slice(0, serviceInfo?.overview.length - 1)
                .map((overview, index) => (
                  <p
                    key={index}
                    className="text-[17px] font-[400] pt-4 leading-8"
                  >
                    {overview}
                  </p>
                ))}

              {/* serviceHighlights */}
              <div className="pt-4">
                <h2 className="text-2xl font-[800]">
                  {serviceInfo?.serviceHighlights.title}
                </h2>
                {serviceInfo?.serviceHighlights.items.map((item, index) => (
                  <p
                    key={index}
                    className="text-[16px] font-[400] leading-8 flex items-center gap-4"
                  >
                    <span className="p-[3px] bg-black rounded-full"></span>{" "}
                    {item}
                  </p>
                ))}
              </div>

              {/* Solutions */}
              <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceInfo?.solutions.map((solution, index) => (
                  <div
                    className="bg-[#F8F9FA] flex gap-4 items-center"
                    key={index}
                  >
                    <Image
                      alt=""
                      src={solution.image}
                      width={120}
                      height={180}
                      style={{ height: "100%" }}
                    />

                    <div className="p-3">
                      <h3 className="text-xl font-[800] ">{solution.title}</h3>
                      <p className="text-[17px] font-[400] pt-2 leading-8">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* overview last pera */}
              <p className="text-[17px] font-[400] pt-8 leading-8">
                {serviceInfo?.overview[serviceInfo.overview.length - 1]}
              </p>

              {/* Why us */}
              <div className="pt-4">
                <h2 className="text-2xl font-[800]">
                  {serviceInfo?.whyUs.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {serviceInfo?.whyUs.points.map((item, index) => (
                    <p
                      key={index}
                      className="text-[16px] font-[400] leading-8 flex items-center gap-4"
                    >
                      <Check size={30} className="text-primary" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
