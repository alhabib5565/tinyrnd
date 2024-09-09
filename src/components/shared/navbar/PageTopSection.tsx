"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Container from "../Container";

const PageTopSection = () => {
  const pathName = usePathname();
  const splited = pathName.split("/");
  const pageName = splited[splited.length - 1].split("-").join(" ");
  console.log(splited[splited.length - 1], "path");
  return (
    <div
      className="relative h-[286px] bg-cover bg-center w-full"
      style={{
        backgroundImage: `url(https://tinyrnd.com/wp-content/uploads/2023/09/page-title.jpg)`,
      }}
    >
      <div className="absolute inset-0 bg-transparent bg-gradient-to-r from-transparent to-[#1F2732] to-10% opacity-60  flex flex-col justify-center">
        <Container>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-[800] text-white capitalize text-wrap mb-6">
            {pageName}
          </h1>
          <p className="flex items-center gap-4 text-white text-lg">
            <span>Home</span> <span className="w-5 h-0.5 bg-primary"></span>{" "}
            <span className="capitalize">{pageName}</span>
          </p>
        </Container>
      </div>
      ;
    </div>
  );
};

export default PageTopSection;
