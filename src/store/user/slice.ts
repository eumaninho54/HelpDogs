import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./initialState"
import { clearStateReducer } from "./reducers/clearState";
import { setFavoriteReducer } from './reducers/setFavorite';
import { setFirstAccessReducer } from './reducers/setFirstAccess';

const usersSlice = createSlice({
  name: "admin",
  initialState: initialState,
  reducers: {
    setFirstAccess(state, payload){
      return setFirstAccessReducer(state, payload)
    },
    setFavorite(state, payload) {
      return setFavoriteReducer(state, payload)
    },
    clearState(state, payload){
      return clearStateReducer(state, payload)
    }
  },
  extraReducers: {}
})

export default usersSlice.reducer;
export const {setFirstAccess, setFavorite, clearState} = usersSlice.actions;
