"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import CreateBannerModal from "./CreateBannerModal";

const CreateBannerButton = () => {
  const [isCreateBannerModelOpen, setIsCreateBannerModelOpen] = useState(false);
  const handleModalOpen = () => {
    setIsCreateBannerModelOpen(!isCreateBannerModelOpen);
  };
  return (
    <div>
      <div className="h-14 mx-auto bg-white p-4 rounded flex items-center justify-between">
        <span className="text-lg font-semibold">Banner Items</span>
        <Button onClick={handleModalOpen}>Create New Banner</Button>
      </div>

      {isCreateBannerModelOpen && (
        <CreateBannerModal
          isOpen={isCreateBannerModelOpen}
          setIsOpen={setIsCreateBannerModelOpen}
        />
      )}
    </div>
  );
};

export default CreateBannerButton;
