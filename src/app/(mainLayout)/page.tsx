import AboutUs from "@/components/pages/homePage/AboutUs";
import Blogs from "@/components/pages/homePage/Blogs";
import Hero from "@/components/pages/homePage/Hero";
import Services from "@/components/pages/homePage/Services";
import Testimonials from "@/components/pages/homePage/Testimonials";
import WebSolutions from "@/components/pages/homePage/WebSolutions";
import WhoWeAre from "@/components/pages/homePage/WhoWeAre";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <WhoWeAre />
      <WebSolutions />
      <AboutUs />
      <Testimonials />
      <Blogs />
    </div>
  );
};

export default HomePage;
