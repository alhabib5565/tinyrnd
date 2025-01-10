import MyFileInput from "@/components/from/MyFileInput";
import MyForm from "@/components/from/MyForm";
import MyInput from "@/components/from/MyInput";
import MyModal, { TModalOpenProps } from "@/components/shared/MyModal";
import { Button } from "@/components/ui/button";
import { updateBanner } from "@/services/banner.api";
import { handleResponse } from "@/utils/handleResponse";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { updateBannerValidationSchema } from "./validationAndDefaultValue";
import { convertToFormData } from "@/utils/convertToFormData";
import { TBanner } from "@/types/banner.type";

type TUpdateBannerModalProps = Pick<TModalOpenProps, "isOpen" | "setIsOpen"> & {
  bannerData: TBanner;
};

//error => when banner creation faild but modal automaticaly close

const UpdateBannerModal = ({
  isOpen,
  setIsOpen,
  bannerData,
}: TUpdateBannerModalProps) => {
  //handler
  const onSubmit = async (value: FieldValues) => {
    const toastId = toast.loading("Processing your request...");
    const formData = convertToFormData(value);

    try {
      const res = await updateBanner(bannerData._id, formData);
      handleResponse(res, toastId, setIsOpen);
    } catch (error: any) {
      toast.error(
        error?.data?.message || "Request failed. Please try again..",
        {
          id: toastId,
        }
      );
    }
  };

  console.log(bannerData);
  return (
    <div>
      <MyModal isOpen={isOpen} setIsOpen={setIsOpen} title="Update Banner">
        <MyForm
          onSubmit={onSubmit}
          resolver={zodResolver(updateBannerValidationSchema)}
          defaultValues={{ title: bannerData.title }}
        >
          <div className="grid gap-4">
            <MyInput name="title" label="Banner Title" />
            <MyFileInput name="image" label="Banner Image" placeholder="sss" />
            <Button className="w-full mt-2" type="submit">
              Update
            </Button>
          </div>
        </MyForm>
      </MyModal>
    </div>
  );
};

export default UpdateBannerModal;
