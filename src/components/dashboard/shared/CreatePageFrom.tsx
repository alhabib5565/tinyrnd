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
import { useCreatePageMutation } from "@/redux/api/pages.api";
import { useRouter } from "next/navigation";
import { useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const CreatePageFrom = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const router = useRouter();
  const [createPage] = useCreatePageMutation();

  const onSubmit = async (value: FieldValues) => {
    value.pageContent = content;
    const response = (await createPage(value)) as any;
    if (response?.error) {
      toast.error(response?.error?.data.message || "Page create failed");
    } else {
      toast.success(response.data.message || "Page create successfull");
      router.push("/dashboard/super-admin/pages");
    }
  };

  return (
    <div>
      <DashboardPageHeader pageName="Create page" />
      <div className="mt-10 max-w-5xl mx-auto w-full  p-6 lg:p-12 rounded-md border">
        <MyForm
          onSubmit={onSubmit}
          defaultValues={createPageFormDefaultValues}
          // resolver={zodResolver(createPageFormValidationSchema)}
        >
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
              <Button>Create Page</Button>
            </div>
          </div>
        </MyForm>
      </div>
    </div>
  );
};

export default CreatePageFrom;
