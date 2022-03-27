import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product, ProductBody } from '../models';
import { ResponseData } from '../models/http';

const baseURL = 'http://localhost:3000/'

// const headers = new HttpHeaders({
//   'Content-Type': 'application/json'
// });
@Injectable({
  providedIn: 'root'
})
export class ProductActionService {

  constructor(
    private http: HttpClient
  ) { }

  getProductById(pid: string): Observable<ResponseData> {

    let productsURL = baseURL + 'product/' + pid
    return this.http.get<ResponseData>(productsURL).pipe(
      catchError(this.handleError)
    )
  }

  addProduct(body: ProductBody) {
    let addProductURL = baseURL + 'product';
    return this.http.post<ResponseData>(addProductURL, body).pipe(
      catchError(this.handleError)
    );
  }

  updateProduct(pid: string, body: ProductBody) {
    let updateProductURL = baseURL + 'product/' + pid;
    return this.http.put<ResponseData>(updateProductURL, body).pipe(
      catchError(this.handleError)
    );
  }

  getProducts(): Observable<ResponseData> {
    let productsURL = baseURL + 'products';
    return this.http.get<ResponseData>(productsURL).pipe(
      catchError(this.handleError)
    )
  }

  deleteProduct(pid: string): Observable<ResponseData> {
    let productsURL = baseURL + 'product/' + pid;
    return this.http.delete<ResponseData>(productsURL).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
