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

import { useDeleteImageMutation } from "@/redux/api/image.gallery.api";
const GalleryItemOptionsDropdown = ({ _id }: { _id: string }) => {
  const [deleteGalleryItem] = useDeleteImageMutation();

  const handleDeleteGalleryItem = async () => {
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
      const response = (await deleteGalleryItem({ id: _id })) as any;
      if (response?.error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: response?.error?.message || "Delete failed",
        });
      } else {
        Swal.fire({
          title: "Deleted!",
          text: response.data.message || "Gallery item delete successfull",
          icon: "success",
        });
      }
    }
  };
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="px-0 py-0 hover:bg-slate-100 h-10 w-10"
          >
            <EllipsisVertical />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 p-2 space-y-1">
          <DropdownMenuItem
            onClick={handleDeleteGalleryItem}
            className="cursor-pointer"
          >
            <LucideTrash className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer" asChild>
            <Link href={`/dashboard/super-admin/image-gallery/${_id}`}>
              <Edit className="mr-2 h-4 w-4" />
              <span>Edit</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default GalleryItemOptionsDropdown;
