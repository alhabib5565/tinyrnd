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

const blogData = [
  {
    image: "https://tinyrnd.com/wp-content/uploads/2023/09/blog-01.jpg",
    title: "The Reasons Why We Love Web Design Agency",
  },
  {
    image: "https://tinyrnd.com/wp-content/uploads/2023/09/blog-02.jpg",
    title: "How To Own Web Design Agency For Free",
  },
  {
    image: "https://tinyrnd.com/wp-content/uploads/2023/09/blog-03.jpg",
    title: "Five Latest Developments In Web Agency",
  },
  {
    image: "https://tinyrnd.com/wp-content/uploads/2023/09/blog-04.jpg",
    title: "Web Design Agency Is So Famous, But Why?",
  },
  {
    image: "https://tinyrnd.com/wp-content/uploads/2023/09/blog-05.jpg",
    title: "5 Difficult Things About Web Design Agency",
  },
  {
    image: "https://tinyrnd.com/wp-content/uploads/2023/09/blog-06.jpg",
    title: "Here’s What No One Tells You About Web Agency",
  },
];

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

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData.map((blog, index) => (
            <div key={index}>
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
          ))}
        </div> */}
      </Container>
    </div>
  );
};

export default Blogs;
