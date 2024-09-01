"use server";

import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const sendContactMessage = async (data: FieldValues) => {
  const response = await fetch(
    "https://tinyrnd-server.vercel.app/api/v1/contact-messages/send-contact-message",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  revalidateTag("contact-message");
  return await response.json();
};
