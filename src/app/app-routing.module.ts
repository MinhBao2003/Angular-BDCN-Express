import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrangchuComponent } from './components/Webdislay/trangchu/trangchu.component';
import { ContactComponent } from './components/Webdislay/contact/contact.component';
import { PhanQuyenloginComponent } from './components/login/phan-quyenlogin/phan-quyenlogin.component';
import { Product1Component } from './components/chitietsanpham/product1/product1.component';
import { Product2Component } from './components/chitietsanpham/product2/product2.component';
import { DangkyComponent } from './components/login/dangky/dangky.component';
import { VitriComponent } from './components/Webdislay/vitri/vitri.component';
import { CartComponent } from './components/Webdislay/cart/cart.component';
import { BaohanhComponent } from './components/chitietsanpham/baohanh/baohanh.component';
import { MomoComponent } from './components/bank/momo/momo.component';
import { ZalopayComponent } from './components/bank/zalopay/zalopay.component';
import { ApplepayComponent } from './components/bank/applepay/applepay.component';



const routes: Routes = [
  {path:'',component:TrangchuComponent},
  {path:'trangchu',component:TrangchuComponent},
  {path:'lienhe',component:ContactComponent},
  {path: 'dangnhap', component: PhanQuyenloginComponent },
  {path:'dangky',component:DangkyComponent},
  {path:'vitri',component:VitriComponent},
  {path:'giohang',component:CartComponent},
  {path: 'product/1', component: Product1Component },
  {path: 'product/2', component: Product2Component },
  {path:'baohanh',component:BaohanhComponent},
  {path:'momo',component:MomoComponent},
  {path:'zalopay',component:ZalopayComponent},
  {path:'applepay',component:ApplepayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
