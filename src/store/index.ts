import { configureStore } from "@reduxjs/toolkit"
import {persistStore} from "redux-persist"
import { persistedReducer } from "./persistReducers";
import { IUser } from "./user/interfaces";

// Store configuration
export interface StoreState {
  user: IUser
}

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
}) 

const persist = persistStore(store)

export {store, persist}
