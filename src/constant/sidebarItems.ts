import { TSidebarItemWithDropdown } from "@/types/sidebar.type";
import {
  LayoutDashboard,
  Mail,
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
