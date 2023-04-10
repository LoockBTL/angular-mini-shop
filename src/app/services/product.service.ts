import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../types/entity.types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getProducts() {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products');
  }
  getProductById(id: string) {
    return this.http.get<IProduct>(`https://fakestoreapi.com/products/${id}`);
  }
}
