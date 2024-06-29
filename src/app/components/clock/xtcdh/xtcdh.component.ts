import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClockService } from 'src/app/server/clock/clock.service';
import { QuestionService } from 'src/app/server/question/question.service';

@Component({
  selector: 'app-xtcdh',
  templateUrl: './xtcdh.component.html',
  styleUrls: ['./xtcdh.component.css']
})
export class XtcdhComponent implements OnInit{
  donghos: any[] = []; // Chứa danh sách điện thoại từ API
  currentIndex1: number = 0; // Chỉ số của ảnh hiện tại
  itemsPerPage: number = 5; // Số lượng mặt hàng mỗi trang
  selectedday: string = '';
  selectedclock: string = '';
  selectedsize: string = '';
  selectedInches: string = '';
  allPhones: any[] = []; // Contains the complete list of phones from API
  shouldRefreshProducts: boolean = true;
  isPriceDescendingClicked: boolean = false;
  isPriceAscendingClicked: boolean = false;
  isDiscountDescendingClicked: boolean = false;
  questionData: any;
  // questionData: any;
  currentOpenSection: string | null = null;
  constructor(private yourService: QuestionService,private route: ActivatedRoute,private donghoService: ClockService){}
  toggleSection(section: string): void {
    if (this.currentOpenSection === section) {
      // Nếu section hiện tại đang mở, đóng nó lại
      this.currentOpenSection = null;
    } else {
      // Nếu section khác đang mở, đóng nó lại trước khi mở section mới
      if (this.currentOpenSection) {
        this.currentOpenSection = null;
      }
      // Mở section mới
      this.currentOpenSection = section;
    }
  }

  isSectionOpen(section: string): boolean {
    return this.currentOpenSection === section;
  }

  ngOnInit(): void {
    // Lấy thông tin các sản phẩm có id là 1, 2, 3

    this.donghoService.getClocks().subscribe(data => {
      this.donghos = data;
    });
    const questionId = '21'; // Replace with the desired ID
    this.yourService.getDataById(questionId).subscribe(
      (data) => {
        this.questionData = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  refreshPage(): void {
    if (this.shouldRefreshProducts) {
      // Fetch the complete list of phones without reloading the page
      this.donghoService.getClocks().subscribe(data => {
        this.allPhones = data;
        this.filterPhones(); // Optionally, you can apply the existing filter
      });
    } else {
      // Reset the flag for subsequent clicks
      this.shouldRefreshProducts = true;
    }
  }
  onclockSelect(): void {
    if (this.selectedclock !== '') {
      // Filter phones based on selected RAM
      this.filterclocks();
      // Set the flag to avoid refreshing products
      this.shouldRefreshProducts = false;
    } else {
      // Reset the filter and fetch all phones
      this.donghoService.getClocks().subscribe(data => {
        this.allPhones = data;
        // Reset the flag for subsequent clicks
        this.shouldRefreshProducts = true;
      });
    }
  }
  filterclocks(): void {
    // Filter phones based on selected RAM
    this.donghos = this.allPhones.filter(phone => phone.day === this.selectedclock);
  }
  ondaySelect(): void {
    if (this.selectedday !== '') {
      // Filter phones based on selected RAM
      this.filterPhones();
      // Set the flag to avoid refreshing products
      this.shouldRefreshProducts = false;
    } else {
      // Reset the filter and fetch all phones
      this.donghoService.getClocks().subscribe(data => {
        this.allPhones = data;
        // Reset the flag for subsequent clicks
        this.shouldRefreshProducts = true;
      });
    }
  }
  filterPhones(): void {
    // Filter phones based on selected RAM
    this.donghos = this.allPhones.filter(phone => phone.day === this.selectedday);
  }

  onsizeSelect(): void {
    if (this.selectedsize !== '') {
      // Filter phones based on selected RAM
      this.filterRomPhones();
      // Set the flag to avoid refreshing products
      this.shouldRefreshProducts = false;
    } else {
      // Reset the filter and fetch all phones
      this.donghoService.getClock([4, 5, 6]).subscribe(data => {
        this.allPhones = data;
        this.currentIndex1 = 0; // Reset index when fetching all phones
        // Reset the flag for subsequent clicks
        this.shouldRefreshProducts = true;
      });
    }
  }
  filterRomPhones(): void {
    // Filter phones based on selected RAM
    this.donghos = this.allPhones.filter(phone => phone.size === this.selectedsize);
    this.currentIndex1 = 0; // Reset index when filtering
  }

  onInchesSelect(): void {
    if (this.selectedInches !== '') {
      // Filter phones based on selected RAM
      this.filterInchesPhones();
      // Set the flag to avoid refreshing products
      this.shouldRefreshProducts = false;
    } else {
      // Reset the filter and fetch all phones
      this.donghoService.getClocks().subscribe(data => {
        this.allPhones = data;
        this.currentIndex1 = 0; // Reset index when fetching all phones
        // Reset the flag for subsequent clicks
        this.shouldRefreshProducts = true;
      });
    }
  }
  filterInchesPhones(): void {
    // Filter phones based on selected RAM
    this.donghos = this.allPhones.filter(phone => phone.screenSize === this.selectedInches);
    this.currentIndex1 = 0; // Reset index when filtering
  }

  sortByPriceDescending(): void {
    this.donghos.sort((a, b) => {
      const priceA = parseFloat(a.price); // Assuming 'price' is a string, convert it to a number
      const priceB = parseFloat(b.price);

      return priceB - priceA; // Sort in descending order
    });
    this.isPriceDescendingClicked = true;
    this.isPriceAscendingClicked = false;
    this.isDiscountDescendingClicked = false;
  }

  sortByPriceAscending(): void {
    this.donghos.sort((a, b) => {
      const priceA = parseFloat(a.price); // Assuming 'price' is a string, convert it to a number
      const priceB = parseFloat(b.price);

      return priceA - priceB; // Sort in ascending order
    });
    this.isPriceDescendingClicked = false;
    this.isPriceAscendingClicked = true;
    this.isDiscountDescendingClicked = false;
  }

  sortByDiscountDescending(): void {
    this.donghos.sort((a, b) => {
      const discountA = parseFloat(a.discountedPrice) - parseFloat(a.price);
      const discountB = parseFloat(b.discountedPrice) - parseFloat(b.price);

      return discountB - discountA; // Sort in descending order based on discount amount
    });
    this.isPriceDescendingClicked = false;
    this.isPriceAscendingClicked = false;
    this.isDiscountDescendingClicked = true;
  }


}
