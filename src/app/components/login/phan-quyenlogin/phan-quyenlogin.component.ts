import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PhanQuyenloginService } from 'src/app/server/PhanQuyen/phan-quyenlogin.service';
import { ReviewService } from 'src/app/server/review/review.service';
import { Review } from 'src/interface/review.model';

@Component({
  selector: 'app-phan-quyenlogin',
  templateUrl: './phan-quyenlogin.component.html',
  styleUrls: ['./phan-quyenlogin.component.css']
})
export class PhanQuyenloginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  loggedInUser: any; // Add this line to declare the loggedInUser property
  rom: string = '';
  price: string = '';
  img: string = '';
  constructor(private reviewService: ReviewService,private authService: PhanQuyenloginService, private router: Router) {}
  ngOnInit(): void {
    this.loggedInUser = this.authService.getLoggedInUser();
  }
  login() {
    this.authService.login(this.username, this.password)
      .then(user => {
        const permission = this.authService.checkPermission(user);

        if (!permission) {
          this.errorMessage = 'Bạn không có quyền truy cập';
          return;
        }

        if (permission === 'Admin' || permission === 'Staff' || permission === 'Customer') {
          this.authService.setLoggedInUser(user);
          this.router.navigate(['/trangchu']);
        }
      })
      .catch(error => {
        this.errorMessage = 'Đăng nhập thất bại: ' + error;
      });
  }
}
