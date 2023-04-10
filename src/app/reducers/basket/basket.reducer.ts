import { createReducer, on } from '@ngrx/store';
import { IProductBasket } from 'src/app/types/entity.types';
import * as basketActions from './basket.actions';

export interface IBasket {
  [id: string]: IProductBasket;
}

export const initialState: IBasket = {};

export const basketReducer = createReducer(
  initialState,
  on(basketActions.addProduct, (state, { product }) => {
    if (Object.keys(state).find((obj) => obj === product.id)) {
      return state;
    }
    return { ...state, [product.id]: { product, amount: 1 } };
  }),
  on(basketActions.deleteProduct, (state, { id }) => {
    let newStateId = Object.keys(state).filter((obj) => obj != id);
    let newState = {};
    for (let i = 0; i < newStateId.length; i++) {
      newState = { ...newState, [newStateId[i]]: state[newStateId[i]] };
    }
    return newState;
  }),
  on(basketActions.incrementProduct, (state, { id }) => {
    let num = Object.keys(state).find((obj) => obj == id);
    if (num !== undefined) {
      let count = state[num].amount + 1;
      return {
        ...state,
        [state[num].product.id]: { ...state[num], amount: count },
      };
    }
    return state;
  }),
  on(basketActions.dicrementProduct, (state, { id }) => {
    let num = Object.keys(state).find((obj) => obj == id);
    if (num !== undefined) {
      let count = state[num].amount > 1 ? state[num].amount - 1 : 1;

      return {
        ...state,
        [state[num].product.id]: { ...state[num], amount: count },
      };
    }
    return state;
  })
);
