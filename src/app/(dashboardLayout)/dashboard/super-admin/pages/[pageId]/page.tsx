import EditPageForm from "@/components/dashboard/shared/EditPageForm";
import React from "react";

const PageEditPage = ({ params }: any) => {
  return (
    <div>
      <EditPageForm pageId={params.pageId} />
    </div>
  );
};

export default PageEditPage;
