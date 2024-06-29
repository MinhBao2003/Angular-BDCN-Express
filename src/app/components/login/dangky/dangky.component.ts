import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PhanQuyenloginService } from 'src/app/server/PhanQuyen/phan-quyenlogin.service';

@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css']
})
export class DangkyComponent {
  tenDangNhap: string = '';
  matKhau: string = '';
  gmail: string = '';
  sdt: number | null = null;
  errorMessage: string | null = null; // Used for general error messages
  tenDangNhapError: string | null = null;
  matKhauError: string | null = null;
  gmailError: string | null = null;
  sdtError: string | null = null;
  gmailFormatError: string | null = null;
  sdtFormatError: string | null = null;


  constructor(private authService: PhanQuyenloginService, private router: Router) {}

  dangKy(): void {
    // Reset error messages
    this.errorMessage = null;
    this.tenDangNhapError = null;
    this.matKhauError = null;
    this.gmailError = null;
    this.sdtError = null;

    // Validate inputs
    if (this.tenDangNhap.trim() === '') {
      this.tenDangNhapError = 'Tên đăng nhập không được để trống';
      return;
    }

    if (this.matKhau.trim() === '') {
      this.matKhauError = 'Mật khẩu không được để trống';
      return;
    }

    if (this.gmail.trim() === '') {
      this.gmailError = 'Email không được để trống';
      return;
    }

    if (!this.gmail.includes('@')) {
      this.gmailError = 'Email thiếu ký tự @';
      return;
    }

    const customEmailRegex = /^[a-zA-Z0-9+]+@gmail\.com$/;
    if (!customEmailRegex.test(this.gmail)) {
      this.gmailError = 'Định dạng email không đúng';
      return;
    }

    if (this.sdt === null) {
      this.sdtError = 'Số điện thoại không được để trống';
      return;
    }

    if (this.sdt.toString().length !== 10) {
      this.sdtError = 'Số điện thoại phải có 10 chữ số';
      return;
    }

    if (isNaN(this.sdt)) {
      this.sdtError = 'Số điện thoại chỉ được nhập số';
      return;
    }
    // Validate Gmail format
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!gmailRegex.test(this.gmail)) {
      this.gmailFormatError = 'Định dạng email không đúng';
      return;
    }


  // Validate phone number format
  if (isNaN(this.sdt)) {
    this.sdtFormatError = 'Số điện thoại chỉ được nhập số';
    return;
  }
    // Check if the account already exists
    this.authService.accountExists(this.tenDangNhap).subscribe(
      exists => {
        if (exists) {
          this.tenDangNhapError = 'Tài khoản đã tồn tại.';
        } else {
          // Nếu tài khoản không tồn tại, tiến hành đăng ký
          this.authService.dangKy(this.tenDangNhap, this.matKhau, this.gmail, this.sdt!)
            .subscribe(
              response => {
                console.log('Tài khoản đã được đăng ký thành công:', response);
                this.router.navigate(['/dangnhap']); // Chuyển hướng đến TrangchuComponent
                // Thực hiện các hành động sau khi đăng ký thành công
              },
              error => {
                this.errorMessage = 'Đăng ký tài khoản không thành công';
                console.error('Đăng ký tài khoản không thành công:', error);
                // Xử lý lỗi nếu cần thiết
              }
            );
        }
      },
      error => {
        this.errorMessage = 'Error checking account existence';
        console.error('Error checking account existence:', error);
        // Xử lý lỗi khi kiểm tra sự tồn tại của tài khoản
      }
    );
  }

}
