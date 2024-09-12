"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, EllipsisVertical, LucideTrash } from "lucide-react";
import Link from "next/link";
import Swal from "sweetalert2";
import { useDeleteMainMenuMutation } from "@/redux/api/main.menu.api";
const MenuItemDropdown = ({ _id }: { _id: string }) => {
  const [deleteMainMenu] = useDeleteMainMenuMutation();

  const handleDeleteMainMenu = async () => {
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
      const response = (await deleteMainMenu({ id: _id })) as any;
      if (response?.error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: response?.error?.message || "Delete failed",
        });
      } else {
        Swal.fire({
          title: "Deleted!",
          text: response.data.message || "MainMenu delete successfull",
          icon: "success",
        });
      }
    }
  };
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <EllipsisVertical />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 p-2 space-y-1">
          <DropdownMenuItem
            onClick={handleDeleteMainMenu}
            className="cursor-pointer"
          >
            <LucideTrash className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer" asChild>
            <Link href={`/dashboard/super-admin/main-menu-items/${_id}`}>
              <Edit className="mr-2 h-4 w-4" />
              <span>Edit</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MenuItemDropdown;
