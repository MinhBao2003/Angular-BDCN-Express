import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Review } from 'src/interface/review.model';

@Injectable({
  providedIn: 'root'
})
export class PhanQuyenloginService {
  private loggedInUserSubject = new BehaviorSubject<any>(null);
  loggedInUser: any; // Replace 'any' with your user model/interface
  loggedInUser$ = this.loggedInUserSubject.asObservable();
  private reviewapiUrl = 'http://localhost:3000/review';
  private apiUrl = 'http://localhost:3000/Login'; // URL của API đăng nhập

  constructor(private http: HttpClient, private router: Router) { 
    // Check if there is a user in the local storage during service initialization
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      this.loggedInUser = JSON.parse(storedUser);
      this.loggedInUserSubject.next(this.loggedInUser);
    }
  }
  // Thêm phương thức để lấy danh sách đánh giá từ API
  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.reviewapiUrl);
  }
  login(username: string, password: string) {
    // Kiểm tra xem người dùng đã nhập tên đăng nhập và mật khẩu hay chưa
    if (!username) {
      return Promise.reject('Chưa nhập tên đăng nhập');
    }

    if (!password) {
      return Promise.reject('Chưa nhập mật khẩu');
    }

    // Gọi API để kiểm tra đăng nhập
    return this.http.get<any[]>(this.apiUrl).toPromise()
      .then(users => {
        if (!users) {
          return Promise.reject('Lỗi khi lấy dữ liệu đăng nhập');
        }

        const user = users.find(u => u.username === username && u.password === password);

        if (!user) {
          return Promise.reject('Sai tên đăng nhập hoặc mật khẩu');
        }

        return user;
      })
      .catch(error => {
        return Promise.reject('Lỗi khi gọi API đăng nhập');
      });
  }

  checkPermission(user: any) {
    // Kiểm tra quyền đăng nhập của người dùng
    if (user.role === 'Admin') {
      // Người dùng có quyền Admin
      return 'Admin';
    } else if (user.role === 'Staff') {
      // Người dùng có quyền Staff
      return 'Staff';
    } else if (user.role === 'Customer') {
      // Người dùng có quyền Customer
      return 'Customer';
    } else {
      // Người dùng không có quyền
      return null;
    }
  }
  dangKy(tenDangNhap: string, matKhau: string,gmail:string,sdt:number) {
    const newUser = {
      username: tenDangNhap,
      password: matKhau,
      gmail:gmail,
      sdt:sdt,
      permission: 3, // Quyền truy cập của khách hàng
      role: 'Customer'
    };

    return this.http.post(this.apiUrl, newUser);
  }
  accountExists(username: string): Observable<boolean> {
    // Make a request to your backend API to check if the account exists
    return this.http.get<any[]>(`${this.apiUrl}?username=${username}`).pipe(
      map(users => users.some(user => user.username === username))
    );
  }

  // Retrieve the logged-in user data
  getLoggedInUser(): any {
    return this.loggedInUser || {
      id: null,
      username: '',
      permission: null,
      role: 'Guest',
    };
  }
  isLoggedIn(): boolean {
    return !!this.loggedInUser;
  }

  getUsername(): string {
    return this.loggedInUser ? this.loggedInUser.username : '';
  }

  // Update the setLoggedInUser method to store the user in local storage
  setLoggedInUser(user: any): void {
    this.loggedInUser = user || {
      id: null,
      username: '',
      permission: null,
      role: 'Guest',
    };
    localStorage.setItem('loggedInUser', JSON.stringify(this.loggedInUser));
    this.loggedInUserSubject.next(this.loggedInUser);
  }
}
