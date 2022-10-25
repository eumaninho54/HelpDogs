import { configureStore } from "@reduxjs/toolkit"
import {persistStore} from "redux-persist"
import { persistedReducer } from "./persistReducers";

// Store configuration
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
}) 

const persist = persistStore(store)

export {store, persist}
