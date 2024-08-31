import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateWithIndex(index: number) {
  const currentDate = new Date(); // Get the current date
  currentDate.setDate(currentDate.getDate() - index); // Add the index to the current date

  // Define options for formatting
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Format the date
  // @ts-ignore
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  return formattedDate;
}
