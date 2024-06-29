import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { viLocale } from 'ngx-bootstrap/locale';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
import { Iphone15promax1tbComponent } from './components/chitietsanpham/iphone15promax1tb/iphone15promax1tb.component';
import { MacbookProComponent } from './components/chitietsanpham/macbook-pro/macbook-pro.component';
import { SamsungLTV55Inch55LS03BAComponent } from './components/chitietsanpham/samsung-ltv-55-inch-55-ls03-ba/samsung-ltv-55-inch-55-ls03-ba.component';
import { BluetoothAppleAirPods2Component } from './components/chitietsanpham/bluetooth-apple-air-pods-2/bluetooth-apple-air-pods-2.component';
import { AppleWatchUltraComponent } from './components/chitietsanpham/apple-watch-ultra/apple-watch-ultra.component';
import { CapchaComponent } from './components/login/capcha/capcha.component';
import { AppleComponent } from './components/phone/apple/apple.component';
import { SamsungComponent } from './components/phone/samsung/samsung.component';
import { XiaomiComponent } from './components/phone/xiaomi/xiaomi.component';
import { RealmeComponent } from './components/phone/realme/realme.component';
import { NokiaComponent } from './components/phone/nokia/nokia.component';
import { AsusComponent } from './components/phone/asus/asus.component';
import { XemtatcaComponent } from './components/phone/xemtatca/xemtatca.component';
import { Xiaomi13ProComponent } from './components/chitietsanpham/xiaomi-13-pro/xiaomi-13-pro.component';
import { Realme11Pro8GB256GBComponent } from './components/chitietsanpham/realme-11-pro-8-gb-256-gb/realme-11-pro-8-gb-256-gb.component';
import { NokiaC324GB128GBComponent } from './components/chitietsanpham/nokia-c32-4-gb-128-gb/nokia-c32-4-gb-128-gb.component';
import { ASUSROGPhone7Ultimate16GB512GBComponent } from './components/chitietsanpham/asus-rog-phone-7-ultimate-16-gb-512-gb/asus-rog-phone-7-ultimate-16-gb-512-gb.component';
import { MacbookComponent } from './components/laptop/macbook/macbook.component';
import { HpComponent } from './components/laptop/hp/hp.component';
import { AcerComponent } from './components/laptop/acer/acer.component';
import { XctlpComponent } from './components/laptop/xctlp/xctlp.component';
import { AsuslpComponent } from './components/laptop/asuslp/asuslp.component';
import { LaptopAsusROGStrixG18G814JIN6063WComponent } from './components/chitietsanpham/laptop/laptop-asus-rog-strix-g18-g814-ji-n6063-w/laptop-asus-rog-strix-g18-g814-ji-n6063-w.component';
import { LaptopHPEnvyX360BF0112TU7C0N9PAComponent } from './components/chitietsanpham/laptop/laptop-hp-envy-x360-bf0112-tu-7-c0-n9-pa/laptop-hp-envy-x360-bf0112-tu-7-c0-n9-pa.component';
import { LaptopAcerAspire5Spin14A5SP1451MTN573XComponent } from './components/chitietsanpham/laptop/laptop-acer-aspire-5-spin-14-a5-sp14-51-mtn-573-x/laptop-acer-aspire-5-spin-14-a5-sp14-51-mtn-573-x.component';
import { XtctvComponent } from './components/tivi/xtctv/xtctv.component';
import { SangsungtvComponent } from './components/tivi/sangsungtv/sangsungtv.component';
import { XiaomitvComponent } from './components/tivi/xiaomitv/xiaomitv.component';
import { CoocqqComponent } from './components/tivi/coocqq/coocqq.component';
import { XiaomiSmartDisplayMax86InchComponent } from './components/chitietsanpham/tivi/xiaomi-smart-display-max-86-inch/xiaomi-smart-display-max-86-inch.component';
import { SmartGoogleTiviCoocaa4K70Inch70C9Component } from './components/chitietsanpham/tivi/smart-google-tivi-coocaa-4-k-70-inch-70-c9/smart-google-tivi-coocaa-4-k-70-inch-70-c9.component';
import { BluetoothComponent } from './components/taighe/bluetooth/bluetooth.component';
import { DayComponent } from './components/taighe/day/day.component';
import { SamsungGalaxyWatch5ProComponent } from './components/chitietsanpham/taighe/samsung-galaxy-watch5-pro/samsung-galaxy-watch5-pro.component';
import { AComponent } from './components/chitietsanpham/taighe/Tai-nghe-Apple-EarPods-USB-C-MTJY3ZA/a/a.component';
import { XtctnComponent } from './components/taighe/xtctn/xtctn.component';
import { XtcdhComponent } from './components/clock/xtcdh/xtcdh.component';
import { ApplewatchComponent } from './components/clock/applewatch/applewatch.component';
import { SamsungdhComponent } from './components/clock/samsungdh/samsungdh.component';
import { DondathangComponent } from './components/Webdislay/dondathang/dondathang.component';
import { DatthanhcongComponent } from './components/Webdislay/datthanhcong/datthanhcong.component';
import { PhaohoaComponent } from './components/Webdislay/phaohoa/phaohoa.component';
import { DonhuyComponent } from './components/Webdislay/donhuy/donhuy.component';
import { DanhanhangComponent } from './components/Webdislay/danhanhang/danhanhang.component';
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
    Iphone15promax1tbComponent,
    MacbookProComponent,
    SamsungLTV55Inch55LS03BAComponent,
    BluetoothAppleAirPods2Component,
    AppleWatchUltraComponent,
    CapchaComponent,
    AppleComponent,
    SamsungComponent,
    XiaomiComponent,
    RealmeComponent,
    NokiaComponent,
    AsusComponent,
    XemtatcaComponent,
    Xiaomi13ProComponent,
    Realme11Pro8GB256GBComponent,
    NokiaC324GB128GBComponent,
    ASUSROGPhone7Ultimate16GB512GBComponent,
    MacbookComponent,
    HpComponent,
    AcerComponent,
    XctlpComponent,
    AsuslpComponent,
    LaptopAsusROGStrixG18G814JIN6063WComponent,
    LaptopHPEnvyX360BF0112TU7C0N9PAComponent,
    LaptopAcerAspire5Spin14A5SP1451MTN573XComponent,
    XtctvComponent,
    SangsungtvComponent,
    XiaomitvComponent,
    CoocqqComponent,
    XiaomiSmartDisplayMax86InchComponent,
    SmartGoogleTiviCoocaa4K70Inch70C9Component,
    BluetoothComponent,
    DayComponent,
    SamsungGalaxyWatch5ProComponent,
    AComponent,
    XtctnComponent,
    XtcdhComponent,
    ApplewatchComponent,
    SamsungdhComponent,
    DondathangComponent,
    DatthanhcongComponent,
    PhaohoaComponent,
    DonhuyComponent,
    DanhanhangComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatSidenavModule, BrowserAnimationsModule,HttpClientModule,FormsModule,BsDatepickerModule.forRoot(),ReactiveFormsModule,MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
