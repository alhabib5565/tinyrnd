import { baseApi } from "./baseApi";

const imageGalleryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createImage: builder.mutation({
      query: (data) => ({
        url: "/images/create-image",
        body: data,
        method: "POST",
      }),
      invalidatesTags: ["image-gallery"],
    }),

    editImage: builder.mutation({
      query: ({ data, id }) => ({
        url: `/images/${id}`,
        body: data,
        method: "PATCH",
      }),
      invalidatesTags: ["image-gallery"],
    }),

    deleteImage: builder.mutation({
      query: ({ id }) => ({
        url: `/images/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["image-gallery"],
    }),

    getAllImageGalleryItems: builder.query({
      query: () => ({
        url: "/images",
      }),
      providesTags: ["image-gallery"],
    }),

    getSingleImageGalleryItem: builder.query({
      query: ({ id }) => ({
        url: `/images/${id}`,
      }),
      providesTags: ["image-gallery"],
    }),
  }),
});

export const {
  useCreateImageMutation,
  useGetAllImageGalleryItemsQuery,
  useGetSingleImageGalleryItemQuery,
  useDeleteImageMutation,
  useEditImageMutation,
} = imageGalleryApi;
