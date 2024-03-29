import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Post, Posts } from "../types/posts-type";

const initialState: Posts = {
  posts: [],
  total: 0,
  skip: 0,
  limit: 0,
};

export const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: () => initialState,
    addPosts: (state, action: PayloadAction<Posts>) => {
      // Posts must be unique
      const newPosts = action.payload.posts.filter(
        (post) => !state.posts.find((p) => p.id === post.id)
      );
      state.posts = [...state.posts, ...newPosts];
      state.total = action.payload.total;
      state.skip = action.payload.skip;
      state.limit = action.payload.limit;
    },
    addSinglePost: (state, action: PayloadAction<Post>) => {
      // Post must be unique
      if (!state.posts.find((post) => post.id === action.payload.id)) {
        state.posts = [...state.posts, action.payload];
      }
    },

    deletePost: (state, action: PayloadAction<{ id: number }>) => {
      state.posts = [
        ...state.posts.filter((post) => post.id !== action.payload.id),
      ];
    },
  },
});

export const { reset, deletePost, addPosts, addSinglePost } = posts.actions;
export default posts.reducer;
