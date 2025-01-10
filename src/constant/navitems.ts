export type TNavItem = {
  label: string;
  href: string;
  dropdown?: TNavItem[];
};

// export type TNavItem = {
//   label: string;
//   URL: string;
//   order: number;
//   dropdown: TNavItem[];
//   _id: string;
// };

export const navItems: TNavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about-us",
    dropdown: [
      {
        label: "About Us",
        href: "/about-us",
      },
      {
        label: "Work Process",
        href: "/how-we-work",
      },
      {
        label: "Our Team",
        href: "/our-team",
      },
      // {
      //   label: "MVP Pricing Plans",
      //   href: "/pricing-page",
      // },
      // {
      //   label: "Privacy Policy",
      //   href: "/privacy-policy-page",
      // },
    ],
  },
  {
    label: "Services",
    href: "/",
    dropdown: [
      {
        label: "Services",
        href: "/services",
      },
      {
        label: "Project Management Service",
        href: "/services/project-management-service",
      },
      {
        label: "Fullstack Development",
        href: "/services/full-stack-development",
      },
      {
        label: "Get MVP in 2 month",
        href: "/services/get-mvp",
      },
      // {
      //   label: "Outstaffing Developers",
      //   href: "/services/outstaffing-developers",
      // },
      // {
      //   label: "UI UX Design",
      //   href: "/services/ui-ux-design",
      // },
      // {
      //   label: "Mobile App Development",
      //   href: "/services/mobile-app-development",
      // },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
  {
    label: "Contact-us",
    href: "/contact-us",
  },
  {
    label: "Dashboard",
    href: "/dashboard/contact-messages",
  },
];
