import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { formatDateWithIndex } from "@/lib/utils";
import { Calendar, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { blogData } from "@/staticData/blogData";

const Blogs = () => {
  return (
    <div className="py-[70px] lg:py-32">
      <SectionHeader
        simpleText="Our Blogs"
        boldText="Latest News From Our Blog"
      />
      <Container className="mt-6">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full cursor-grab active:cursor-grabbing"
        >
          <CarouselContent>
            {blogData.map((blog, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div>
                  <Image
                    style={{ width: "100%" }}
                    width={300}
                    height={200}
                    alt={blog.title}
                    src={blog.image}
                    className="rounded-t-md"
                  />
                  <div className="p-6 bg-[#F9F9F9]">
                    <div className="flex gap-6 mb-4 items-center">
                      <p className="flex gap-2 items-center">
                        <Calendar /> {formatDateWithIndex(index)}
                      </p>
                      <span className="p-1 bg-primary h-1 rounded-full"></span>
                      <p className="flex gap-2 items-center">
                        <MessageCircle /> <span>0</span>
                      </p>
                    </div>
                    <Link
                      href="#"
                      className="font-[800] tracking-[-0.2px] text-2xl hover:text-primary duration-200 transition-colors"
                    >
                      {blog.title}
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="z-50 absolute left-5" />
          <CarouselNext className="z-50 absolute right-5" />
        </Carousel>
      </Container>
    </div>
  );
};

export default Blogs;
