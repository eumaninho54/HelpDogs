import { combineReducers } from '@reduxjs/toolkit';
import { StoreState } from '.';
import userSlice from "./user/slice"

export const reducers = combineReducers<StoreState>({
  user: userSlice
})