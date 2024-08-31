import React, { HTMLInputTypeAttribute } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useFormContext } from "react-hook-form";

type TMyInput = {
  name: string;
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
};

const MyInput = ({ name, label, type, placeholder }: TMyInput) => {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        return (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                type={type}
                className="bg-transparent"
                placeholder={placeholder}
                {...field}
              />
            </FormControl>
            <FormMessage>{error?.message}</FormMessage>
          </FormItem>
        );
      }}
    />
  );
};

export default MyInput;
