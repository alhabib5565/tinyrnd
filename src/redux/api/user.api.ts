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
    getAllUser: builder.query({
      query: () => ({
        url: "/users",
      }),
      providesTags: ["user"],
    }),
  }),
});

export const { useCreateUserMutation, useGetAllUserQuery } = userApi;
