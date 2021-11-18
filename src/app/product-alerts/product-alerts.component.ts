import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductInterface } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product!: ProductInterface;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
