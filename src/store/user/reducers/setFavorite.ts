import { WritableDraft } from 'immer/dist/internal';
import {ISetFavorites, IUser} from '../interfaces';

export const setFavoriteReducer = (state: WritableDraft<IUser>, {payload: {favorites}}: ISetFavorites) => {
  const newState = {...state};

  newState.favorites = newState.favorites.filter(
    item => item.id != favorites.id,
  );

  JSON.stringify(newState.favorites) == JSON.stringify(state.favorites)
    ? newState.favorites.push(favorites)
    : null;

  return newState;
};
