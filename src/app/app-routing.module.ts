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
import { Iphone15promax1tbComponent } from './components/chitietsanpham/iphone15promax1tb/iphone15promax1tb.component';
import { MacbookProComponent } from './components/chitietsanpham/macbook-pro/macbook-pro.component';
import { SamsungLTV55Inch55LS03BAComponent } from './components/chitietsanpham/samsung-ltv-55-inch-55-ls03-ba/samsung-ltv-55-inch-55-ls03-ba.component';
import { BluetoothAppleAirPods2Component } from './components/chitietsanpham/bluetooth-apple-air-pods-2/bluetooth-apple-air-pods-2.component';
import { AppleWatchUltraComponent } from './components/chitietsanpham/apple-watch-ultra/apple-watch-ultra.component';
import { AppleComponent } from './components/phone/apple/apple.component';
import { SamsungComponent } from './components/phone/samsung/samsung.component';
import { XiaomiComponent } from './components/phone/xiaomi/xiaomi.component';
import { Xiaomi13ProComponent } from './components/chitietsanpham/xiaomi-13-pro/xiaomi-13-pro.component';
import { Realme11Pro8GB256GBComponent } from './components/chitietsanpham/realme-11-pro-8-gb-256-gb/realme-11-pro-8-gb-256-gb.component';
import { RealmeComponent } from './components/phone/realme/realme.component';
import { NokiaC324GB128GBComponent } from './components/chitietsanpham/nokia-c32-4-gb-128-gb/nokia-c32-4-gb-128-gb.component';
import { NokiaComponent } from './components/phone/nokia/nokia.component';
import { AsusComponent } from './components/phone/asus/asus.component';
import { ASUSROGPhone7Ultimate16GB512GBComponent } from './components/chitietsanpham/asus-rog-phone-7-ultimate-16-gb-512-gb/asus-rog-phone-7-ultimate-16-gb-512-gb.component';
import { XemtatcaComponent } from './components/phone/xemtatca/xemtatca.component';
import { MacbookComponent } from './components/laptop/macbook/macbook.component';
import { HpComponent } from './components/laptop/hp/hp.component';
import { AcerComponent } from './components/laptop/acer/acer.component';
import { AsuslpComponent } from './components/laptop/asuslp/asuslp.component';
import { LaptopAsusROGStrixG18G814JIN6063WComponent } from './components/chitietsanpham/laptop/laptop-asus-rog-strix-g18-g814-ji-n6063-w/laptop-asus-rog-strix-g18-g814-ji-n6063-w.component';
import { LaptopHPEnvyX360BF0112TU7C0N9PAComponent } from './components/chitietsanpham/laptop/laptop-hp-envy-x360-bf0112-tu-7-c0-n9-pa/laptop-hp-envy-x360-bf0112-tu-7-c0-n9-pa.component';
import { LaptopAcerAspire5Spin14A5SP1451MTN573XComponent } from './components/chitietsanpham/laptop/laptop-acer-aspire-5-spin-14-a5-sp14-51-mtn-573-x/laptop-acer-aspire-5-spin-14-a5-sp14-51-mtn-573-x.component';
import { XctlpComponent } from './components/laptop/xctlp/xctlp.component';
import { SangsungtvComponent } from './components/tivi/sangsungtv/sangsungtv.component';
import { XiaomitvComponent } from './components/tivi/xiaomitv/xiaomitv.component';
import { CoocqqComponent } from './components/tivi/coocqq/coocqq.component';
import { XtctvComponent } from './components/tivi/xtctv/xtctv.component';
import { XiaomiSmartDisplayMax86InchComponent } from './components/chitietsanpham/tivi/xiaomi-smart-display-max-86-inch/xiaomi-smart-display-max-86-inch.component';
import { SmartGoogleTiviCoocaa4K70Inch70C9Component } from './components/chitietsanpham/tivi/smart-google-tivi-coocaa-4-k-70-inch-70-c9/smart-google-tivi-coocaa-4-k-70-inch-70-c9.component';
import { BluetoothComponent } from './components/taighe/bluetooth/bluetooth.component';
import { DayComponent } from './components/taighe/day/day.component';
import { XtctnComponent } from './components/taighe/xtctn/xtctn.component';
import { AComponent } from './components/chitietsanpham/taighe/Tai-nghe-Apple-EarPods-USB-C-MTJY3ZA/a/a.component';
import { ApplewatchComponent } from './components/clock/applewatch/applewatch.component';
import { SamsungdhComponent } from './components/clock/samsungdh/samsungdh.component';
import { XtcdhComponent } from './components/clock/xtcdh/xtcdh.component';
import { SamsungGalaxyWatch5ProComponent } from './components/chitietsanpham/taighe/samsung-galaxy-watch5-pro/samsung-galaxy-watch5-pro.component';
import { DondathangComponent } from './components/Webdislay/dondathang/dondathang.component';
import { DatthanhcongComponent } from './components/Webdislay/datthanhcong/datthanhcong.component';
import { DonhuyComponent } from './components/Webdislay/donhuy/donhuy.component';
import { DanhanhangComponent } from './components/Webdislay/danhanhang/danhanhang.component';




const routes: Routes = [
  //menu tổng
  {path:'',component:TrangchuComponent},
  {path:'trangchu',component:TrangchuComponent},
  {path:'lienhe',component:ContactComponent},
  {path: 'dangnhap', component: PhanQuyenloginComponent },
  {path:'dangky',component:DangkyComponent},
  {path:'vitri',component:VitriComponent},
  {path:'giohang',component:CartComponent},
  { path: '', redirectTo: '/dondathang', pathMatch: 'full' },
  {path:'dondathang',component:DondathangComponent},
  {path:'datthanhcong',component:DatthanhcongComponent},
  //menu gio hàng
  {path:'dathang',component:DatthanhcongComponent},
  {path:'donhuy',component:DonhuyComponent},
  {path:'danhanhang',component:DanhanhangComponent},
  //phần cell cuối tuần
  {path: 'Điện-thoại-Samsung-Galaxy-A54-5G/1', component: Product1Component },
  {path: 'Tivi-Coocaa-HD-32-inch-32R5/2', component: Product2Component },

  //phần chi tiết phone
  {path:'iPhone-15-Pro-Max-1TB/1',component:Iphone15promax1tbComponent},
  {path:'Xiaomi-13-Pro/7',component:Xiaomi13ProComponent},
  {path:'realme-11-Pro-8GB-256GB/10',component:Realme11Pro8GB256GBComponent},
  {path:'Nokia-C32-4GB-128GB/13',component:NokiaC324GB128GBComponent},
  {path:'ASUS-ROG-Phone-7-Ultimate-16GB-512GB/16',component:ASUSROGPhone7Ultimate16GB512GBComponent},
  //phần trang điện thoại phone
  {path:'apple',component:AppleComponent},
  {path:'samsung',component:SamsungComponent},
  {path:'xiaomi',component:XiaomiComponent},
  {path:'realme',component:RealmeComponent},
  {path:'nokia',component:NokiaComponent},
  {path:'asus',component:AsusComponent},
  {path:'xtcphone',component:XemtatcaComponent},

  //phần chi tiết latop
  {path:'Macbook-Pro-14-M3-Max-36GB-1TB/1',component:MacbookProComponent},
  {path:'Laptop-Asus-ROG-Strix-G18-G814JI-N6063W/4',component:LaptopAsusROGStrixG18G814JIN6063WComponent},
  {path:'Laptop-HP-Envy-X360-BF0112TU-7C0N9PA/7',component:LaptopHPEnvyX360BF0112TU7C0N9PAComponent},
  {path:'Laptop-Acer-Aspire-5-Spin-14-A5SP14-51MTN-573X/10',component:LaptopAcerAspire5Spin14A5SP1451MTN573XComponent},
  //phần trang laptop
  {path:'macbook',component:MacbookComponent},
  {path:'hp',component:HpComponent},
  {path:'acer',component:AcerComponent},
  {path:'asuslp',component:AsuslpComponent},
  {path:'xtclp',component:XctlpComponent},

  //phần chi tiết tivi
  {path:'Smart-Tivi-Khung-Tranh-The-Frame-4K-Samsung-LTV-55-inch-55LS03BA/1',component:SamsungLTV55Inch55LS03BAComponent},
  {path:'Xiaomi-Smart-Display-Max-86-inch/4',component:XiaomiSmartDisplayMax86InchComponent},
  {path:'Smart-Google-Tivi-Coocaa-4K-70-inch-70C9/7',component:SmartGoogleTiviCoocaa4K70Inch70C9Component},
  //phần trang laptop
  {path:'sangsungtv',component:SangsungtvComponent},
  {path:'xiaomitv',component:XiaomitvComponent},
  {path:'Coocaa',component:CoocqqComponent},
  {path:'xtctv',component:XtctvComponent},

  //phần chi tiết tai nghe
  {path:'Tai-nghe-Bluetooth-Apple-AirPods-2/1',component:BluetoothAppleAirPods2Component},
  {path:'Tai-nghe-Apple-EarPods-USB-C-MTJY3ZA-A/4',component:AComponent},
  //phần trang laptop
  {path:'bluetouth',component:BluetoothComponent},
  {path:'day',component:DayComponent},
  {path:'xtctn',component:XtctnComponent},

  //phần chi tiết clock
  {path:'Apple-Watch-Ultra-2-49mm-(4G)-dây-cao-su/1',component:AppleWatchUltraComponent},
  {path:'Samsung-Galaxy-Watch5-Pro/4',component:SamsungGalaxyWatch5ProComponent},
  //phần trang clock
  {path:'applewatch',component:ApplewatchComponent},
  {path:'samsungdh',component:SamsungdhComponent},
  {path:'xtcdh',component:XtcdhComponent},

  {path:'baohanh',component:BaohanhComponent},
  //phần bank
  {path:'momo',component:MomoComponent},
  {path:'zalopay',component:ZalopayComponent},
  {path:'applepay',component:ApplepayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
