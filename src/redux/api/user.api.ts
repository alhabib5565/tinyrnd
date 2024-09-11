import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => ({
        url: "/users/create-user",
        body: data,
        method: "POST",
      }),
      invalidatesTags: ["user"],
    }),

    editUser: builder.mutation({
      query: ({ data, id }) => ({
        url: `/users/edit/${id}`,
        body: data,
        method: "PATCH",
      }),
      invalidatesTags: ["user"],
    }),

    deleteUser: builder.mutation({
      query: ({ id }) => ({
        url: `/users/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"],
    }),

    getAllUser: builder.query({
      query: () => ({
        url: "/users",
      }),
      providesTags: ["user"],
    }),

    getSingleUser: builder.query({
      query: ({ id }) => ({
        url: `/users/${id}`,
      }),
      providesTags: ["user"],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useGetAllUserQuery,
  useDeleteUserMutation,
  useEditUserMutation,
  useGetSingleUserQuery,
} = userApi;
