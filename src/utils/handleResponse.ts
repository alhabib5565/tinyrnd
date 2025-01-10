import { toast } from "sonner";

interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
}

export const handleResponse = <T>(
  res: ApiResponse<T>,
  toastId: string | number,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (res?.success) {
    toast.success(res?.message || "Request successful", {
      id: toastId,
    });
    setIsOpen(false);
  } else {
    toast.error(res?.message || "something went wrong", {
      id: toastId,
    });
  }
};
