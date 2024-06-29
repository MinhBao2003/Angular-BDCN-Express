import { Component } from '@angular/core';
import { DanhanghangService } from 'src/app/server/danhanhang/danhanghang.service';

@Component({
  selector: 'app-danhanhang',
  templateUrl: './danhanhang.component.html',
  styleUrls: ['./danhanhang.component.css']
})
export class DanhanhangComponent {
  data: any[] = [];

  constructor(private danhanhang: DanhanghangService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.danhanhang.getData().subscribe(data => {
      this.data = data; // Lưu dữ liệu vào biến data
    });
  }
}
