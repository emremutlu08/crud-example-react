import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Post, Posts } from "../types/posts-type";

export const postsApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.APP_HOST}/api/posts`, // TODO: replace with your own API
  }),
  endpoints: (builder) => ({
    createPost: builder.mutation<Post, Partial<Post>>({
      query: (body) => ({
        url: "",
        method: "POST",
        body: JSON.stringify({ ...body }),
      }),
    }),
    readPosts: builder.query<Posts, { limit?: number; skip?: number }>({
      query: ({ limit = 3, skip = 3 }) => `?limit=${limit}&skip=${skip}`,
    }),
    updatePost: builder.mutation<Post, Partial<Post>>({
      query: ({ id, ...body }) => ({
        url: `/${id}`,
        method: "PUT",
        body: JSON.stringify({ ...body }),
      }),
    }),
    deletePost: builder.mutation<Post, Partial<Post>>({
      query: ({ id }) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreatePostMutation,
  useReadPostsQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApi;
