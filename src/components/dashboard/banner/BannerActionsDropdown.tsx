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
import Swal from "sweetalert2";
import { deleteBanner } from "@/services/banner.api";
import UpdateBannerModal from "./UpdateBannerModal";
import { TBanner } from "@/types/banner.type";

const BannerActionsDropdown = ({ bannerData }: { bannerData: TBanner }) => {
  const [isUpdateBannerModelOpen, setIsUpdateBannerModelOpen] =
    React.useState(false);
  const handleModalOpen = () => {
    setIsUpdateBannerModelOpen(!isUpdateBannerModelOpen);
  };

  const handleDeleteBannerItem = async () => {
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
      const response = await deleteBanner(bannerData._id);
      console.log(response);
      if (response?.error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: response?.error?.message || "Delete failed",
        });
      } else {
        Swal.fire({
          title: "Deleted!",
          text: response?.message || "Banner item delete successfull",
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
            onClick={handleDeleteBannerItem}
            className="cursor-pointer"
          >
            <LucideTrash className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            className="cursor-pointer"
            onClick={handleModalOpen}
          >
            <Edit className="mr-2 h-4 w-4" />
            <span>Edit</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {isUpdateBannerModelOpen && (
        <UpdateBannerModal
          bannerData={bannerData}
          isOpen={isUpdateBannerModelOpen}
          setIsOpen={setIsUpdateBannerModelOpen}
        />
      )}
    </div>
  );
};

export default BannerActionsDropdown;
