import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckhangService } from 'src/app/server/checkhang/checkhang.service';
import { DanhanghangService } from 'src/app/server/danhanhang/danhanghang.service';
import { DonhuyService } from 'src/app/server/donhuy/donhuy.service';

@Component({
  selector: 'app-datthanhcong',
  templateUrl: './datthanhcong.component.html',
  styleUrls: ['./datthanhcong.component.css']
})
export class DatthanhcongComponent implements OnInit {
  orders: any[] = [];
  isCancelEnabled: boolean = true;
  cancelCountdown: number = 30; // 3 giờ tính bằng giây
  cancelTimer: any;
  constructor(private checkhangService: CheckhangService,private donhuy: DonhuyService,private danhanhang: DanhanghangService) { }

  ngOnInit(): void {
    this.loadOrders();

      // Lấy danh sách đơn hàng từ API khi component được khởi tạo
      // Ví dụ:
      // this.orderService.getOrders().subscribe(orders => {
      //   this.orders = orders;
      // });

  }

  loadOrders() {
    this.checkhangService.getAllOrders().subscribe(
      (data) => {
        this.orders = data;
        console.log('Orders:', this.orders); // Do whatever you want with the orders data
      },
      (error) => {
        console.error('Error loading orders:', error);
      }
    );
  }
  truncateId(id: string): string {
    const maxLength = 4; // Set the maximum length of the truncated ID
    return id.substring(0, maxLength); // Extract the first 4 characters of the ID
  }

  startCancelCountdown() {
    this.cancelTimer = setTimeout(() => {
      // Sau khi hết thời gian đếm ngược, ngăn người dùng click vào nút "Hủy Đơn Hàng"
      this.isCancelEnabled = false;
    }, this.cancelCountdown * 1000); // Chuyển đổi từ giây sang mili giây
  }

  cancelOrder(order: any) {
    // Ngăn người dùng click vào nút "Hủy Đơn Hàng" nếu đếm ngược vẫn đang chạy
    if (!this.isCancelEnabled) {
      return;
    }

    // Hủy đếm ngược nếu người dùng đã click vào nút "Hủy Đơn Hàng"
    if (this.cancelTimer) {
      clearTimeout(this.cancelTimer);
    }
    this.donhuy.cancelOrder(order.id).subscribe(() => {
      this.donhuy.moveOrderToCancelled(order).subscribe(() => {
        // Xóa đơn hàng khỏi danh sách hiện tại hoặc làm bất kỳ điều gì cần thiết
      });
    });
  }
  yesOrder(order: any) {
    this.danhanhang.cancelOrder(order.id).subscribe(() => {
      this.danhanhang.moveOrderToCancelled(order).subscribe(() => {
        // Xóa đơn hàng khỏi danh sách hiện tại hoặc làm bất kỳ điều gì cần thiết
      });
    });
  }
}
