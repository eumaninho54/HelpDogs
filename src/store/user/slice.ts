import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./initialState"
import { ISetFirstAccess } from "./interfaces";

const usersSlice = createSlice({
  name: "admin",
  initialState: initialState,
  reducers: {
    
  },
  extraReducers: {}
})

export default usersSlice.reducer;
//export const {} = usersSlice.actions;
