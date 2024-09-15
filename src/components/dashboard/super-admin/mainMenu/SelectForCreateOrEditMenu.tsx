import React, { HTMLInputTypeAttribute } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type TSelectOption = {
  label: string;
  value: string;
};

type TMySelect = {
  name: string;
  label: string;
  placeholder: string;
  control: any;
  disabled?: boolean;
  options: TSelectOption[];
};

const SelectForCreateOrEditMenu = ({
  name,
  label,
  placeholder,
  options,
  disabled,
  control,
}: TMySelect) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select
            disabled={disabled}
            onValueChange={field.onChange}
            defaultValue={field.value}
          >
            <FormControl>
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
          </Select>
        </FormItem>
      )}
    />
  );
};

export default SelectForCreateOrEditMenu;
