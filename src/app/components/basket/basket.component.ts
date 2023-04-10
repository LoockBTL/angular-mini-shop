import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/reducers';
import * as BasketActions from 'src/app/reducers/basket/basket.actions';
import { IBasket, basketReducer } from 'src/app/reducers/basket/basket.reducer';
import {
  basketFeatureSelector,
  basketSelector,
} from 'src/app/reducers/basket/basket.selectors';
import { IProductBasket } from 'src/app/types/entity.types';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  providers: [],
})
export class BasketComponent {
  products: IProductBasket[];
  products$: Subscription;
  constructor(private store: Store) {
    this.products$ = this.store
      .select(basketSelector)
      .subscribe((s: IBasket) => {
        this.products = Object.values(s);
      });
  }
  increment(id: string) {
    this.store.dispatch(BasketActions.incrementProduct({ id }));
  }
  dicrement(id: string) {
    this.store.dispatch(BasketActions.dicrementProduct({ id }));
  }
  deleteProduct(id: string) {
    this.store.dispatch(BasketActions.deleteProduct({ id }));
  }
  check() {
    console.log(this.products);
  }
}
