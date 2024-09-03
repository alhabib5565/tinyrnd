export type TNavItem = {
  name: string;
  href: string;
  dropdown?: TNavItem[];
};

export const navItems: TNavItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about-us",
    dropdown: [
      {
        name: "About Us",
        href: "/about-us",
      },
      {
        name: "Work Process",
        href: "/work-process",
      },
      // {
      //   name: "Our Team",
      //   href: "/our-team",
      // },
      // {
      //   name: "MVP Pricing Plans",
      //   href: "/pricing-page",
      // },
      // {
      //   name: "Privacy Policy",
      //   href: "/privacy-policy-page",
      // },
    ],
  },
  // {
  //   name: "Services",
  //   href: "/",
  //   dropdown: [
  //     {
  //       name: "Project Management Service",
  //       href: "/project-management-service",
  //     },
  //     {
  //       name: "Fullstack Development",
  //       href: "/full-stack-development",
  //     },
  //     {
  //       name: "Get MVP in 2 month",
  //       href: "/get-mvp",
  //     },
  //     {
  //       name: "Outstaffing Developers",
  //       href: "/outstaffing-developers",
  //     },
  //     {
  //       name: "UI UX Design",
  //       href: "/ui-ux-design",
  //     },
  //     {
  //       name: "Mobile App Development",
  //       href: "/mobile-app-development",
  //     },
  //   ],
  // },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
  {
    name: "Contact-us",
    href: "/contact-us",
  },
  {
    name: "Dashboard",
    href: "/dashboard/contact-messages",
  },
];
