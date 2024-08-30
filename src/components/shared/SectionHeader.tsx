import { cn } from "@/lib/utils";
import React from "react";

const SectionHeader = ({
  boldText,
  simpleText,
  className,
}: {
  boldText: string;
  simpleText: string;
  className?: string;
}) => {
  return (
    <div className={cn("text-center mx-auto space-y-5", className)}>
      <span className="smple-tex text-[15px] font-bold pb-3 mb-3 uppercase text-primary relative">
        {simpleText}
      </span>
      <h2 className="text-[2.2rem] font-extrabold capitalize tracking-[-0.2px] pb-6">
        {boldText}
      </h2>
    </div>
  );
};

export default SectionHeader;
