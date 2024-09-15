import { z } from "zod";

export const createMenuFormSchema = z
  .object({
    label: z.string().min(1, "Menu label is required"),
    URL: z.string().optional(),
    pageURL: z.string().optional(),
    dropdown: z
      .array(
        z
          .object({
            label: z.string().min(1, "Dropdown label is required"),
            URL: z.string().optional(),
            pageURL: z.string().optional(),
            order: z.number().optional(),
          })
          .refine((data) => data.URL || data.pageURL, {
            message: "Either URL or Page is required for dropdown item",
            path: ["URL"],
          })
      )
      .optional(),
  })
  .refine((data) => data.URL || data.pageURL, {
    message: "Either URL or Page is required",
    path: ["URL"],
  });
