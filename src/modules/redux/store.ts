import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { postsApi } from "../posts/apis/posts-api";
import postsReducer from "../posts/slices/posts-slice";

export const store = configureStore({
  reducer: {
    postsReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([postsApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
