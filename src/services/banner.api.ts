"use server";

import { BASE_URL } from "@/constant/common";
import { TBanner } from "@/types/banner.type";
import { revalidateTag } from "next/cache";

// Create a banner
export const createBanner = async (data: any) => {
  try {
    const response = await fetch(`${BASE_URL}/banners/create-banner`, {
      method: "POST",
      // body: JSON.stringify(data), not working. i need to explore why not working?
      body: data,
    });
    revalidateTag("banner");
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

// Fetch all banners
export const fetchBanners = async () => {
  try {
    const response = await fetch(`${BASE_URL}/banners`, {
      next: {
        tags: ["banner"],
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch banners");
    }
    const data = await response.json();
    return data?.data as TBanner[];
  } catch (error) {
    console.log(error);
  }
};

// Update a banner
export const updateBanner = async (id: string, data: FormData) => {
  try {
    const response = await fetch(`${BASE_URL}/banners/${id}`, {
      method: "PATCH",
      body: data,
    });
    if (!response.ok) {
      throw new Error(`Failed to update banner with ID ${id}`);
    }
    revalidateTag("banner");
    return await response.json();
  } catch (error) {
    console.error(`Error updating banner with ID ${id}:`, error);
    throw error;
  }
};

// Get a single banner by ID
export const getBannerById = async (
  id: string
): Promise<TBanner | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}/banners/${id}`, {
      next: { tags: ["banner"] },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch banner with ID ${id}`);
    }
    const data = await response.json();
    return data as TBanner;
  } catch (error) {
    console.error(`Error fetching banner with ID ${id}:`, error);
  }
};

// Delete a banner
export const deleteBanner = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/banners/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete testimonial");
    }
    revalidateTag("banner");
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
