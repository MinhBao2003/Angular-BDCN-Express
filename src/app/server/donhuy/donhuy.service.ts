import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonhuyService {

  constructor(private http: HttpClient) { }

  cancelOrder(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/checkhang/${id}`);
  }

  moveOrderToCancelled(order: any): Observable<any> {
    return this.http.post('http://localhost:3000/don_huy', order);
  }


  getData() {
    return this.http.get<any>('http://localhost:3000/don_huy'); // Thay đổi URL tùy theo nhu cầu của bạn
  }
}
