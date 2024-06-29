import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { PhanQuyenloginService } from 'src/app/server/PhanQuyen/phan-quyenlogin.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CartService } from 'src/app/server/cart/cart.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None  // Sử dụng None để kiểu áp dụng toàn bộ trang
})
export class NavbarComponent implements OnInit{
  loggedInUser: any;
  maxItemId: number = 0;

  constructor(private breakpointObserver: BreakpointObserver,private authService: PhanQuyenloginService,
     private router: Router,private cartService: CartService) {}

  ngOnInit(): void {
    // Lấy thông tin người dùng đã đăng nhập khi thành phần được tạo
    this.loggedInUser = this.authService.getLoggedInUser();
    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet,
    ]).subscribe(result => {
      if (result.matches) {
        // Hiển thị giao diện tương ứng với màn hình di động hoặc máy tính bảng
      }
    });
    this.cartService.updateCartItems();
    this.cartService.getCartItems().subscribe((items) => {
      this.maxItemId = this.cartService.getMaxItemId();
    });
  }
  // kiểm tra xem người dùng đã đăng nhập chưa
  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  // lấy tên người dùng
  getUsername(): string {
    return this.authService.getUsername();
  }

  // xử lý đăng xuất
  logout() {
    // xóa dữ liệu người dùng và điều hướng đến trang đăng nhập
    this.authService.setLoggedInUser(null);
    this.router.navigate(['/dangnhap']);
  }
}
