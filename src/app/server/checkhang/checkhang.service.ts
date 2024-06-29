import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckhangService {

  private apiUrl = 'http://localhost:3000/checkhang';

  constructor(private http: HttpClient) {}

  checkhang(orderData: any): Observable<any> {
    // Assuming you need to send a POST request with orderData to your API
    return this.http.post<any>(this.apiUrl, orderData);
  }
  saveOrder(orderData: any): Observable<any> {
    return this.http.post(this.apiUrl, orderData);
  }
  getOrderDetails(orderId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${orderId}`);
  }
  getAllOrders(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
