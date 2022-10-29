import { WritableDraft } from "immer/dist/internal";
import { ISetFirstAccess, IUser } from "../interfaces";

export const setFirstAccessReducer = (state: WritableDraft<IUser>, {payload}: ISetFirstAccess) => {

  return {...state, firstAccess: payload.firstAccess}
}