import { Component } from '@angular/core';
import { ProductinformationService } from 'src/app/server/productinformation/productinformation.service';
import { ProductInformation } from 'src/interface/productinformation.model';

@Component({
  selector: 'app-vitri',
  templateUrl: './vitri.component.html',
  styleUrls: ['./vitri.component.css']
})
export class VitriComponent {
  productData: ProductInformation[] = [];
  constructor(private productService: ProductinformationService) {}

  ngOnInit(): void {
    this.getProductInformation();
  }

  getProductInformation(): void {
    this.productService.getProductInformation().subscribe((data) => {
      this.productData = data;
      console.log(this.productData); // Dữ liệu từ API
    });
  }
}
