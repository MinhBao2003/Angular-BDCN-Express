import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CheckhangService } from 'src/app/server/checkhang/checkhang.service';
import { DathangService } from 'src/app/server/dathang/dathang.service';
import { CartService } from '../../../server/cart/cart.service';
import { Router } from '@angular/router';
import { CartItem } from 'src/interface/cart-item.model';


@Component({
  selector: 'app-dondathang',
  templateUrl: './dondathang.component.html',
  styleUrls: ['./dondathang.component.css']
})
export class DondathangComponent implements OnInit {
  carts: any[] = [];
  namekhach: string = '';
  sdt: string = '';
  email: string = '';
  dcnh: string = '';
  dcch: string = '';
  note: string = '';

  cartItems: CartItem[] = [];
  showPhoneNumberError: boolean = false;
  carts1: CartItem[] = []; // assuming you have an array for storing cart items
  constructor(private router:Router,private orderService: DathangService,private snackBar: MatSnackBar,private checkhangService: CheckhangService,private cart:CartService) {}



  ngOnInit(): void {
    this.loadOrders();

  }

  loadOrders() {
    this.cart.getcarts().subscribe(
      (data) => {
        this.carts = data.map(order => ({
          ...order,
          total: this.calculateTotal(order.price, order.quantity)
        }));
      },
      (error) => {
        console.error('Error loading orders:', error);
      }
    );
  }

  calculateTotal(price: string, quantity: number): number {
    // Loại bỏ tất cả các ký tự không phải số từ chuỗi giá tiền
    const numericPriceString = price.replace(/[^\d.]/g, '');
    // Chuyển đổi chuỗi giá tiền thành số
    const numericPrice = parseFloat(numericPriceString);
    // Kiểm tra nếu giá trị sau khi chuyển đổi không phải là một số hợp lệ, trả về 0
    if (isNaN(numericPrice)) {
      return 0;
    }
    // Tính tổng giá trị
    return numericPrice * quantity;
  }

  placeOrder() {

    this.removeSelectedItemsFromCart();
    if (this.namekhach.trim() === '') {
      alert('Vui lòng nhập tên khách hàng.');
      return;
    }

    if (!/^\d+$/.test(this.sdt)) {
      alert('Số điện thoại chỉ được chứa các chữ số.');
      return;
    }

    if (!this.email.endsWith('@gmail.com')) {
      alert('Email phải là địa chỉ Gmail.');
      return;
    }

    if (this.dcnh.trim() === '') {
      alert('Vui lòng nhập địa chỉ nhận hàng.');
      return;
    }

    if (this.dcch.trim() === '' || this.dcch === null) {
      alert('Vui lòng chọn địa chỉ của hàng giao.');
      return;
    }

    // Nếu tất cả các điều kiện kiểm tra đều đã được đáp ứng, bạn có thể chuyển đến trang đặt hàng thành công
    this.router.navigate(['/datthanhcong']);

    // Nếu thông tin đầy đủ, thực hiện đặt hàng
    // Extract relevant data from the orders array
    const orderToSave = this.carts
      .filter(order => order.id !== '')
      .map(order => ({
        name: order.name,
        rom: order.rom,
        ram: order.ram,
        price: order.price,
        quantity: order.quantity,
        id: order.id,
        img: order.img

      }));
      // Lấy ngày và giờ hiện tại
    const currentDateTime = new Date();
    const formattedDate = currentDateTime.toISOString().slice(0, 10); // Lấy ngày hiện tại dưới dạng 'YYYY-MM-DD'
    const formattedTime = currentDateTime.toLocaleTimeString(); // Lấy thời gian hiện tại
    // Add additional form fields to the order data
    const additionalData = {
      namekhach: this.namekhach,
      sdt: this.sdt,
      email: this.email,
      dcnh: this.dcnh,
      dcch: this.dcch,
      note: this.note,
      date: formattedDate, // Ngày hiện tại
      clock: formattedTime, // Giờ hiện tại
    };

    // Merge order data and additional data
    const completeOrderData = { ...orderToSave[0], ...additionalData };

    // Call the API service to save the order data
    this.checkhangService.saveOrder(completeOrderData).subscribe(response => {
      // Handle the response from the API as needed
      console.log('Order placed successfully:', response);
    });
  }
  checkPhoneNumber() {
    // Kiểm tra độ dài của số điện thoại
    if (this.sdt.length !== 10) {
      this.showPhoneNumberError = true;
    } else {
      this.showPhoneNumberError = false;
    }
  }
  removeSelectedItemsFromCart() {
    // Lặp qua danh sách các mặt hàng và xóa các mặt hàng được chọn
    this.carts = this.carts.filter(item => !item.selected);
  }

}
