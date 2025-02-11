import { Component, Output, EventEmitter } from '@angular/core';
import { Product } from '../../model/Product';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  product: Product = {
    name: '',
    ImageFile: new File([], ''),
    price: 0,
    description: '',
  };

  @Output() productAdded = new EventEmitter<Product>();

  onSubmit() {
    if (this.product.name && this.product.price && this.product.description) {
      this.productAdded.emit(this.product);
      this.product = {
        name: '',
        ImageFile: new File([], ''),
        price: 0,
        description: '',
      };
    }
  }

  onFileChange(event: any) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.product.ImageFile = file; // Store file for upload

      // Generate preview URL
      const reader = new FileReader();
      reader.onload = () => {
        this.product.ImageFile = reader.result as unknown as File; // Convert to Data URL
      };
      reader.readAsDataURL(file);
    }
  }
}
