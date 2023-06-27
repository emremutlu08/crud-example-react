import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toast } from "react-toastify";

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
        body: JSON.stringify({ ...body, userId: 1, reactions: 0 }),
        responseHandler(response) {
          if (!response.ok) {
            toast("Couldn't created!", { type: "error" });
          } else {
            toast("Successfully created!");
          }

          return response.json().then((data) => {
            return { ...data };
          });
        },
      }),
    }),
    readPosts: builder.query<Posts, { limit?: number; skip?: number }>({
      query: ({ limit = 3, skip = 3 }) => ({
        url: `?limit=${limit}&skip=${skip}`,
        responseHandler(response) {
          if (!response.ok) {
            toast("Couldn't read!", { type: "error" });
          }

          return response.json().then((data) => {
            return { ...data };
          });
        },
      }),
    }),
    updatePost: builder.mutation<Post, Partial<Post>>({
      query: ({ id, ...body }) => ({
        url: `/${id}`,
        method: "PUT",
        body: JSON.stringify({ ...body }),
        responseHandler(response) {
          if (!response.ok) {
            toast("Couldn't updated!", { type: "error" });
          } else {
            toast("Successfully updated!");
          }

          return response.json().then((data) => {
            return { ...data, id };
          });
        },
      }),
    }),
    deletePost: builder.mutation<Post, Partial<Post>>({
      query: ({ id }) => ({
        url: `/${id}`,
        method: "DELETE",
        responseHandler(response) {
          if (!response.ok) {
            toast("Couldn't deleted!", { type: "error" });
          } else {
            toast("Successfully deleted!");
          }

          return response.json().then((data) => {
            return { ...data, id };
          });
        },
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
