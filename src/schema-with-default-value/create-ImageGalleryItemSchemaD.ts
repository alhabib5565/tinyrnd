import { z } from "zod";

export const createGalleryItemFormValidationSchema = z.object({
  caption: z.string().min(1, "Caption is required"),
  image: z.any().refine((file) => file && file.length > 0, {
    message: "Image is required",
  }),
});
