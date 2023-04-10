import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IBasket, basketReducer } from './basket.reducer';
import { IProductBasket } from 'src/app/types/entity.types';

export const basketFeatureSelector = createFeatureSelector<IBasket>('basket');

export const basketSelector = createSelector(
  basketFeatureSelector,
  (state) => state
);
