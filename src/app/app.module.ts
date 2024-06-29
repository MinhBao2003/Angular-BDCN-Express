import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TrangchuComponent } from './components/Webdislay/trangchu/trangchu.component';
import { ContactComponent } from './components/Webdislay/contact/contact.component';
import { NavbarComponent } from './components/Webdislay/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PhanQuyenloginComponent } from './components/login/phan-quyenlogin/phan-quyenlogin.component';
import { Product1Component } from './components/chitietsanpham/product1/product1.component';
import { Product2Component } from './components/chitietsanpham/product2/product2.component';
import { DangkyComponent } from './components/login/dangky/dangky.component';
import { ChataoComponent } from './components/chatbot/chatao/chatao.component';
import { CartComponent } from './components/Webdislay/cart/cart.component';
import { VitriComponent } from './components/Webdislay/vitri/vitri.component';
import { Produc3Component } from './components/chitietsanpham/produc3/produc3.component';
import { BaohanhComponent } from './components/chitietsanpham/baohanh/baohanh.component';
import { TyuetComponent } from './components/chitietsanpham/tyuet/tyuet.component';
import { LienheComponent } from './components/chitietsanpham/lienhe/lienhe.component';
import { ThdanhgiaComponent } from './components/chitietsanpham/thdanhgia/thdanhgia.component';
import { MomoComponent } from './components/bank/momo/momo.component';
import { ZalopayComponent } from './components/bank/zalopay/zalopay.component';
import { ApplepayComponent } from './components/bank/applepay/applepay.component';
@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    ContactComponent,
    NavbarComponent,
    PhanQuyenloginComponent,
    Product1Component,
    Product2Component,
    DangkyComponent,
    ChataoComponent,
    CartComponent,
    VitriComponent,
    Produc3Component,
    BaohanhComponent,
    TyuetComponent,
    LienheComponent,
    ThdanhgiaComponent,
    MomoComponent,
    ZalopayComponent,
    ApplepayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatSidenavModule, BrowserAnimationsModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
