import PageTopSection from "@/components/shared/navbar/PageTopSection";
import React from "react";
import project1 from "../../assets/projects/project-1.jpg";
import project2 from "../../assets/projects/project-2.jpg";
import project3 from "../../assets/projects/project-3.jpg";
import project4 from "../../assets/projects/project-4.jpg";
import project5 from "../../assets/projects/project-5.jpg";
import project6 from "../../assets/projects/project-6.jpg";
import project7 from "../../assets/projects/project-6.jpg";
import project8 from "../../assets/projects/project-6.jpg";
import Container from "@/components/shared/Container";
import Image from "next/image";

const projectData = [
  {
    image: project1,
    title: "Experience",
    subTitle: "Branding",
  },
  {
    image: project2,
    title: "MVP Solution",
    subTitle: "Development",
  },
  {
    image: project3,
    title: "App Platform Integration",
    subTitle: "Web Design",
  },
  {
    image: project4,
    title: "Software Tools Development",
    subTitle: "Branding",
  },
  {
    image: project5,
    title: "Fimlor Experience",
    subTitle: "Web Design",
  },
  {
    image: project6,
    title: "Design, Develop",
    subTitle: "Development",
  },
  {
    image: project7,
    title: "Research",
    subTitle: "Web Design",
  },
  {
    image: project8,
    title: "UI/UX Design",
    subTitle: "Development",
  },
];

const ProjectPage = () => {
  return (
    <div>
      <PageTopSection />
      {/* bg-[#F8F9FA] */}
      <div className="py-[70px] lg:py-32 ">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-full">
          {projectData.map((project, index) => (
            <div key={index} className="flex flex-col h-full">
              <Image
                height={365}
                width={305}
                alt=""
                src={project.image}
                className="h-[350px] object-cover"
              />
              <div className="bg-[#F8F9FA] p-4 flex-grow flex flex-col justify-between">
                <h3 className="text-2xl text-center font-[800] mb-4">
                  {project.title}
                </h3>
                <h3 className="text-sm text-center font-[700] text-primary">
                  {project.subTitle}
                </h3>
              </div>
            </div>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default ProjectPage;
