export interface IUser{
  firstAccess: boolean;
}

export interface ISetFirstAccess {
  payload: {
    firstAccess: boolean
  }
}