import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DEMO_DATA } from '../data';
import { Product } from '../models';


@Injectable({
  providedIn: 'root'
})
export class ProductActionService {

  constructor() { }

  getProductById(id: number): Observable<Product> {

    let dummyProduct: Product = {
      pid: 21,
      name: 'abc',
      price: 13.45,
      type: 'Toys',
      isActive: true
    }

    let product: Product = DEMO_DATA.find(
      product => product.pid === id
    ) as Product

    console.log(product)


    // return of(dummyProduct)
    return of(product)

  }

  addProduct() {

  }

  updateProduct() {

  }


}
