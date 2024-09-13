"use client";

import InputFieldforCreateMenu from "@/components/dashboard/super-admin/mainMenu/InputFieldforCreateMenu";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useCreateMainMenuMutation } from "@/redux/api/main.menu.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues, useForm, useFieldArray } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  label: z.string().min(1, "Menu label is required"),
  URL: z.string().min(1, "URL is required"),
  dropdown: z
    .array(
      z.object({
        label: z.string().min(1, "Dropdown label is required"),
        URL: z.string().min(1, "URL is required"),
        order: z.number().optional(),
      })
    )
    .optional(),
});

const CreateMenu = () => {
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      label: "",
      URL: "",
      dropdown: [],
    },
    resolver: zodResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    //@ts-ignore
    name: "dropdown",
  });

  const [createMenu] = useCreateMainMenuMutation();

  const onSubmit = async (value: FieldValues) => {
    console.log(value);
    const response = (await createMenu(value)) as any;
    if (response?.error) {
      toast.error(response?.error?.data.message || "Menu item create failed");
    } else {
      toast.success(response.data.message || "Menu item create successfull");
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
                    control={form.control}
                  />
                  <InputFieldforCreateMenu
                    name={`dropdown.${index}.URL`}
                    label="Dropdown Item URL"
                    placeholder="Dropdown item URL here"
                    control={form.control}
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
