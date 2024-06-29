import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DathangService {

  private apiUrl = 'http://localhost:3000/donhang';

  constructor(private http: HttpClient) {}

  placeOrder(orderData: any): Observable<any> {
    return this.http.post(this.apiUrl, orderData);
  }
  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
