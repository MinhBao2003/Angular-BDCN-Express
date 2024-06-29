import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from 'src/interface/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = []; // Make sure to replace CartItem with your actual item type
  private apiUrl = 'http://localhost:3000/Cart';

  constructor(private http: HttpClient) {}

  addToCart(item: CartItem): Observable<any> {
    return this.http.post<any>(this.apiUrl, item);
  }

  getCart(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
