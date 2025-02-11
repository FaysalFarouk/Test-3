import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Product } from '../../model/Product';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ProductsComponent {
  @Input() product: Product = {
    name: '',
    ImageFile: new File([], ''),
    price: 0,
    description: '',
  };

  textColor: string = 'blue';
}
