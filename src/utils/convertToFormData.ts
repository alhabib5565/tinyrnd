import { FieldValues } from "react-hook-form";

export const convertToFormData = (value: FieldValues) => {
  const { image, ...restValue } = value;
  const formData = new FormData();

  if (image) {
    formData.append("file", image);
  }
  if (Object.values(restValue).length > 0) {
    formData.append("data", JSON.stringify(restValue));
  }
  return formData;
};
