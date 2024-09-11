import { TSidebarItemWithDropdown } from "@/types/sidebar.type";
import {
  LayoutDashboard,
  Mail,
  Menu,
  MenuSquare,
  User,
  User2,
  UserCircle,
  UsersRound,
} from "lucide-react";

export const sidebardItems: TSidebarItemWithDropdown[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Contact Messages",
    href: "/dashboard/contact-messages",
    icon: Mail,
  },
  // {
  // name: "Menu",
  // icon: Menu,
  // nestedItems: [
  {
    name: "Main Menu Items",
    href: `/dashboard/super-admin/main-menu-items`,
    icon: MenuSquare,
  },
  // ],
  // },
  {
    name: "Users",
    icon: User,
    nestedItems: [
      {
        name: "All Users",
        href: `/dashboard/super-admin/all-users`,
        icon: UsersRound,
      },
      {
        name: "Add User",
        href: `/dashboard/super-admin/add-user`,
        icon: UserCircle,
      },
    ],
  },
];
