import { baseApi } from "./baseApi";

const pageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPage: builder.mutation({
      query: (data) => ({
        url: "/pages/create-page",
        body: data,
        method: "POST",
      }),
      invalidatesTags: ["page"],
    }),

    editPage: builder.mutation({
      query: ({ data, id }) => ({
        url: `/pages/${id}`,
        body: data,
        method: "PATCH",
      }),
      invalidatesTags: ["page"],
    }),

    deletePage: builder.mutation({
      query: ({ id }) => ({
        url: `/pages/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["page"],
    }),

    getAllPages: builder.query({
      query: () => ({
        url: "/pages",
      }),
      providesTags: ["page"],
    }),

    getSinglePage: builder.query({
      query: ({ id }) => ({
        url: `/pages/${id}`,
      }),
      providesTags: ["page"],
    }),
  }),
});

export const {
  useCreatePageMutation,
  useGetAllPagesQuery,
  useGetSinglePageQuery,
  useDeletePageMutation,
  useEditPageMutation,
} = pageApi;
