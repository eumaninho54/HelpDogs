import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import { reducers } from "./reducers";

export const persistedReducer = persistReducer(
  {
    key: "maninho",
    version: 1,
    storage: AsyncStorage
  }, 
  reducers
)