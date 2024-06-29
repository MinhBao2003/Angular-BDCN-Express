import { Component } from '@angular/core';
import { DonhuyService } from 'src/app/server/donhuy/donhuy.service';

@Component({
  selector: 'app-donhuy',
  templateUrl: './donhuy.component.html',
  styleUrls: ['./donhuy.component.css']
})
export class DonhuyComponent {
  data: any[] = [];

  constructor(private donhuy: DonhuyService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.donhuy.getData().subscribe(data => {
      this.data = data; // Lưu dữ liệu vào biến data
    });
  }
}
