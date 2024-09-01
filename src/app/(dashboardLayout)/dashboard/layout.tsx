"use client";
import dynamic from "next/dynamic";
import React from "react";
const Sidebar = dynamic(() => import("@/components/sidebar/Sidebar"), {
  ssr: false,
});

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Sidebar />
      <div className="lg:ml-[300px]">
        <div className="h-[68px] bg-white px-4 flex items-center text-lg pl-20 lg:pl-0">
          {" "}
          Wellcome to tinyrnd
        </div>
        <div className="p-4 bg-gray-100 min-h-[calc(100vh-68px)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
