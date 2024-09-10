import React, { HTMLInputTypeAttribute } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";

type TSelectOption = {
  label: string;
  value: string;
};

type TMySelect = {
  name: string;
  label: string;
  placeholder: string;
  isGrid?: boolean;
  options: TSelectOption[];
};

const MySelect = ({ name, label, placeholder, isGrid, options }: TMySelect) => {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        return (
          <FormItem
            className={cn({
              "grid grid-cols-7 gap-4 items-center": isGrid,
            })}
          >
            <FormLabel
              className={cn({
                "col-span-2": isGrid,
              })}
            >
              {label}
            </FormLabel>
            <FormControl
              className={cn({
                "col-span-5 ": isGrid,
              })}
            >
              <div className="flex flex-col gap-2">
                <Select
                  {...field}
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger className="w-full min-w-[300px] bg-transparent">
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {options.map((opt, index) => (
                      <SelectItem key={index} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage>{error?.message}</FormMessage>
              </div>
            </FormControl>
          </FormItem>
        );
      }}
    />
  );
};

export default MySelect;
