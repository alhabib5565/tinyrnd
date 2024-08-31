import Container from "@/components/shared/Container";
import PageTopSection from "@/components/shared/navbar/PageTopSection";
import { formatDateWithIndex } from "@/lib/utils";
import { blogData } from "@/staticData/blogData";
import { Calendar, ChevronRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <PageTopSection />
      <div className="py-[70px] lg:py-32 bg-[#F8F8F8]">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData.map((blog, index) => (
            <div key={index}>
              <div className="relative image-hover-effect overflow-hidden">
                <Image
                  style={{ width: "100%" }}
                  width={300}
                  height={200}
                  alt={blog.title}
                  src={blog.image}
                  className="rounded-t-md"
                />
                <p className="text-sm text-center font-[700] text-white absolute top-0 left-10 px-5 py-2 bg-primary rounded-b-md">
                  {blog.category}
                </p>
              </div>
              <div className="p-6 bg-white">
                <p className="flex gap-2 items-center text-primary mb-2">
                  {formatDateWithIndex(index)}
                </p>

                <Link
                  href="#"
                  className="font-[800] tracking-[-0.2px] text-2xl hover:text-primary duration-200 transition-colors"
                >
                  {blog.title}
                </Link>
              </div>
              <hr />
              <div className="flex justify-between items-center py-3 px-6 text-[#42545e]  bg-white">
                <Link
                  href="#"
                  className="font-bold hover:text-primary duration-200 transition-all"
                >
                  Read More
                </Link>
                <Link
                  href="#"
                  className="font-bold hover:text-primary duration-200 transition-all"
                >
                  <ChevronRight />
                </Link>
              </div>
            </div>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default page;
