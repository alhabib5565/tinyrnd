"use client";
import { useGetAllUserQuery } from "@/redux/api/user.api";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TUser } from "@/types/user.type";
import { Button } from "@/components/ui/button";
import { Edit, View } from "lucide-react";

const AllUsersPage = () => {
  const { data, isLoading } = useGetAllUserQuery({});
  console.log(data, "data");
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
                <Button variant="outline">
                  <View />
                </Button>
                <Button>
                  <Edit />
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
