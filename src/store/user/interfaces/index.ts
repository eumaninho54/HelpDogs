import { DogDataDTO } from './../../../dtos/dogDataDTO';

export interface IUser{
  firstAccess: boolean;
  favorites: DogDataDTO[]
}

export interface ISetFirstAccess {
  payload: {
    firstAccess: boolean
  }
}

export interface ISetFavorites {
  payload: {
    favorites: DogDataDTO
  }
}