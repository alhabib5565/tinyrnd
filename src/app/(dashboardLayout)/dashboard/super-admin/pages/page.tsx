import DashboardPageHeader from "@/components/dashboard/shared/DashboardPageHeader";
import PagesTable from "@/components/dashboard/shared/PagesTable";
import React from "react";

const PagesPage = () => {
  return (
    <div>
      <DashboardPageHeader
        pageName="Pages"
        buttonText="Create Page"
        href="/dashboard/super-admin/pages/create-page"
      />
      <PagesTable />
    </div>
  );
};

export default PagesPage;
