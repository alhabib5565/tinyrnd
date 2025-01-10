import MyFileInput from "@/components/from/MyFileInput";
import MyForm from "@/components/from/MyForm";
import MyInput from "@/components/from/MyInput";
import MyModal, { TModalOpenProps } from "@/components/shared/MyModal";
import { Button } from "@/components/ui/button";
import { createBanner } from "@/services/banner.api";
import { handleResponse } from "@/utils/handleResponse";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import {
  createBannerDefaultValue,
  createBannerValidationSchema,
} from "./validationAndDefaultValue";
import { convertToFormData } from "@/utils/convertToFormData";

type TCreateBannerModalProps = Pick<TModalOpenProps, "isOpen" | "setIsOpen">;

//error => when banner creation faild but modal automaticaly close

const CreateBannerModal = ({ isOpen, setIsOpen }: TCreateBannerModalProps) => {
  //handler
  const onSubmit = async (value: FieldValues) => {
    const toastId = toast.loading("Processing your request...");
    const formData = convertToFormData(value);

    try {
      const res = await createBanner(formData);
      if (res?.success) {
        toast.success(res?.message || "Request successful", {
          id: toastId,
        });
        setIsOpen(false);
      } else {
        toast.error(res?.message || "something went wrong", {
          id: toastId,
        });
      }
    } catch (error: any) {
      toast.error(
        error?.data?.message || "Request failed. Please try again..",
        {
          id: toastId,
        }
      );
    }
  };

  return (
    <div>
      <MyModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Create A New Banner"
      >
        <MyForm
          onSubmit={onSubmit}
          resolver={zodResolver(createBannerValidationSchema)}
          defaultValues={createBannerDefaultValue}
        >
          <div className="grid gap-4">
            <MyInput name="title" label="Banner Title" />
            <MyFileInput name="image" label="Banner Image" placeholder="sss" />
            <Button className="w-full mt-2" type="submit">
              Create
            </Button>
          </div>
        </MyForm>
      </MyModal>
    </div>
  );
};

export default CreateBannerModal;
