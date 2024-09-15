"use client";

import InputFieldforCreateMenu from "@/components/dashboard/super-admin/mainMenu/InputFieldforCreateMenu";
import SelectForCreateOrEditMenu from "@/components/dashboard/super-admin/mainMenu/SelectForCreateOrEditMenu";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import usePageOptions from "@/constant/selectOptions/usePageOptions";
import { useCreateMainMenuMutation } from "@/redux/api/main.menu.api";
import { createMenuFormSchema } from "@/schema-with-default-value/create-menu-form-schema-defaultValues";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues, useForm, useFieldArray } from "react-hook-form";
import { toast } from "sonner";

const CreateMenu = () => {
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      label: "",
      URL: "",
      pageURL: "",
      dropdown: [],
    },
    resolver: zodResolver(createMenuFormSchema),
  });
  const { pageIsLoading, pageOptions } = usePageOptions();

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    //@ts-ignore
    name: "dropdown",
  });

  const [createMenu] = useCreateMainMenuMutation();

  const onSubmit = async (value: FieldValues) => {
    console.log(value);
    value.URL = value.pageURL || value.URL;
    const formatedMenuData = {
      label: value.label,
      URL: value.pageURL || value.URL,
      dropdown: value.dropdown.map((item: any) => ({
        label: item.label,
        URL: item.pageURL || item.URL,
        order: item.order,
      })),
    };
    console.log(formatedMenuData);
    const response = (await createMenu(formatedMenuData)) as any;
    if (response?.error) {
      toast.error(response?.error?.data?.message || "Menu item create failed");
    } else {
      toast.success(response?.data?.message || "Menu item create successfull");
      router.push("/dashboard/super-admin/main-menu-items");
    }
  };

  return (
    <div className="mt-10 max-w-5xl mx-auto w-full p-6 lg:p-12 rounded-md border">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex-col lg:flex-row flex gap-4">
              <InputFieldforCreateMenu
                name="label"
                label="Menu Label"
                placeholder="Menu label here"
                control={form.control}
              />
              <InputFieldforCreateMenu
                name="URL"
                label="Menu URL"
                placeholder="Menu URL here"
                control={form.control}
              />
            </div>
            <SelectForCreateOrEditMenu
              options={pageOptions || []}
              disabled={pageIsLoading}
              control={form.control}
              label="Select page (alternative of URL)"
              placeholder="Select page"
              name="pageURL"
            />
            {fields.length > 0 && (
              <h3 className="text-lg font-[700]">Dropdown Items</h3>
            )}
            {fields.map((field, index) => (
              <div key={field.id} className="flex gap-2 items-end">
                <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
                  <InputFieldforCreateMenu
                    name={`dropdown.${index}.label`}
                    label="Dropdown Item Label"
                    placeholder="Dropdown item label here"
                    control={form.control}
                  />
                  <InputFieldforCreateMenu
                    name={`dropdown.${index}.URL`}
                    label="Dropdown Item URL"
                    placeholder="Dropdown item URL here"
                    control={form.control}
                  />
                  <div className="col-span-1 lg:col-span-2">
                    <SelectForCreateOrEditMenu
                      options={pageOptions || []}
                      disabled={pageIsLoading}
                      control={form.control}
                      label="Select page (alternative of URL)"
                      placeholder="Select page"
                      name={`dropdown.${index}.pageURL`}
                    />
                  </div>
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
              onClick={
                () => append({ label: "", URL: "", order: fields.length + 1 }) // Append with order
              }
              className="mt-2 border-dashed"
            >
              Add Dropdown Item <Plus size={15} />
            </Button>
          </div>
          <div className="flex justify-end mt-4">
            <Button type="submit">Create</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateMenu;
