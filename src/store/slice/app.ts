import { createSlice } from '@reduxjs/toolkit';

// 初始化的state
const initialState = {
  count: 0,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

// dispatch 使用
export const { increment, decrement } = appSlice.actions;

// 注册到store中
export default appSlice.reducer;
