"use client";
import CreateImageModal from "@/components/dashboard/super-admin/imageGallery/CreateImageModal";
import GalleryItemOptionsDropdown from "@/components/dashboard/super-admin/imageGallery/GalleryItemOptionsDropdown";
import Loading from "@/components/shared/Loading";
import { Button } from "@/components/ui/button";
import { useGetAllImageGalleryItemsQuery } from "@/redux/api/image.gallery.api";
import { TImageGalleryItem } from "@/types/ImageGallery.type";
import React, { useState } from "react";

const ImageGalleryItemsPage = () => {
  const [createGalleryItemModalOpen, setCreateGalleryItemModalOpen] =
    useState(false);

  // api call
  const { data, isLoading } = useGetAllImageGalleryItemsQuery({});
  if (isLoading) {
    return <Loading />;
  }
  console.log(data.data);
  return (
    <div>
      <div className="h-14 my-6 mx-auto bg-white p-4 rounded flex items-center justify-between">
        <span>Create Image Gallery Item</span>{" "}
        <Button
          onClick={() =>
            setCreateGalleryItemModalOpen(!createGalleryItemModalOpen)
          }
        >
          Create new image
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {data?.data?.map((item: TImageGalleryItem) => (
          <div
            key={item._id}
            className="relative min-h-[300px] bg-cover bg-center w-full rounded-md overflow-hidden"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            {/* Apply the gradient overlay here */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex justify-between flex-col p-4 text-white text-lg">
              <div className="text-right">
                <GalleryItemOptionsDropdown _id={item._id || ""} />
              </div>
              <h3>{item.caption}</h3>
            </div>
          </div>
        ))}
      </div>
      {createGalleryItemModalOpen && (
        <CreateImageModal
          isOpen={createGalleryItemModalOpen}
          setIsOpen={setCreateGalleryItemModalOpen}
        />
      )}
    </div>
  );
};

export default ImageGalleryItemsPage;
