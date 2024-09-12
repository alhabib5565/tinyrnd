"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import React from "react";

type TInputFieldForThisForm = {
  name: string;
  label: string;
  placeholder: string;
  control: any;
};

const InputFieldforCreateMenu = ({
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

export default InputFieldforCreateMenu;
