import { combineReducers } from '@reduxjs/toolkit';
import userSlice from "./user/slice"

export const reducers = combineReducers({
  user: userSlice
})