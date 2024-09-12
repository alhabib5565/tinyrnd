"use client";

import InputFieldforCreateMenu from "@/components/dashboard/super-admin/mainMenu/InputFieldforCreateMenu";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { TMainMenu } from "@/constant/navitems";
import {
  useCreateMainMenuMutation,
  useEditMainMenuMutation,
  useGetSingleMainMenuQuery,
} from "@/redux/api/main.menu.api";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FieldValues, useForm, useFieldArray } from "react-hook-form";
import { toast } from "sonner";

const MenuItemEditPage = ({ params }: any) => {
  const id = params.menuItemId;
  const { data, isLoading } = useGetSingleMainMenuQuery({ id });
  const [editMainMenuItem] = useEditMainMenuMutation();
  const previousMenuItemData = data?.data as any;

  const router = useRouter();

  const form = useForm({
    defaultValues: {
      label: "",
      URL: "",
      dropdown: [],
    },
  });

  const { control, handleSubmit, reset } = form;

  useEffect(() => {
    if (previousMenuItemData) {
      reset({
        label: previousMenuItemData.label || "",
        URL: previousMenuItemData.URL || "",
        dropdown: previousMenuItemData.dropdown || [],
      });
    }
  }, [previousMenuItemData, reset]);

  const { fields, append, remove } = useFieldArray({
    control,
    //@ts-ignore
    name: "dropdown",
  });

  const onSubmit = async (value: FieldValues) => {
    const response = (await editMainMenuItem({ data: value, id })) as any;
    if (response?.error) {
      toast.error(response?.error?.data.message || "Menu item edit failed");
    } else {
      toast.success(response.data.message || "Menu item edit successfully");
      router.push("/dashboard/super-admin/main-menu-items");
    }
  };

  return (
    <div className="mt-10 max-w-5xl mx-auto w-full p-6 lg:p-12 rounded-md border">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex-col lg:flex-row flex gap-4">
              <InputFieldforCreateMenu
                name="label"
                label="Menu Label"
                placeholder="Menu label here"
                control={control}
              />
              <InputFieldforCreateMenu
                name="URL"
                label="Menu URL"
                placeholder="Menu URL here"
                control={control}
              />
            </div>
            {fields.length > 0 && (
              <h3 className="text-lg font-[700]">Dropdown Items</h3>
            )}
            {fields.map((field, index) => (
              <div key={field.id} className="flex gap-2 items-end">
                <div className="flex-col w-full lg:flex-row flex gap-4">
                  <InputFieldforCreateMenu
                    name={`dropdown.${index}.label`}
                    label="Dropdown Item Label"
                    placeholder="Dropdown item label here"
                    control={control}
                  />
                  <InputFieldforCreateMenu
                    name={`dropdown.${index}.URL`}
                    label="Dropdown Item URL"
                    placeholder="Dropdown item URL here"
                    control={control}
                  />
                </div>
                <Button
                  type="button"
                  onClick={() => remove(index)}
                  variant={"outline"}
                  className="h-12"
                >
                  Remove
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                append({ label: "", URL: "", order: fields.length + 1 })
              }
              className="mt-2 border-dashed"
            >
              Add Menu <Plus size={15} />
            </Button>
          </div>
          <div className="flex justify-end mt-4">
            <Button type="submit">Save</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default MenuItemEditPage;
