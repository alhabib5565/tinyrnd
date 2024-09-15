"use client";
import { toast } from "sonner";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createGalleryItemFormValidationSchema } from "@/schema-with-default-value/create-ImageGalleryItemSchemaD";
import MyModal, { TModalOpenProps } from "@/components/sidebar/MyModal";
import { useCreateImageMutation } from "@/redux/api/image.gallery.api";
import MyForm from "@/components/from/MyForm";
import MyInput from "@/components/from/MyInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";

type TCreateGalleryItemModalProps = Pick<
  TModalOpenProps,
  "isOpen" | "setIsOpen"
>;

type FormValues = z.infer<typeof createGalleryItemFormValidationSchema>;

const CreateImageModal = ({
  isOpen,
  setIsOpen,
}: TCreateGalleryItemModalProps) => {
  const [createImageGalleryItem] = useCreateImageMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(createGalleryItemFormValidationSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    console.log({ caption: data.caption, image: data.image[0] });
    const { image, ...remainingData } = data;
    const formData = new FormData();
    formData.append("file", data.image[0]);
    formData.append("data", JSON.stringify({ caption: data.caption }));

    const response = (await createImageGalleryItem(formData)) as any;
    if (response?.error) {
      toast.error(
        response?.error?.message || "Image Gallery item create failed"
      );
    } else {
      toast.success(
        response?.data?.message || "Image Gallery item create successfull"
      );
      reset();
      setIsOpen(false);
    }
  };

  return (
    <div>
      <MyModal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Animal">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <div>
              <Input
                {...register("caption")}
                className={`input ${errors.caption ? "border-red-500" : ""}`}
                type="text"
                placeholder="Image caption"
              />
              {errors.caption && (
                <p className="text-red-500">{errors.caption.message}</p>
              )}
            </div>
            <div>
              <Input
                {...register("image")}
                className={`input ${errors.image ? "border-red-500" : ""}`}
                type="file"
              />
              {errors.image && (
                <p className="text-red-500">{errors.image.message as string}</p>
              )}
            </div>

            <div className="flex justify-end mt-4">
              <Button className="w-full" type="submit">
                Create
              </Button>
            </div>
          </div>
        </form>
      </MyModal>
    </div>
  );
};

export default CreateImageModal;
