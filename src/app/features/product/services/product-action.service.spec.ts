import { HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { Product, ProductBody, PROD_TYPES } from '../models';
import { ProductActionService } from './product-action.service';
const baseURL = 'http://localhost:3000/'

describe('ProductActionService', () => {
  let service: ProductActionService;
  let httpClientSpy: any

  beforeEach(() => {
    httpClientSpy = {
      post: jest.fn(),
      get: jest.fn(),
      put: jest.fn(),
      delete: jest.fn()
    }
    service = new ProductActionService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getProduct', (done) => {
    const pid = 'abc'
    const mockProduct: Product = {
      pid,
      name: 'Product Sample 0',
      price: 19.95,
      type: PROD_TYPES[2],
      isActive: true
    }
    const url = baseURL + 'product/' + pid;
    const res = {
      data: mockProduct,
      message: 'Product retrieved.'
    };
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res))

    service.getProductById(pid).subscribe({
      next: response => {
        expect(response).toEqual(res);
        done();
      }
    })

    expect(httpClientSpy.get).toBeCalledWith(url)
    expect(httpClientSpy.get).toBeCalledTimes(1)
  });

  it('should throw error from getProduct', (done) => {
    const pid = 'xxx'
    const erroMsg = 'Product not found.'
    const errorRes: HttpErrorResponse = new HttpErrorResponse({
      error: erroMsg,
      status: 404
    })
    const url = baseURL + 'product/' + pid;
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(throwError(errorRes))

    service.getProductById(pid).subscribe({
      error: _ => {
        done();
      }
    })

    expect(httpClientSpy.get).toBeCalledWith(url)
    expect(httpClientSpy.get).toBeCalledTimes(1)
  });

  it('should test getProducts', (done) => {
    const mockProducts: Product[] = [{
      pid: 'abc',
      name: 'Product Sample 0',
      price: 19.95,
      type: PROD_TYPES[2],
      isActive: true
    }]
    const url = baseURL + 'products';
    const res = {
      data: mockProducts,
      message: 'All products retrieved.'
    };
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res))

    service.getProducts().subscribe({
      next: response => {
        expect(response).toEqual(res);
        done();
      }
    })

    expect(httpClientSpy.get).toBeCalledWith(url)
    expect(httpClientSpy.get).toBeCalledTimes(1)
  });

  it('should test addProduct', (done) => {
    const mockProduct: ProductBody = {
      name: 'Product Sample 2',
      price: 19.95,
      type: PROD_TYPES[2],
      isActive: true
    }
    const url = baseURL + 'product';
    const res = {
      message: 'Product added.'
    };
    jest.spyOn(httpClientSpy, 'post').mockReturnValue(of(res))

    service.addProduct(mockProduct).subscribe({
      next: response => {
        expect(response).toEqual(res);
        done();
      }
    })

    expect(httpClientSpy.post).toBeCalledWith(url, mockProduct)
    expect(httpClientSpy.post).toBeCalledTimes(1)
  });

  it('should test updateProduct', (done) => {
    const pid = 'def'
    const mockProduct: ProductBody = {
      name: 'Product Sample 3',
      price: 19.95,
      type: PROD_TYPES[2],
      isActive: true
    }
    const url = baseURL + 'product/' + pid;
    const res = {
      message: 'Product updated.'
    };
    jest.spyOn(httpClientSpy, 'put').mockReturnValue(of(res))

    service.updateProduct(pid, mockProduct).subscribe({
      next: response => {
        expect(response).toEqual(res);
        done();
      }
    })

    expect(httpClientSpy.put).toBeCalledWith(url, mockProduct)
    expect(httpClientSpy.put).toBeCalledTimes(1)
  });

  it('should test deleteProduct', (done) => {
    const pid = 'def'
    const url = baseURL + 'product/' + pid;
    const res = {
      message: 'Product deleted.'
    };
    jest.spyOn(httpClientSpy, 'delete').mockReturnValue(of(res))

    service.deleteProduct(pid).subscribe({
      next: response => {
        expect(response).toEqual(res);
        done();
      }
    })

    expect(httpClientSpy.delete).toBeCalledWith(url)
    expect(httpClientSpy.delete).toBeCalledTimes(1)
  });
});
