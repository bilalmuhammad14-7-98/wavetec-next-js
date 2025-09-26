import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [], // array of posts
  lastSynced: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action) {
      state.list = action.payload;
      state.lastSynced = new Date().toISOString();
    },
    clearPosts(state) {
      state.list = [];
      state.lastSynced = null;
    },
  },
});

export const { setPosts, clearPosts } = postsSlice.actions;
export default postsSlice.reducer;
