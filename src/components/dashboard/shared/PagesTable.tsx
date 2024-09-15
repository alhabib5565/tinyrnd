"use client";
import {
  useDeleteUserMutation,
  useGetAllUserQuery,
} from "@/redux/api/user.api";
import Swal from "sweetalert2";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TUser } from "@/types/user.type";
import { Button } from "@/components/ui/button";
import { Delete, Edit, Trash, View } from "lucide-react";
import Link from "next/link";
import {
  useDeletePageMutation,
  useGetAllPagesQuery,
} from "@/redux/api/pages.api";
import Loading from "@/components/shared/Loading";

const PagesTable = () => {
  const { data, isLoading } = useGetAllPagesQuery({});
  const [deletePage] = useDeletePageMutation();
  if (isLoading) {
    return <Loading />;
  }

  const handleDeletePage = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      const response = (await deletePage({ id })) as any;
      if (response?.error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: response?.error?.message || "Delete failed",
        });
      } else {
        Swal.fire({
          title: "Deleted!",
          text: response.data.message || "Page create successfull",
          icon: "success",
        });
      }
    }
  };

  return (
    <div className="mt-6 max-w-5xl mx-auto">
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No</TableHead>
            <TableHead>Page Name</TableHead>
            <TableHead>Path</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {}
          {data.data.map((page: any, index: number) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell className="font-medium whitespace-nowrap">
                {page.pageName}
              </TableCell>
              <TableCell className="whitespace-nowrap">{page.path}</TableCell>
              <TableCell className="text-right space-x-4">
                <Button onClick={() => handleDeletePage(page._id)}>
                  <Trash />
                </Button>
                <Button variant="outline" asChild>
                  <Link href={`/dashboard/super-admin/pages/${page._id}`}>
                    <Edit />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link
                    href={`/dashboard/super-admin/pages/page-content/${page._id}`}
                  >
                    <View />
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PagesTable;
