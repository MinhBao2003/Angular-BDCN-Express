import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartItem } from 'src/interface/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = []; // Make sure to replace CartItem with your actual item type
  private currentItemId = 1; // Initialize the current item ID
  private apiUrl = 'http://localhost:3000/Cart';

  constructor(private http: HttpClient) {}

  getcarts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addToCart(item: CartItem): Observable<any> {
    return this.http.post<any>(this.apiUrl, item);
  }
  getNextItemId(): number {
    // Return the current item ID and then increment it for the next call
    return this.currentItemId++;
  }
  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.apiUrl);
  }
  getMaxItemId(): number {
    if (this.cartItems.length === 0) {
      return 0;
    }

    return Math.max(...this.cartItems.map((item) => item.id));
  }

  updateCartItemQuantity(itemId: number | string, quantity: number): Observable<any> {
    const updateUrl = `${this.apiUrl}/${itemId}`;
    return this.http.patch(updateUrl, { quantity });
  }
  updateCartItems() {
    this.getCartItems().subscribe((items) => {
      this.cartItems = items;
    });
  }
  updateCart(cartItem: CartItem): Observable<any> {
    const url = `${this.apiUrl}/${cartItem.id}`;
    return this.http.put(url, cartItem);
  }

  deleteCartItem(itemId: number | string): Observable<any> {
    const deleteUrl = `${this.apiUrl}/${itemId}`;
    return this.http.delete(deleteUrl);
  }
}
