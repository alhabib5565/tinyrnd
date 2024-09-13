import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const DashboardPageHeader = ({
  pageName,
  href,
  buttonText,
}: {
  pageName: string;
  href?: string;
  buttonText?: string;
}) => {
  return (
    <div>
      <div className="h-14 mt-10 max-w-5xl mx-auto bg-white p-4 rounded mb-6 flex items-center justify-between">
        <span>{pageName}</span>{" "}
        {buttonText && href && (
          <Button asChild>
            <Link href={href}>{buttonText}</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default DashboardPageHeader;
