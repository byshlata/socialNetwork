import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PostType } from '../../types';

export const initialState: Array<PostType> = [
  {
    qotd_date: '',
    quote: {
      id: 0,
      dialogue: false,
      private: false,
      tags: [],
      url: '',
      favorites_count: 0,
      upvotes_count: 0,
      downvotes_count: 0,
      author: '',
      author_permalink: '',
      body: '',
    },
  },
];

export const postSlice = createSlice({
  name: 'postSlice',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<PostType[]>) => [...action.payload],
    deletePost: () => initialState,
  },
});

export const { addPost, deletePost } = postSlice.actions;
