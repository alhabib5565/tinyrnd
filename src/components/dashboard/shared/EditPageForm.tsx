"use client";
import MyForm from "@/components/from/MyForm";
import MyInput from "@/components/from/MyInput";
import { Button } from "@/components/ui/button";
import {
  createPageFormDefaultValues,
  createPageFormValidationSchema,
} from "@/schema-with-default-value/create-page-form-schema-defaultValues";

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import DashboardPageHeader from "./DashboardPageHeader";
import {
  useCreatePageMutation,
  useEditPageMutation,
  useGetSinglePageQuery,
} from "@/redux/api/pages.api";
import { useRouter } from "next/navigation";
import Loading from "@/components/shared/Loading";
import { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
const EditPageForm = ({ pageId }: { pageId: string }) => {
  const { data, isLoading } = useGetSinglePageQuery({ id: pageId });
  const prevPageData = data?.data;

  const editor = useRef(null);
  const [content, setContent] = useState(prevPageData?.pageContent || "");

  useEffect(() => {
    setContent(prevPageData?.pageContent);
  }, [prevPageData?.pageContent]);

  const router = useRouter();
  const [editPage] = useEditPageMutation();

  if (isLoading) {
    return <Loading />;
  }

  const defaultValues = {
    pageName: prevPageData?.pageName || "",
    path: prevPageData?.path || "",
  };

  const onSubmit = async (value: FieldValues) => {
    console.log(value);
    value.pageContent = content;
    const response = (await editPage({ data: value, id: pageId })) as any;
    if (response?.error) {
      toast.error(response?.error?.data.message || "Page Edit failed");
    } else {
      toast.success(response.data.message || "Page Edit successfull");
      router.push("/dashboard/super-admin/pages");
    }
  };

  return (
    <div>
      <DashboardPageHeader pageName="Edit page" />
      <div className="mt-10 max-w-5xl mx-auto w-full  p-6 lg:p-12 rounded-md border">
        <MyForm onSubmit={onSubmit} defaultValues={defaultValues}>
          <div className="grid grid-cols-1 gap-4">
            <MyInput
              name="pageName"
              label="Page Name"
              type="text"
              placeholder="Page name here"
              isGrid
            />
            <MyInput
              name="path"
              label="Path"
              type="text"
              placeholder="Path here"
              isGrid
            />
            <JoditEditor
              ref={editor}
              value={content}
              onBlur={(newContent) => setContent(newContent)}
              onChange={(newContent) => setContent(newContent)}
            />
            <div className="flex justify-end mt-4">
              <Button>Update</Button>
            </div>
          </div>
        </MyForm>
      </div>
    </div>
  );
};

export default EditPageForm;
