import { Subject } from 'rxjs';

export class ProductsService {
    // data you want to user from other components;
    // utility functions e.g. logging or sending http requests here
    // Subject is like an EventEmitter
    private products = ['A Book'];
    productUpdated = new Subject();

    addProduct(productName: string) {
        this.products.push(productName);
        this.productUpdated.next();
    }

    getProducts() {
        return [...this.products];
    }
    removeProduct(productName: string) {
        this.products = this.products.filter(p => p !== productName);
        this.productUpdated.next();
    }
}
