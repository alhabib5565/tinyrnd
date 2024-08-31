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
        <div className="h-[68px] bg-gray-100"></div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
