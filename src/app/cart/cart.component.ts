import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductInterface } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: ProductInterface[] = this.cartService.getItems();;

  constructor(private cartService: CartService) { }

  ngOnInit(): void { }

}
