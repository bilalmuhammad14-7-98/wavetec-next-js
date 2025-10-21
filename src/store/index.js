import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/postsSlice';
import languageReducer from './slices/languageSlice';

export const store = configureStore({
  reducer: {
    language: languageReducer,
    posts: postsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
