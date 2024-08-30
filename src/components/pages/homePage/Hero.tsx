import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const heroData = [
  {
    image:
      "https://flywebwp.websitelayout.net/wp-content/uploads/2024/02/slide-10.jpg",
    title: "Get MVP in 2 Months",
  },
  {
    image:
      "https://flywebwp.websitelayout.net/wp-content/uploads/2024/02/slide-09.jpg",
    title: "Professional Project Management ",
  },
  {
    image:
      "https://flywebwp.websitelayout.net/wp-content/uploads/2024/02/slide-11.jpg",
    title: "Build your professional Website ",
  },
];

const Hero = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full cursor-grab active:cursor-grabbing"
    >
      <CarouselContent>
        {heroData.map((item, index) => (
          <CarouselItem key={index}>
            <div
              className="relative min-h-screen bg-cover bg-center w-full"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-70">
                <div className="grid justify-center items-center min-h-screen w-full">
                  <div className="w-[75%] text-center mx-auto">
                    <span className="text-primary text-uppercase small tracking-[4px] block pb-4 font-weight-700">
                      Welcome to Tiny R&amp;D
                    </span>

                    <h1 className="text-white font-extrabold text-4xl md:text-6xl lg:text-8xl uppercase tracking-[-3px] mb-[2rem]">
                      {item.title}
                    </h1>

                    <Button className="text-[17px] font-bold px-8 py-4 rounded-none hover:bg-white hover:text-black transition-colors duration-300 uppercase">
                      <Link href="#" className="">
                        <span>Learn More</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="z-50 absolute left-5" />
      <CarouselNext className="z-50 absolute right-5" />
    </Carousel>
  );
};

export default Hero;
