import { Injectable } from '@angular/core';

import { ProductInterface } from './products';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: ProductInterface[] = [];

  constructor() { }

  addToCart(product: ProductInterface): void {
    this.items.push(product);
  }

  getItems(): ProductInterface[] 
  {
    return this.items;
  }

  clearCart(): ProductInterface[]
  {
    this.items = [];
    return this.items;
  }
}
