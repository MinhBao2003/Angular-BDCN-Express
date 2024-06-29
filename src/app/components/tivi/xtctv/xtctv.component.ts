import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/server/question/question.service';
import { TiviService } from 'src/app/server/tivi/tivi.service';

@Component({
  selector: 'app-xtctv',
  templateUrl: './xtctv.component.html',
  styleUrls: ['./xtctv.component.css']
})
export class XtctvComponent implements OnInit{
  tivis: any[] = []; // Chứa danh sách điện thoại từ API
  itemsPerPage: number = 5; // Số lượng mặt hàng mỗi trang
  selectedqled: string = '';
  selectedNametv: string = '';
  selectedInches: string = '';
  selectedspeed: string = '';
  allqleds: any[] = []; // Contains the complete list of phones from API
  shouldRefreshProducts: boolean = true;
  isPriceDescendingClicked: boolean = false;
  isPriceAscendingClicked: boolean = false;
  isDiscountDescendingClicked: boolean = false;
  questionData: any;
  // questionData: any;
  currentOpenSection: string | null = null;
  constructor(private yourService: QuestionService,private route: ActivatedRoute,private tiviService: TiviService){}
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
    this.tiviService.getTivis().subscribe(data => {
      this.tivis = data;
    });
    const questionId = '15'; // Replace with the desired ID
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
      this.tiviService.getTivis().subscribe(data => {
        this.allqleds = data;
        this.filterqleds(); // Optionally, you can apply the existing filter
      });
    } else {
      // Reset the flag for subsequent clicks
      this.shouldRefreshProducts = true;
    }
  }

  onqledSelect(): void {
    if (this.selectedqled !== '') {
      // Filter phones based on selected RAM
      this.filterqleds();
      // Set the flag to avoid refreshing products
      this.shouldRefreshProducts = false;
    } else {
      // Reset the filter and fetch all phones
      this.tiviService.getTivis().subscribe(data => {
        this.allqleds = data;
        // Reset the flag for subsequent clicks
        this.shouldRefreshProducts = true;
      });
    }
  }
  filterqleds(): void {
    // Filter phones based on selected RAM
    this.tivis = this.allqleds.filter(tivi => tivi.qled === this.selectedqled);
  }

  onspeedSelect(): void {
    if (this.selectedspeed !== '') {
      // Filter phones based on selected RAM
      this.filterspeeds();
      // Set the flag to avoid refreshing products
      this.shouldRefreshProducts = false;
    } else {
      // Reset the filter and fetch all phones
      this.tiviService.getTivis().subscribe(data => {
        this.allqleds = data;
        // Reset the flag for subsequent clicks
        this.shouldRefreshProducts = true;
      });
    }
  }
  filterspeeds(): void {
    // Filter phones based on selected RAM
    this.tivis = this.allqleds.filter(tivi => tivi.speed === this.selectedspeed);
  }

  onNametvSelect(): void {
    if (this.selectedNametv !== '') {
      // Filter phones based on selected RAM
      this.filterNametvs();
      // Set the flag to avoid refreshing products
      this.shouldRefreshProducts = false;
    } else {
      // Reset the filter and fetch all phones
      this.tiviService.getTivis().subscribe(data => {
        this.allqleds = data;
        // Reset the flag for subsequent clicks
        this.shouldRefreshProducts = true;
      });
    }
  }
  filterNametvs(): void {
    // Filter phones based on selected RAM
    this.tivis = this.allqleds.filter(phone => phone.nametv === this.selectedNametv);
  }

  onInchesSelect(): void {
    if (this.selectedInches !== '') {
      // Filter phones based on selected RAM
      this.filterInchesPhones();
      // Set the flag to avoid refreshing products
      this.shouldRefreshProducts = false;
    } else {
      // Reset the filter and fetch all phones
      this.tiviService.getTivis().subscribe(data => {
        this.allqleds = data;
        // Reset the flag for subsequent clicks
        this.shouldRefreshProducts = true;
      });
    }
  }
  filterInchesPhones(): void {
    // Filter phones based on selected RAM
    this.tivis = this.allqleds.filter(tivi => tivi.screenSize === this.selectedInches);
  }

  sortByPriceDescending(): void {
    this.tivis.sort((a, b) => {
      const priceA = parseFloat(a.price); // Assuming 'price' is a string, convert it to a number
      const priceB = parseFloat(b.price);

      return priceB - priceA; // Sort in descending order
    });
    this.isPriceDescendingClicked = true;
    this.isPriceAscendingClicked = false;
    this.isDiscountDescendingClicked = false;
  }

  sortByPriceAscending(): void {
    this.tivis.sort((a, b) => {
      const priceA = parseFloat(a.price); // Assuming 'price' is a string, convert it to a number
      const priceB = parseFloat(b.price);

      return priceA - priceB; // Sort in ascending order
    });
    this.isPriceDescendingClicked = false;
    this.isPriceAscendingClicked = true;
    this.isDiscountDescendingClicked = false;
  }

  sortByDiscountDescending(): void {
    this.tivis.sort((a, b) => {
      const discountA = parseFloat(a.discountedPrice) - parseFloat(a.price);
      const discountB = parseFloat(b.discountedPrice) - parseFloat(b.price);

      return discountB - discountA; // Sort in descending order based on discount amount
    });
    this.isPriceDescendingClicked = false;
    this.isPriceAscendingClicked = false;
    this.isDiscountDescendingClicked = true;
  }

  filterByspeed(minspeed: number): void {
    // Filter phones based on ROM greater than or equal to the specified value
    this.selectedspeed = `${minspeed}Hz`; // Assuming ROM values are stored as strings like '256GB'

    // Check for 1TB ROM separately
    if (minspeed === 60) {
      this.tivis = this.allqleds.filter(
        (tivi) => parseFloat(tivi.speed) >= minspeed || tivi.speed === '120'
      );
    } else {
      this.tivis = this.allqleds.filter(
        (tivi) => parseFloat(tivi.speed) >= minspeed
      );
    }
    this.shouldRefreshProducts = false;
  }
  filterByInches(minInches: number): void {
    // Filter phones based on ROM greater than or equal to the specified value
    this.selectedInches = `${minInches}`; // Assuming ROM values are stored as strings like '256GB'

    // Check for 1TB ROM separately
    if (minInches === 50) {
      this.tivis = this.allqleds.filter(
        (tivi) => parseFloat(tivi.screenSize) >= minInches || tivi.speed === '86'
      );
    } else {
      this.tivis = this.allqleds.filter(
        (tivi) => parseFloat(tivi.screenSize) >= minInches
      );
    }
    this.shouldRefreshProducts = false;
  }
  filterBy_Inches(minInches: number): void {
    // Filter phones based on ROM greater than or equal to the specified value
    this.selectedInches = `${minInches}`; // Assuming ROM values are stored as strings like '256GB'

    // Check for 1TB ROM separately
    if (minInches === 55) {
      this.tivis = this.allqleds.filter(
        (tivi) => parseFloat(tivi.screenSize) >= minInches || tivi.speed === '86'
      );
    } else {
      this.tivis = this.allqleds.filter(
        (tivi) => parseFloat(tivi.screenSize) >= minInches
      );
    }
    this.shouldRefreshProducts = false;
  }
}
