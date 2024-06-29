import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { PhanQuyenloginService } from 'src/app/server/PhanQuyen/phan-quyenlogin.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None  // Sử dụng None để kiểu áp dụng toàn bộ trang
})
export class NavbarComponent implements OnInit{
  loggedInUser: any;

  constructor(private breakpointObserver: BreakpointObserver,private authService: PhanQuyenloginService, private router: Router) {}

  ngOnInit(): void {
    // Fetch the logged-in user information when the component is created
    this.loggedInUser = this.authService.getLoggedInUser();
    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet,
    ]).subscribe(result => {
      if (result.matches) {
        // Hiển thị giao diện tương ứng với màn hình di động hoặc máy tính bảng
      }
    });
  }

  // Add this method to check if the user is logged in
  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  // Add this method to get the username
  getUsername(): string {
    return this.authService.getUsername();
  }

  // Add this method to handle logout
  logout() {
    // Your logout logic goes here
    // For example, clear the user data and navigate to the login page
    this.authService.setLoggedInUser(null);
    this.router.navigate(['/dangnhap']);
  }
}
