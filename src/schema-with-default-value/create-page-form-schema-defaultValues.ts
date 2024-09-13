import { z } from "zod";

export const createPageFormValidationSchema = z.object({
  pageName: z
    .string()
    .min(1, { message: "Page name must be at least 1 characters" }),
  path: z.string().min(1, { message: "Path must be at least 1 characters" }),
});

export const createPageFormDefaultValues = {
  pageName: "",
  path: "",
};
