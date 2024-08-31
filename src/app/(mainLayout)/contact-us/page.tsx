"use client";
import MyForm from "@/components/from/MyForm";
import MyInput from "@/components/from/MyInput";
import MyTextarea from "@/components/from/MyTextarea";
import Container from "@/components/shared/Container";
import PageTopSection from "@/components/shared/navbar/PageTopSection";
import { Button } from "@/components/ui/button";
import {
  contactFormDefaultValue,
  contactFormSchema,
} from "@/schema-with-default-value/contact-form-schema-defaultValue";
import React from "react";
import { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SectionHeader from "@/components/shared/SectionHeader";
import {
  Facebook,
  Linkedin,
  LocateIcon,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
const contactInfo = [
  {
    title: "Send E-Mail",
    info: "info@tinyrnd.com",
    icon: Mail,
  },
  {
    title: "Call Anytime",
    info: "+88 01795 848424",
    icon: Phone,
  },
  {
    title: "Locations",
    info: "Level 3, House 26, Road 4, Block F, Sector 1 Jaharul Islam City, Aftabnagar, Rampur, Dhaka.",
    icon: MapPin,
  },
];

const ContactUsPage = () => {
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div>
      <PageTopSection />
      <div className="py-[70px] lg:py-32">
        <Container className="bg-[#F6F6F6] lg:p-12 rounded-md">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 ">
              <MyForm
                defaultValues={contactFormDefaultValue}
                resolver={zodResolver(contactFormSchema)}
                onSubmit={onSubmit}
              >
                <div className="grid grid-cols-2 gap-4">
                  <MyInput
                    name="name"
                    type="text"
                    label="Your Name"
                    placeholder="Your name here"
                  />
                  <MyInput
                    name="email"
                    type="email"
                    label="Your Email"
                    placeholder="Your email here"
                  />
                  <MyInput
                    name="subject"
                    type="text"
                    label="Subject"
                    placeholder="Your subject here"
                  />
                  <MyInput
                    name="contactNumber"
                    type="number"
                    label="Contact Number"
                    placeholder="Your contact number"
                  />
                </div>
                <div className="mt-2">
                  <MyTextarea
                    rows={4}
                    name="message"
                    label="Message"
                    placeholder="Tell us a few word"
                  />
                </div>
                <div className="flex justify-end mt-4">
                  <Button type="submit">Send Message</Button>
                </div>
              </MyForm>
            </div>
            <div className="flex-1 bg-[#1F2732] p-4 lg:p-8 rounded-md">
              <SectionHeader
                className="text-left text-white"
                boldText="Our Contact Detail"
                simpleText="Contact"
              />
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex gap-4 pb-6 border-gray-600 border-b-[1px]"
                  >
                    <span className="h-12 w-12 bg-[#ffffff84] grid place-items-center">
                      <info.icon className="text-white" size={30} />
                    </span>
                    <div className="grow">
                      <h3 className="text-lg font-semibold text-white">
                        {info.title}
                      </h3>
                      <span className="text-white text-[16px] text-wrap">
                        {info.info}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-6">
                <Link
                  href="#"
                  className="h-10 w-10 grid place-content-center bg-[#FFFFFF1A] hover:bg-primary duration-200 transition-colors text-white"
                >
                  <Facebook />
                </Link>
                <Link
                  href="#"
                  className="h-10 w-10 grid place-content-center bg-[#FFFFFF1A] hover:bg-primary duration-200 transition-colors text-white"
                >
                  <Twitter />
                </Link>
                <Link
                  href="#"
                  className="h-10 w-10 grid place-content-center bg-[#FFFFFF1A] hover:bg-primary duration-200 transition-colors text-white"
                >
                  <Youtube />
                </Link>
                <Link
                  href="#"
                  className="h-10 w-10 grid place-content-center bg-[#FFFFFF1A] hover:bg-primary duration-200 transition-colors text-white"
                >
                  <Linkedin />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ContactUsPage;
