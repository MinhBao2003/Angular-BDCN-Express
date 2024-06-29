import { Component, OnInit } from '@angular/core';
import { TextService } from 'src/app/server/text/text.service';
import { TrangchuModel } from 'src/interface/trangchu1.model';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component{
  trangchuData!: TrangchuModel;

  constructor(private trangchuService: TextService) {}

  ngOnInit(): void {
    this.trangchuService.getData().subscribe((data: TrangchuModel[]) => {
      // Chỉ lấy dữ liệu từ id 1
      const foundItem = data.find((item: TrangchuModel) => item.id === 1);

      if (foundItem) {
        this.trangchuData = foundItem;
      } else {
        console.error('Item with id 1 not found');
      }
    });
  }
}
