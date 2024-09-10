import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { TSingleSidebarItem } from "@/types/sidebar.type";

const SingleSidebarItem = ({ item }: { item: TSingleSidebarItem }) => {
  const pathName = usePathname();
  return (
    <Link href={item?.href || ""} className="block">
      <Button
        variant={pathName === item?.href ? "secondary" : "ghost"}
        className="w-full flex justify-start gap-4 capitalize text-lg"
      >
        <item.icon size={20} />
        {item?.name}
      </Button>
    </Link>
  );
};

export default SingleSidebarItem;
