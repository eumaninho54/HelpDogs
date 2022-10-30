import { ISetFirstAccess, ISetFavorites } from './interfaces/index';
import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./initialState"
import { clearStateReducer } from "./reducers/clearState";
import { setFavoriteReducer } from './reducers/setFavorite';
import { setFirstAccessReducer } from './reducers/setFirstAccess';

const usersSlice = createSlice({
  name: "admin",
  initialState: initialState,
  reducers: {
    setFirstAccess(state, {payload}: ISetFirstAccess){
      return setFirstAccessReducer(state, {payload})
    },
    setFavorite(state, {payload}: ISetFavorites) {
      return setFavoriteReducer(state, {payload})
    },
    clearState(){
      return clearStateReducer()
    }
  },
  extraReducers: {}
})

export default usersSlice.reducer;
export const {setFirstAccess, setFavorite, clearState} = usersSlice.actions;
