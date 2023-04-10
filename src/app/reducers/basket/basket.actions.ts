import { createAction, props } from '@ngrx/store';
import { IProduct } from 'src/app/types/entity.types';

export const addProduct = createAction(
  '[Basket] Add',
  props<{ product: IProduct }>()
);
export const deleteProduct = createAction(
  '[Basket] Delete',
  props<{ id: string }>()
);
export const incrementProduct = createAction(
  '[Basket] Increment',
  props<{ id: string }>()
);
export const dicrementProduct = createAction(
  '[Basket] Decrement',
  props<{ id: string }>()
);
