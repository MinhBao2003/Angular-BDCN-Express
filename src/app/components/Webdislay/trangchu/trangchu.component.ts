import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
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
  targetDate: Date = new Date('2023-12-31T23:59:59'); // Replace with your target date
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  trangchupr: any[] = [];

  constructor(private Trangchupr: TrangchuprService) {}



  ngOnInit() {
    this.Trangchupr.gettrangchuprs().subscribe((data) => {
      this.trangchupr = data;
    });
    this.startCountdown();
  }

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
          // Countdown reached, handle accordingly
          console.log('Countdown reached!');
          // You may want to stop the interval here
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
