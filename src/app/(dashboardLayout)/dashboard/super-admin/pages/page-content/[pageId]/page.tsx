"use client";
import DashboardPageHeader from "@/components/dashboard/shared/DashboardPageHeader";
import Loading from "@/components/shared/Loading";
import { useGetSinglePageQuery } from "@/redux/api/pages.api";
import React from "react";

const PageContent = ({ params }: any) => {
  const { data, isLoading } = useGetSinglePageQuery({ id: params?.pageId });
  console.log(data, params);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <DashboardPageHeader
        pageName="Page Content"
        buttonText="Back"
        href="/dashboard/super-admin/pages/"
      />
      <div
        className="mt-10"
        dangerouslySetInnerHTML={{ __html: data?.data?.pageContent }}
      />
    </div>
  );
};

export default PageContent;
