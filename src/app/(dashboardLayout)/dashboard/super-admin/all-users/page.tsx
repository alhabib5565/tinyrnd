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

const AllUsersPage = () => {
  const { data, isLoading } = useGetAllUserQuery({});
  const [deleteUser] = useDeleteUserMutation();
  const handleDeleteUser = async (id: string) => {
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
      const response = (await deleteUser({ id })) as any;
      if (response?.error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: response?.error?.message || "Delete failed",
        });
      } else {
        Swal.fire({
          title: "Deleted!",
          text: response.data.message || "User create successfull",
          icon: "success",
        });
      }
    }
  };

  if (isLoading) {
    return <div className="h-screen grid place-items-center">Loading...</div>;
  }
  return (
    <div className="mt-6">
      <div className="h-12 bg-white p-4 rounded mb-6">All Users</div>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No</TableHead>
            <TableHead>User Name</TableHead>
            <TableHead>Designation</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {}
          {data.data.map((user: TUser, index: number) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell className="font-medium whitespace-nowrap">
                {user.name}
              </TableCell>
              <TableCell className="whitespace-nowrap">
                {user.designation}
              </TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell className="text-right space-x-4">
                <Button onClick={() => handleDeleteUser(user._id)}>
                  <Trash />
                </Button>
                <Button variant="outline" asChild>
                  <Link href={`/dashboard/super-admin/all-users/${user._id}`}>
                    <Edit />
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

export default AllUsersPage;
