import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/types/entity.types';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IBasket } from 'src/app/reducers/basket/basket.reducer';
import * as BasketActions from 'src/app/reducers/basket/basket.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];
  productsSubscription: Subscription;
  constructor(
    private ProductService: ProductService,
    private store: Store<IBasket>
  ) {}
  ngOnInit(): void {
    this.productsSubscription = this.ProductService.getProducts().subscribe(
      (data) => (this.products = data)
    );
  }
  add(product: IProduct) {
    this.store.dispatch(BasketActions.addProduct({ product }));
  }
}
