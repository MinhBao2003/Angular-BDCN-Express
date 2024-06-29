import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/server/cart/cart.service';
import { DathangService } from 'src/app/server/dathang/dathang.service';
import { CartItem } from 'src/interface/cart-item.model';
import { TrangchuModel } from 'src/interface/trangchu1.model';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  trangchuData: any;// Use the actual type
  cartItems: CartItem[] = [];
  isCalculateButtonEnabled = false;
  selectedItems: CartItem[] = [];
  total: number = 0;
  constructor(private cartService: CartService,private orderService:DathangService) {
    this.trangchuData = {} as TrangchuModel;
  }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
    });

  }
  increaseQuantity(item: CartItem): void {
    // Call your service to increase the quantity
    this.cartService.updateCartItemQuantity(item.id, item.quantity + 1).subscribe(() => {
      // Update the cart items after quantity increase
      this.cartService.getCartItems().subscribe((items: CartItem[]) => {
        this.cartItems = items;
      });
    });
    this.updateCalculateButtonStatus();
  }

  decreaseQuantity(item: CartItem): void {
    if (item.quantity > 1) {
      // Call your service to decrease the quantity
      this.cartService.updateCartItemQuantity(item.id, item.quantity - 1).subscribe(() => {
        // Update the cart items after quantity decrease
        this.cartService.getCartItems().subscribe((items: CartItem[]) => {
          this.cartItems = items;
        });
      });
    }
    this.updateCalculateButtonStatus();
  }
  deleteCartItem(itemId: number | string): void {
    // Call your service to delete the item
    this.cartService.deleteCartItem(itemId).subscribe(() => {
      // Update the cart items after deletion
      this.cartService.getCartItems().subscribe((items: CartItem[]) => {
        this.cartItems = items;
      });
    });
    this.updateCalculateButtonStatus();
  }
  // your-component.component.ts
updateCalculateButtonStatus(): void {
  this.isCalculateButtonEnabled = this.cartItems.some((item) => item.isSelected);

  // Calculate total if at least one item is selected
  if (this.isCalculateButtonEnabled) {
    this.calculateTotal();
  } else {
    // Reset total if no items are selected
    this.total = 0;
  }
}

calculateTotal(): void {
  // Add logic to calculate the total for selected items
  this.selectedItems = this.cartItems.filter(
    (item) => item.isSelected && typeof item.price !== 'undefined' && typeof item.quantity === 'number'
  );

  this.total = this.selectedItems.reduce((sum, item) => {
    const itemPrice = typeof item.price === 'string' ? parseFloat(item.price) : item.price;
    return sum + (itemPrice || 0) * item.quantity;
  }, 0);
}
placeOrder() {
  // const currentDate = new Date();
  //   const formattedDate = currentDate.toISOString().slice(0, 10);
  //   const formattedTime = currentDate.toTimeString().slice(0, 8);
  const orders = this.cartItems
    .filter((item) => item.isSelected)
    .map((item) => ({
      img: item.img,
      rom: item.rom,
      ram: '8GB',
      id: this.cartService.getNextItemId(),
      quanty: item.quantity,
      price: this.total,
      name: item.name,
      //date: formattedDate,
      //clock: formattedTime,
    }));

  // Send orders to the backend API
  this.orderService.placeOrder(orders).subscribe(
    (response) => {
      // Handle successful response from the server
      console.log('Order placed successfully!', response);
    },
    (error) => {
      // Handle error
      console.error('Error placing order:', error);
    }
  );
}
}
