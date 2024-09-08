import Container from "@/components/shared/Container";
import PageTopSection from "@/components/shared/navbar/PageTopSection";
import { ourTeamData } from "@/staticData/ourTeamData";
import femaleNotFoundImg from "../../../assets/our-team/female-not-found-img.jpg";
import maleNotFoundImg from "../../../assets/our-team/male-not-found-img.png";
import Image from "next/image";

const OurTeamPage = () => {
  const img = (gender: string, image?: any) => {
    if (image) {
      return image;
    } else if (gender === "male") {
      return maleNotFoundImg;
    } else if (gender === "female") {
      return femaleNotFoundImg;
    }
  };
  return (
    <div>
      <PageTopSection />
      <div className="py-[70px] lg:py-32">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {ourTeamData.map((teamMember, index) => (
            <div
              key={index}
              className="flex flex-col h-full group hover:shadow-md mx-auto
              "
            >
              <div className="overflow-hidden rounded-md">
                <Image
                  height={345}
                  width={400}
                  alt=""
                  src={img(teamMember.gender, teamMember.image)}
                  className="h-[250px] md:h-[345px] rounded-md object-cover group-hover:scale-110 group-hover:rotate-3 duration-200 transition-all"
                />
              </div>
              <div className="bg-[#F8F9FA] p-4 flex-grow flex flex-col justify-between">
                <h3 className="text-2xl font-[800] mb-4">{teamMember?.name}</h3>
                <p className="text-sm  font-[700] text-primary">
                  {teamMember?.designation}
                </p>
              </div>
            </div>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default OurTeamPage;
