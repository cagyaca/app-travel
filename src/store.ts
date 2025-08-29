import React from "react";
import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Article {
  id: number;
  attributes: {
    title: string;
    body: string;
  };
}

export interface Comment {
  id: number;
  attributes: {
    author?: string;
    message: string;
  };
}

interface ArticleState {
  list: Article[];
  detail: Article | null;
  loading: boolean;
  error: string | null;
}

interface CommentState {
  list: Comment[];
  loading: boolean;
  error: string | null;
}

const initialArticleState: ArticleState = {
  list: [],
  detail: null,
  loading: false,
  error: null,
};

const initialCommentState: CommentState = {
  list: [],
  loading: false,
  error: null,
};

export const fetchArticles = createAsyncThunk("articles/fetchAll", async (page: number = 1) => {
  const res = await fetch(
    `https://extra-brooke-yeremiadio-46b2183e.koyeb.app/api/articles?populate=*&pagination[page]=${page}&pagination[pageSize]=6`
  );
  if (!res.ok) throw new Error("Failed to fetch articles");
  const data = await res.json();
  return data.data as Article[];
});


export const fetchArticleById = createAsyncThunk("articles/fetchById", async (id: string) => {
  const res = await fetch(
    `https://extra-brooke-yeremiadio-46b2183e.koyeb.app/api/articles/${id}`
  );
  if (!res.ok) throw new Error("Failed to fetch article detail");
  const data = await res.json();
  return data.data as Article;
});

export const fetchComments = createAsyncThunk("comments/fetch", async (documentId: string) => {
  const res = await fetch(
    `https://extra-brooke-yeremiadio-46b2183e.koyeb.app/api/comments/${documentId}`
  );
  if (!res.ok) throw new Error("Failed to fetch comments");
  const data = await res.json();
  return data.data as Comment[];
});

const articleSlice = createSlice({
  name: "articles",
  initialState: initialArticleState,
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
        state.error = "Failed to fetch articles";
      })
      .addCase(fetchArticleById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchArticleById.fulfilled, (state, action) => {
        state.loading = false;
        state.detail = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch article detail";
      });
  },
});

const commentSlice = createSlice({
  name: "comments",
  initialState: initialCommentState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
        state.error = null;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch comments";
      });
  },
});

export const store = configureStore({
  reducer: {
    articles: articleSlice.reducer,
    comments: commentSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
