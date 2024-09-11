"use client";
import MyForm from "@/components/from/MyForm";
import MyInput from "@/components/from/MyInput";
import MyInputWithWatch from "@/components/from/MyInputWithWatch";
import MySelect from "@/components/from/MySelect";
import { Button } from "@/components/ui/button";
import { roleOptions } from "@/constant/selectOptions/roleOptions";
import { useCreateUserMutation } from "@/redux/api/user.api";
import {
  addUserFormDefaultValues,
  addUserFormValidationSchema,
} from "@/schema-with-default-value/add-user-form-schema-defaultValue";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const AddUserPage = () => {
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const [createUser] = useCreateUserMutation();

  const onSubmit = async (value: FieldValues) => {
    console.log(value);
    const response = (await createUser(value)) as any;
    if (response?.error) {
      toast.error(response?.error?.data.message || "Category create failed");
    } else {
      toast.success(response.data.message || "User create successfull");
    }
  };

  return (
    <div className="mt-10 max-w-5xl mx-auto w-full  p-6 lg:p-12 rounded-md border">
      <MyForm
        onSubmit={onSubmit}
        defaultValues={addUserFormDefaultValues}
        resolver={zodResolver(addUserFormValidationSchema)}
      >
        <div className="grid grid-cols-1 gap-4">
          <MyInput
            name="name"
            label="Full-Name"
            type="text"
            placeholder="User fullname"
            isGrid
          />
          <MyInput
            name="designation"
            label="Designation"
            type="text"
            placeholder="User designation here"
            isGrid
          />

          <MyInput
            name="email"
            label="User Email"
            type="text"
            placeholder="Use email here"
            isGrid
          />

          <MyInputWithWatch
            onValueChange={setPassword}
            name="password"
            label="Password"
            type="password"
            placeholder="Password here"
            isGrid
          />

          <MyInputWithWatch
            onValueChange={setConfirmPassword}
            name="confirmPassword"
            label="Confirm password"
            type="password"
            placeholder="Confirm password here"
            isGrid
          />

          <MySelect
            options={roleOptions}
            name="role"
            label="User Role"
            placeholder="Select user role"
            isGrid
          />
          <div className="flex justify-end mt-4">
            <Button disabled={!password || password !== confirmpassword}>
              Save
            </Button>
          </div>
        </div>
      </MyForm>
    </div>
  );
};

export default AddUserPage;
