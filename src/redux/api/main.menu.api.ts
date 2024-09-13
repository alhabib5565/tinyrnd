import { baseApi } from "./baseApi";

const mainMenuApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createMainMenu: builder.mutation({
      query: (data) => ({
        url: "/main-menus/create-main-menu",
        body: data,
        method: "POST",
      }),
      invalidatesTags: ["main-menu"],
    }),

    editMainMenu: builder.mutation({
      query: ({ data, id }) => ({
        url: `/main-menus/${id}`,
        body: data,
        method: "PATCH",
      }),
      invalidatesTags: ["main-menu"],
    }),

    rearrangeMainMenuItems: builder.mutation({
      query: ({ data }) => ({
        url: `/main-menus/rearrange/menu-item`,
        body: data,
        method: "PATCH",
      }),
      invalidatesTags: ["main-menu"],
    }),

    deleteMainMenu: builder.mutation({
      query: ({ id }) => ({
        url: `/main-menus/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["main-menu"],
    }),

    deleteDropdownItem: builder.mutation({
      query: ({ mainMenuItemId, dropdownItemId }) => ({
        url: `/main-menus/${mainMenuItemId}/dropdown/${dropdownItemId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["main-menu"],
    }),

    getAllMainMenu: builder.query({
      query: () => ({
        url: "/main-menus",
      }),
      providesTags: ["main-menu"],
    }),

    getSingleMainMenu: builder.query({
      query: ({ id }) => ({
        url: `/main-menus/${id}`,
      }),
      providesTags: ["main-menu"],
    }),
  }),
});

export const {
  useCreateMainMenuMutation,
  useGetAllMainMenuQuery,
  useGetSingleMainMenuQuery,
  useEditMainMenuMutation,
  useDeleteMainMenuMutation,
  useDeleteDropdownItemMutation,
  useRearrangeMainMenuItemsMutation,
} = mainMenuApi;
