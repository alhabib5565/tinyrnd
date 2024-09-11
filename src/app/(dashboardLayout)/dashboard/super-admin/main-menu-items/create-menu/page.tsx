"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import React from "react";
import { FieldValues, useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";

// Define Zod schema
const schema = z.object({
  label: z.string().min(1, "Menu label is required"),
  URL: z.string().url("Invalid URL"),
  dropdown: z
    .array(
      z.object({
        label: z.string().min(1, "Dropdown label is required"),
        URL: z.string().url("Invalid URL"),
        order: z.number().optional(), // Add the order field here
      })
    )
    .optional(),
});

const CreateMenu = () => {
  const form = useForm({
    defaultValues: {
      label: "",
      URL: "",
      dropdown: [], // Initialize order
    },
    resolver: zodResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    //@ts-ignore
    name: "dropdown",
  });

  const onSubmit = (value: FieldValues) => {
    console.log(value);
  };

  return (
    <div className="mt-10 max-w-5xl mx-auto w-full p-6 lg:p-12 rounded-md border">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex-col lg:flex-row flex gap-4">
              <InputFieldForThisForm
                name="label"
                label="Menu Label"
                placeholder="Menu label here"
                control={form.control}
              />
              <InputFieldForThisForm
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
                  <InputFieldForThisForm
                    name={`dropdown.${index}.label`}
                    label="Dropdown Item Label"
                    placeholder="Dropdown item label here"
                    control={form.control}
                  />
                  <InputFieldForThisForm
                    name={`dropdown.${index}.URL`}
                    label="Dropdown Item URL"
                    placeholder="Dropdown item URL here"
                    control={form.control}
                  />
                </div>
                <Button
                  type="button"
                  onClick={() => remove(index)} // Remove specific field
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
              Add Menu <Plus size={15} />
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

type TInputFieldForThisForm = {
  name: string;
  label: string;
  placeholder: string;
  control: any;
};

const InputFieldForThisForm = ({
  control,
  name,
  label,
  placeholder,
}: TInputFieldForThisForm) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        return (
          <FormItem className="flex-1">
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <div className="flex flex-col gap-2">
                <Input
                  type="text"
                  className="bg-transparent"
                  placeholder={placeholder}
                  {...field}
                />
                <FormMessage>{error?.message}</FormMessage>
              </div>
            </FormControl>
          </FormItem>
        );
      }}
    />
  );
};
