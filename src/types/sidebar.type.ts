import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type TSingleSidebarItem = {
  name: string;
  href?: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};
export type TSidebarItemWithDropdown = TSingleSidebarItem & {
  nestedItems?: TSingleSidebarItem[];
};
