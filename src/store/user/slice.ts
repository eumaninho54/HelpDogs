import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./initialState"
import { ISetFirstAccess } from "./interfaces";

const usersSlice = createSlice({
  name: "admin",
  initialState: initialState,
  reducers: {
    setFirstAccess(state, {payload}: ISetFirstAccess){
      return {...state, firstAccess: payload.firstAccess}
    }
  },
  extraReducers: {}
})

export default usersSlice.reducer;
export const {setFirstAccess} = usersSlice.actions;
