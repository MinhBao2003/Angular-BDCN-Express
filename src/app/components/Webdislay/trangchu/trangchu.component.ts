import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
import { ClockService } from 'src/app/server/clock/clock.service';
import { HeadphonesService } from 'src/app/server/headphones/headphones.service';
import { LaptopService } from 'src/app/server/laptop/laptop.service';
import { PhoneService } from 'src/app/server/phone/phone.service';
import { TiviService } from 'src/app/server/tivi/tivi.service';
import { TrangchuprService } from 'src/app/server/trangchupr/trangchupr.service';
import { Trangchupr } from 'src/interface/trangchupr.model';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css'],
  template: `
    <div>
      {{ formatDate() }}
      <br>
      {{ hours }} : {{ minutes | number: '2.0' }} : {{ seconds | number: '2.0' }}
    </div>
  `,
})
export class TrangchuComponent implements OnInit{
  targetDate: Date = new Date('2023-12-31T23:59:59');
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  trangchupr: any[] = [];
  name: string | null = null;
  productId: string | null = null;

  phones: any[] = []; // Chứa danh sách điện thoại từ API
  currentIndex1: number = 0; // Chỉ số của ảnh hiện tại
  itemsPerPage: number = 5; // Số lượng mặt hàng mỗi trang

  prs: any[] = []; // Chứa danh sách điện thoại từ API
  currentIndexpr: number = 0; // Chỉ số của ảnh hiện tại
  itemsPerPagepr: number = 5; // Số lượng mặt hàng mỗi trang

  laptops: any[] = [];
  currentIndex2 = 0;
  itemsPerPage2: number = 5; // Số lượng mặt hàng mỗi trang

  tivis: any[] = [];
  currentIndex3 = 0;
  itemsPerPage3: number = 5; // Số lượng mặt hàng mỗi trang

  headphones: any[] = [];
  currentIndex4 = 0;
  itemsPerPage4: number = 5; // Số lượng mặt hàng mỗi trang

  clocks: any[] = [];
  currentIndex5 = 0;
  itemsPerPage5: number = 5; // Số lượng mặt hàng mỗi trang
  constructor(private Trangchupr: TrangchuprService,private phoneService: PhoneService,
    private route: ActivatedRoute,private laptopService: LaptopService,
    private tiviService: TiviService,private headphoneService: HeadphonesService,
    private clockService: ClockService) {}

  ngOnInit() {
    this.Trangchupr.gettrangchuprs().subscribe((data) => {
      this.trangchupr = data;
    });
    this.startCountdown();
    this.phoneService.getPhones().subscribe(data => {
      this.phones = data;
    });
    this.name = this.route.snapshot.paramMap.get('name');
    this.productId = this.route.snapshot.paramMap.get('id');
    this.laptopService.getLaptops().subscribe(data => {
      this.laptops = data;
    });
    this.tiviService.getTivis().subscribe(data => {
      this.tivis = data;
    });
    this.headphoneService.getHeadphones().subscribe(data => {
      this.headphones = data;
    });
    this.clockService.getClocks().subscribe(data => {
      this.clocks = data;
    });
    this.Trangchupr.gettrangchuprs().subscribe(data => {
      this.prs = data;
    });
  }
  //lấy các anh của đồng hồ
  getCurrentclcoks(): any[] {
    const startIndex5 = this.currentIndex5;
    const endIndex5 = startIndex5 + this.itemsPerPage5;
    return this.clocks.slice(startIndex5, endIndex5);
  }
  //next qua phải 1 hình
  onNextImage5(): void {
    this.currentIndex5 = (this.currentIndex5 + 1) % (this.clocks.length - this.itemsPerPage5 + 1);
  }
  //next qua trái 1 hình
  onPrevImage5(): void {
    this.currentIndex5 = (this.currentIndex5 - 1 + this.clocks.length) % (this.clocks.length - this.itemsPerPage5 + 1);
  }

  getCurrentheadphones(): any[] {
    const startIndex4 = this.currentIndex4;
    const endIndex4 = startIndex4 + this.itemsPerPage4;
    return this.headphones.slice(startIndex4, endIndex4);
  }

  onNextImage4(): void {
    this.currentIndex4 = (this.currentIndex4 + 1) % (this.headphones.length - this.itemsPerPage4 + 1);
  }

  onPrevImage4(): void {
    this.currentIndex4 = (this.currentIndex4 - 1 + this.headphones.length) % (this.headphones.length - this.itemsPerPage4 + 1);
  }

  getCurrentTivis(): any[] {
    const startIndex3 = this.currentIndex3;
    const endIndex3 = startIndex3 + this.itemsPerPage3;
    return this.tivis.slice(startIndex3, endIndex3);
  }

  onNextImage3(): void {
    this.currentIndex3 = (this.currentIndex3 + 1) % (this.tivis.length - this.itemsPerPage3 + 1);
  }

  onPrevImage3(): void {
    this.currentIndex3 = (this.currentIndex3 - 1 + this.tivis.length) % (this.tivis.length - this.itemsPerPage3 + 1);
  }

  getCurrentLaptops(): any[] {
    const startIndex2 = this.currentIndex2;
    const endIndex2 = startIndex2 + this.itemsPerPage2;
    return this.laptops.slice(startIndex2, endIndex2);
  }

  onNextImage2(): void {
    this.currentIndex2 = (this.currentIndex2 + 1) % (this.laptops.length - this.itemsPerPage2 + 1);
  }

  onPrevImage2(): void {
    this.currentIndex2 = (this.currentIndex2 - 1 + this.laptops.length) % (this.laptops.length - this.itemsPerPage2 + 1);
  }

  getCurrentPhones(): any[] {
    const startIndex1 = this.currentIndex1;
    const endIndex = startIndex1 + this.itemsPerPage;
    return this.phones.slice(startIndex1, endIndex);
  }

  onNextImage(): void {
    this.currentIndex1 = (this.currentIndex1 + 1) % (this.phones.length - this.itemsPerPage + 1);
  }

  onPrevImage(): void {
    this.currentIndex1 = (this.currentIndex1 - 1 + this.phones.length) % (this.phones.length - this.itemsPerPage + 1);
  }

  getCurrentpr(): any[] {
    const startIndexpr = this.currentIndexpr;
    const endIndexpr = startIndexpr + this.itemsPerPagepr;
    return this.prs.slice(startIndexpr, endIndexpr);
  }

  onNextImagepr(): void {
    this.currentIndexpr = (this.currentIndexpr + 1) % (this.prs.length - this.itemsPerPagepr + 1);
  }

  onPrevImagepr(): void {
    this.currentIndexpr = (this.currentIndexpr - 1 + this.prs.length) % (this.prs.length - this.itemsPerPagepr + 1);
  }

  //nhấp nháy đém giờ gược
  startCountdown() {
    interval(1000)
      .subscribe(() => {
        const now = new Date();
        const timeDiff = this.targetDate.getTime() - now.getTime();
        if (timeDiff > 0) {
          this.hours = Math.floor(timeDiff / (1000 * 60 * 60));
          this.minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
          this.seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        } else {
          console.log('Countdown reached!');
        }
      });
  }
  formatDate(): string {
    console.log('Target Date:', this.targetDate);
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return this.targetDate.toLocaleDateString('en-US', options);
  }
  pageSize = 5; // Số lượng mặt hàng mỗi trang
  currentPage = 1;
  currentIndex = 0;

  get totalPages(): number {
    return Math.ceil(this.trangchupr.length / this.pageSize);
  }

  get displayedProducts(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.trangchupr.slice(startIndex, startIndex + this.pageSize);
  }

  previousPage(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentPage = Math.max(1, this.currentPage - 1);
      this.currentIndex = this.pageSize - 1;
    }
  }

  nextPage(): void {
    if (this.currentIndex < this.pageSize - 1) {
      this.currentIndex++;
    } else {
      this.currentPage = Math.min(this.totalPages, this.currentPage + 1);
      this.currentIndex = 0;
    }
  }

}
