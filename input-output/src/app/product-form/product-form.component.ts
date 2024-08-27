import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../module/product';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {

  

  product: Product = {
    dept: []
  }
  productDept: string = ''

  constructor() {
    
  }

  onSubmit() {
    this.product.dept = this.productDept.split(', ')
     console.log(this.product)
  }
}
