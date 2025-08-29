import React from "react";

import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Article {
  id: number;
  title: string;
  body: string;
}

interface ArticleState {
  list: Article[];
  loading: boolean;
  error: string | null;
}

const initialState: ArticleState = {
  list: [],
  loading: false,
  error: null,
};

export const fetchArticles = createAsyncThunk("articles/fetch", async (page: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=6`);
  return (await res.json()) as Article[];
});

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
        state.error = null;
      })
      .addCase(fetchArticles.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch";
      });
  },
});

export const store = configureStore({
  reducer: { articles: articleSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
