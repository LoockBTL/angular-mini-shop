import { IProductBasket } from '../types/entity.types';
import { IBasket, basketReducer } from './basket/basket.reducer';
export interface AppState {
  basket: IBasket;
}
export const AppStore = {
  basket: basketReducer,
};
