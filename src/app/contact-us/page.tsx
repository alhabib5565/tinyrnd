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

const ContactUsPage = () => {
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div>
      <PageTopSection />
      <div className="py-[70px] lg:py-32">
        <Container className="bg-[#F6F6F6] p-12 rounded-md">
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
            <div className="flex-1 bg-black"></div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ContactUsPage;
