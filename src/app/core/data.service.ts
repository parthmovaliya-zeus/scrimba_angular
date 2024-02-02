import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ICustomer, IOrder } from '../interfaces';

// import {} from "../../assets"

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _http: HttpClient) {}

  baseUrl: string = '../../assets/';

  getCustomers(): Observable<ICustomer[]> {
    return this._http
      .get<ICustomer[]>(this.baseUrl + 'customers.json')
      .pipe(catchError(this.handleError));
  }

  getCustomer(id: number): Observable<ICustomer | null> {
    return this._http.get<ICustomer[]>(this.baseUrl + 'customers.json').pipe(
      map((customers: ICustomer[]) => {
        let customer = customers.filter((cust: ICustomer) => cust.id === id);
        return customer && customer.length ? customer[0] : null;
      }),
      catchError(this.handleError)
    );
  }

  getOrders(id: number): Observable<IOrder[]> {
    return this._http.get<IOrder[]>(this.baseUrl + 'orders.json').pipe(
      map((orders: IOrder[]) => {
        let custOrders = orders.filter(
          (order: IOrder) => order.customerId === id
        );
        return custOrders;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return throwError(errMessage);
    }
    return throwError(error || 'Node.js server error');
  }
}
