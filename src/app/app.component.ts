import { Component } from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  products: Product[] = [];

  addProduct(product: Product) {
    this.products.push(product);
  }
}
