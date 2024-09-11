"use client";
import MyForm from "@/components/from/MyForm";
import MyInput from "@/components/from/MyInput";
import MySelect from "@/components/from/MySelect";
import { Button } from "@/components/ui/button";
import { roleOptions } from "@/constant/selectOptions/roleOptions";
import {
  useEditUserMutation,
  useGetSingleUserQuery,
} from "@/redux/api/user.api";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
const EditUserPage = ({ params }: any) => {
  const router = useRouter();
  const { data, isLoading } = useGetSingleUserQuery({ id: params.userId });
  const [editUserInfo] = useEditUserMutation();

  if (isLoading) {
    return <div className="h-screen grid place-items-center">Loading...</div>;
  }

  const onSubmit = async (value: FieldValues) => {
    console.log(value);
    const response = (await editUserInfo({
      data: value,
      id: params.userId,
    })) as any;
    if (response?.error) {
      toast.error(response?.error?.data.message || "Edit user failed");
    } else {
      toast.success(response.data.message || "User edit successfull");
      router.push("/dashboard/super-admin/all-users");
    }
  };
  return (
    <div className="mt-10 max-w-5xl mx-auto w-full  p-6 lg:p-12 rounded-md border">
      <MyForm onSubmit={onSubmit} defaultValues={data?.data}>
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

          <MySelect
            options={roleOptions}
            name="role"
            label="User Role"
            placeholder="Select user role"
            isGrid
          />
          <div className="flex justify-end mt-4">
            <Button>Save</Button>
          </div>
        </div>
      </MyForm>
    </div>
  );
};

export default EditUserPage;
