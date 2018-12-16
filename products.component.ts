import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from './products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  productName = 'A Book';
  products = [];
  isDisabled = true;
  private productSubscription: Subscription;

  constructor(private productsService: ProductsService) {
    setTimeout(() => {
      this.isDisabled = false;
    }, 3000);
   }

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.productSubscription = this.productsService.productUpdated.subscribe(() => {
      this.products = this.productsService.getProducts();
    });
  }
  onAddProduct(form) {
    if (form.valid) {
      this.productsService.addProduct(form.value.productName);
    }
  }
  onProductRemove(productName: string) {
    this.products = this.products.filter(p => p !== productName);
  }
  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }
}
