import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  contactNumber: z
    .string({ invalid_type_error: "Please provide a valid number" })
    .length(11, "Contact Number must be at 11 digits"),
  message: z.string().min(1, "Message is required"),
});

export const contactFormDefaultValue = {
  name: "",
  email: "",
  subject: "",
  contactNumber: 0,
  message: "",
};
