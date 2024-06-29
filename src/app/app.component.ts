import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebBanHang';
  isNavbarFixed = false;

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollPosition = window.scrollY;
    this.isNavbarFixed = scrollPosition > 50;
  }
}
