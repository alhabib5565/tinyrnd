import { StaticImageData } from "next/image";
import serviceImg1 from "../assets/service-image/service-details-01.jpg";
import serviceImg2 from "../assets/service-image/service-details-02.jpg";
import serviceImg3 from "../assets/service-image/service-details-03.jpg";

import solutionImg1 from "../assets/service-image/solution-img-1.jpg";
import solutionImg2 from "../assets/service-image/solution-img-2.jpg";

interface ServiceHighlight {
  title: string;
  items: string[];
}

interface Solution {
  title: string;
  description: string;
  image: StaticImageData;
}

interface WhyUs {
  title?: string;
  points: string[];
}

interface Service {
  mainImage: StaticImageData;
  serviceName: string;
  tagline: string;
  overview: string[];
  serviceHighlights: ServiceHighlight;
  solutions: Solution[];
  whyUs: WhyUs;
}

export const serviceDataWithDetails: Service[] = [
  {
    serviceName: "Project Management Service",
    tagline: "Expert Project Management for Technological Success.",
    mainImage: serviceImg1,
    overview: [
      "As a certified project management company, we specialize in guiding technological projects to successful completion. We start by conducting a thorough analysis of your project requirements, defining clear objectives, and assembling a team of skilled professionals tailored to your needs. Our certified project managers then develop a detailed roadmap, breaking down the project into manageable phases.",
      "Our approach involves meticulous planning, precise execution, and continuous monitoring, with progress tracked through regular milestones. Your dedicated project manager will keep you informed with consistent updates, ensuring that the project stays on schedule and within budget. We emphasize effective communication and risk management to anticipate and mitigate challenges before they arise.",
      "Tiny R&D’s “Project Management Service” ensures your development projects are finished fast and efficiently. We employ proactive risk management to reduce difficulties, smooth collaboration technologies to keep everyone in sync, and agile approaches to provide flexibility. Give the details to us to manage so you can concentrate on expanding your company.",
    ],
    serviceHighlights: {
      title: "With our service, you can expect:",
      items: [
        "Certified project management expertise",
        "Customized project plans aligned with your goals",
        "Regular progress reports and milestone tracking",
        "Proactive risk management",
        "Seamless coordination of cross-functional teams",
        "A dedicated project manager as your single point of contact",
      ],
    },
    solutions: [
      {
        title: "Best Solutions",
        description:
          "We focus on the best practices for IT solutions and services.",
        image: solutionImg1,
      },
      {
        title: "Best System",
        description: "A top-notch project management system.",
        image: solutionImg2,
      },
    ],
    whyUs: {
      title: "Our service, you can expect:",
      points: [
        "Risk Management and Quality Assurance",
        "Effective Communication and Collaboration",
        "Structured Planning and Scheduling",
        "Clear Project Scope and Objectives",
      ],
    },
  },
  {
    serviceName: "Full-stack Development",
    tagline: "Comprehensive Fullstack Development by Tiny R&D.",
    mainImage: serviceImg2,
    overview: [
      "At Tiny R&D, we provide complete Full Stack Development services, offering end-to-end solutions designed to meet your specific business needs. From front-end design to back-end architecture, we handle every aspect of your project, ensuring a seamless and fully integrated product.",
      "Our team ensures scalable, secure, and high-performance applications.",
      "We start by conducting an in-depth analysis of your requirements, followed by creating a detailed blueprint to guide the development process. Our team of expert developers at Tiny R&D specializes in both front-end and back-end technologies, ensuring that your application is not only robust and scalable but also visually appealing",
      "We start by conducting an in-depth analysis of your requirements, followed by creating a detailed blueprint to guide the development process. Our team of expert developers at Tiny R&D specializes in both front-end and back-end technologies, ensuring that your application is not only robust and scalable but also visually appealing",
      "Throughout the project, your dedicated project manager from Tiny R&D will keep you informed with regular updates, ensuring that development stays on track and meets your deadlines. We are committed to delivering high-quality code, thorough testing, and top-notch performance.",
    ],
    serviceHighlights: {
      title: "Throughout the project, you can expect:",
      items: [
        "Complete front-end and back-end development tailored to your business",
        "Scalable and high-performance applications",
        "Rigorous QA and testing processes",
        "Regular progress updates from your dedicated project manager",
        "Full documentation and ownership of your final product",
      ],
    },
    solutions: [
      {
        title: "Best Solutions",
        description: "Discover the best solution for your needs.",
        image: solutionImg1,
      },
      {
        title: "Data Analysis",
        description: "Transform your data into actionable insights.",
        image: solutionImg2,
      },
    ],
    whyUs: {
      title:
        "By choosing Tiny R&D for your Full Stack Development needs, you benefit from:",
      points: [
        "End-to-End Development",
        "Responsive and User-Centric Design",
        "Custom and Scalable Solutions",
        "Seamless Integration",
      ],
    },
  },
  {
    serviceName: "Get MVP in 2 months",
    tagline: "Get Your MVP Ready in Just 2 Months.",
    mainImage: serviceImg3,
    overview: [
      "Our streamlined approach starts with comprehensive analytics—analyzing your competitors, defining your target audience, and developing a prototype of your product. We assemble a dedicated team of experts and outline a clear, step-by-step plan to ensure your MVP is delivered on time.",
      "Our development is structured into 1- to 2-week sprints, with a demonstration of progress at the end of each stage. Throughout the process, your project manager will provide daily updates, detailing the team’s progress and the next steps. Even with a large team, you’ll only need to communicate with your project manager, ensuring simplicity and clarity.",
      "By the end of the two months, you’ll receive full ownership of your MVP, along with all necessary documentation.",
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.",
    ],
    serviceHighlights: {
      title: "Working with us guarantees:",
      items: [
        "A focused development process with clear milestones",
        "Daily progress reports",
        "Thorough QA testing",
        "Expert UX/UI design",
        "Direct access to developers",
        "A dedicated project manager to keep everything on track",
      ],
    },
    solutions: [
      {
        title: "Best Solutions",
        description:
          "Find the best solution with precise analysis and advanced techniques.",
        image: solutionImg1,
      },
      {
        title: "Best Analysis",
        description:
          "Analyze the best data by combining accurate data collection.",
        image: solutionImg2,
      },
    ],
    whyUs: {
      title: "Our work benefits",
      points: [
        "Focus on Core Functionality",
        "Adopt Lean Development",
        "Gather User Feedback",
        "Test Market Demand",
      ],
    },
  },
];
