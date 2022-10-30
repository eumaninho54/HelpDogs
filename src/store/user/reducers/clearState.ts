import { WritableDraft } from "immer/dist/internal";
import { IUser } from "../interfaces";
import { initialState } from "../initialState";

export const clearStateReducer = (state: WritableDraft<IUser>) => {
  return initialState
}