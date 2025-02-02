import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaptopService } from 'src/app/server/laptop/laptop.service';
import { QuestionService } from 'src/app/server/question/question.service';

@Component({
  selector: 'app-hp',
  templateUrl: './hp.component.html',
  styleUrls: ['./hp.component.css']
})
export class HpComponent implements OnInit{
  laptops: any[] = []; // Chứa danh sách điện thoại từ API
  currentIndex1: number = 0; // Chỉ số của ảnh hiện tại
  itemsPerPage: number = 5; // Số lượng mặt hàng mỗi trang
  selectedRam: string = '';
  selectedRom: string = '';
  selectedInches: string = '';
  allPhones: any[] = []; // Contains the complete list of phones from API
  shouldRefreshProducts: boolean = true;
  isPriceDescendingClicked: boolean = false;
  isPriceAscendingClicked: boolean = false;
  isDiscountDescendingClicked: boolean = false;
  questionData: any;
  // questionData: any;
  currentOpenSection: string | null = null;
  constructor(private yourService: QuestionService,private route: ActivatedRoute,private laptopService: LaptopService){}
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
    const phoneIds = [7, 8, 9];
    this.laptopService.getLaptopIds(phoneIds).subscribe(data => {
      this.laptops = data;
    });
    const questionId = '9'; // Replace with the desired ID
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
      this.laptopService.getLaptopIds([7, 8, 9]).subscribe(data => {
        this.allPhones = data;
        this.filterPhones(); // Optionally, you can apply the existing filter
      });
    } else {
      // Reset the flag for subsequent clicks
      this.shouldRefreshProducts = true;
    }
  }

  onRamSelect(): void {
    if (this.selectedRam !== '') {
      // Filter phones based on selected RAM
      this.filterPhones();
      // Set the flag to avoid refreshing products
      this.shouldRefreshProducts = false;
    } else {
      // Reset the filter and fetch all phones
      this.laptopService.getLaptopIds([7, 8, 9]).subscribe(data => {
        this.allPhones = data;
        this.currentIndex1 = 0; // Reset index when fetching all phones
        // Reset the flag for subsequent clicks
        this.shouldRefreshProducts = true;
      });
    }
  }
  filterPhones(): void {
    // Filter phones based on selected RAM
    this.laptops = this.allPhones.filter(phone => phone.ram === this.selectedRam);
    this.currentIndex1 = 0; // Reset index when filtering
  }

  onRomSelect(): void {
    if (this.selectedRom !== '') {
      // Filter phones based on selected RAM
      this.filterRomPhones();
      // Set the flag to avoid refreshing products
      this.shouldRefreshProducts = false;
    } else {
      // Reset the filter and fetch all phones
      this.laptopService.getLaptopIds([4, 5, 6]).subscribe(data => {
        this.allPhones = data;
        this.currentIndex1 = 0; // Reset index when fetching all phones
        // Reset the flag for subsequent clicks
        this.shouldRefreshProducts = true;
      });
    }
  }
  filterRomPhones(): void {
    // Filter phones based on selected RAM
    this.laptops = this.allPhones.filter(phone => phone.rom === this.selectedRom);
    this.currentIndex1 = 0; // Reset index when filtering
  }

  onInchesSelect(): void {
    if (this.selectedInches !== '') {
      // Filter phones based on selected RAM
      this.filterRomPhones();
      // Set the flag to avoid refreshing products
      this.shouldRefreshProducts = false;
    } else {
      // Reset the filter and fetch all phones
      this.laptopService.getLaptopIds([7, 8, 9]).subscribe(data => {
        this.allPhones = data;
        this.currentIndex1 = 0; // Reset index when fetching all phones
        // Reset the flag for subsequent clicks
        this.shouldRefreshProducts = true;
      });
    }
  }
  filterInchesPhones(): void {
    // Filter phones based on selected RAM
    this.laptops = this.allPhones.filter(phone => phone.screenSize === this.selectedInches);
    this.currentIndex1 = 0; // Reset index when filtering
  }

  sortByPriceDescending(): void {
    this.laptops.sort((a, b) => {
      const priceA = parseFloat(a.price); // Assuming 'price' is a string, convert it to a number
      const priceB = parseFloat(b.price);

      return priceB - priceA; // Sort in descending order
    });
    this.isPriceDescendingClicked = true;
    this.isPriceAscendingClicked = false;
    this.isDiscountDescendingClicked = false;
  }

  sortByPriceAscending(): void {
    this.laptops.sort((a, b) => {
      const priceA = parseFloat(a.price); // Assuming 'price' is a string, convert it to a number
      const priceB = parseFloat(b.price);

      return priceA - priceB; // Sort in ascending order
    });
    this.isPriceDescendingClicked = false;
    this.isPriceAscendingClicked = true;
    this.isDiscountDescendingClicked = false;
  }

  sortByDiscountDescending(): void {
    this.laptops.sort((a, b) => {
      const discountA = parseFloat(a.discountedPrice) - parseFloat(a.price);
      const discountB = parseFloat(b.discountedPrice) - parseFloat(b.price);

      return discountB - discountA; // Sort in descending order based on discount amount
    });
    this.isPriceDescendingClicked = false;
    this.isPriceAscendingClicked = false;
    this.isDiscountDescendingClicked = true;
  }

  getCurrentLaptops(): any[] {
    const startIndex1 = this.currentIndex1;
    const endIndex = startIndex1 + this.itemsPerPage;
    return this.laptops.slice(startIndex1, endIndex);
  }

  onNextImage(): void {
    this.currentIndex1 = (this.currentIndex1 + 1) % (this.laptops.length - this.itemsPerPage + 1);
  }

  onPrevImage(): void {
    this.currentIndex1 = (this.currentIndex1 - 1 + this.laptops.length) % (this.laptops.length - this.itemsPerPage + 1);
  }
}
