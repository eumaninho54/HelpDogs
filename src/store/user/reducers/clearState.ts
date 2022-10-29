import { WritableDraft } from "immer/dist/internal";
import { ISetFirstAccess, IUser } from "../interfaces";
import { initialState } from "../initialState";

export const clearStateReducer = (state: WritableDraft<IUser>, {payload}: ISetFirstAccess) => {
  return initialState
}