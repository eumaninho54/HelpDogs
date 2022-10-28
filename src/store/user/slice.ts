import { ISetFavorites } from './interfaces/index';
import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./initialState"
import { ISetFirstAccess } from "./interfaces";

const usersSlice = createSlice({
  name: "admin",
  initialState: initialState,
  reducers: {
    setFirstAccess(state, {payload}: ISetFirstAccess){
      return {...state, firstAccess: payload.firstAccess}
    },
    setFavorite(state, {payload:{ favorites }}: ISetFavorites){
      const newState = {...state}
  
      newState.favorites = newState.favorites.filter((item) => item.id != favorites.id)

      JSON.stringify(newState.favorites) == JSON.stringify(state.favorites)
      ? newState.favorites.push(favorites)
      : null
  
      return newState
    }
  },
  extraReducers: {}
})

export default usersSlice.reducer;
export const {setFirstAccess, setFavorite} = usersSlice.actions;
