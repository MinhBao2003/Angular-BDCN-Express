  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  import { PhoneService } from 'src/app/server/phone/phone.service';
import { QuestionService } from 'src/app/server/question/question.service';

  @Component({
    selector: 'app-xemtatca',
    templateUrl: './xemtatca.component.html',
    styleUrls: ['./xemtatca.component.css']
  })
  export class XemtatcaComponent implements OnInit{
    phones: any[] = []; // Chứa danh sách điện thoại từ API
    itemsPerPage: number = 5; // Số lượng mặt hàng mỗi trang
    isPriceDescendingClicked: boolean = false;
    isPriceAscendingClicked: boolean = false;
    isDiscountDescendingClicked: boolean = false;
    allPhones: any[] = []; // Contains the complete list of phones from API
    shouldRefreshProducts: boolean = true;
    selectedRam: string = '';
    selectedRom: string = '';
    selectedInches: string = '';
    questionData: any;
    currentOpenSection: string | null = null;
    constructor(private yourService: QuestionService,private phoneService: PhoneService,private route: ActivatedRoute) {}

    ngOnInit() {
      this.phoneService.getPhones().subscribe(data => {
        this.phones = data;
      });
      const questionId = '100'; // Replace with the desired ID
    this.yourService.getDataById(questionId).subscribe(
      (data) => {
        this.questionData = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
    }
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
    filterByRam(minRam: number): void {
      // Filter phones based on RAM greater than or equal to the specified value
      this.selectedRam = `${minRam}GB`; // Assuming RAM values are stored as strings like '12GB'

      // Check for 12GB RAM separately
      if (minRam === 12) {
        this.phones = this.allPhones.filter(
          (phone) => parseFloat(phone.ram) >= minRam
        );
      } else {
        this.phones = this.allPhones.filter(
          (phone) => parseFloat(phone.ram) === minRam
        );
      }

      this.shouldRefreshProducts = false;
    }

    filterByRom(minRom: number): void {
      // Filter phones based on ROM greater than or equal to the specified value
      this.selectedRom = `${minRom}GB`; // Assuming ROM values are stored as strings like '256GB'

      // Check for 1TB ROM separately
      if (minRom === 256) {
        this.phones = this.allPhones.filter(
          (phone) => parseFloat(phone.rom) >= minRom || phone.rom === '1TB'
        );
      } else {
        this.phones = this.allPhones.filter(
          (phone) => parseFloat(phone.rom) >= minRom
        );
      }
      this.shouldRefreshProducts = false;
    }

    refreshPage(): void {
      if (this.shouldRefreshProducts) {
        // Fetch the complete list of phones without reloading the page
        this.phoneService.getPhones().subscribe(data => {
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
        this.phoneService.getPhones().subscribe(data => {
          this.allPhones = data;

          this.shouldRefreshProducts = true;
        });
      }
    }
    filterPhones(): void {
      // Filter phones based on selected RAM
      this.phones = this.allPhones.filter(phone => phone.ram === this.selectedRam);
    }

    onRomSelect(): void {
      if (this.selectedRom !== '') {
        // Filter phones based on selected RAM
        this.filterRomPhones();
        // Set the flag to avoid refreshing products
        this.shouldRefreshProducts = false;
      } else {
        // Reset the filter and fetch all phones
        this.phoneService.getPhones().subscribe(data => {
          this.allPhones = data;


        });
      }
    }
    filterRomPhones(): void {
      // Filter phones based on selected RAM
      this.phones = this.allPhones.filter(phone => phone.rom === this.selectedRom);

    }

    onInchesSelect(): void {
      if (this.selectedInches !== '') {
        // Filter phones based on selected RAM
        this.filterInchesPhones();
        // Set the flag to avoid refreshing products
        this.shouldRefreshProducts = false;
      } else {
        // Reset the filter and fetch all phones
        this.phoneService.getPhones().subscribe(data => {
          this.allPhones = data;
          // Reset the flag for subsequent clicks
          this.shouldRefreshProducts = true;
        });
      }
    }
    filterInchesPhones(): void {
      // Filter phones based on selected RAM
      this.phones = this.allPhones.filter(phone => phone.screenSize === this.selectedInches);
    }

    sortByPriceDescending(): void {
      this.phones.sort((a, b) => {
        const priceA = parseFloat(a.price); // Assuming 'price' is a string, convert it to a number
        const priceB = parseFloat(b.price);

        return priceB - priceA; // Sort in descending order
      });
      this.isPriceDescendingClicked = true;
      this.isPriceAscendingClicked = false;
      this.isDiscountDescendingClicked = false;
    }

    sortByPriceAscending(): void {
      this.phones.sort((a, b) => {
        const priceA = parseFloat(a.price); // Assuming 'price' is a string, convert it to a number
        const priceB = parseFloat(b.price);

        return priceA - priceB; // Sort in ascending order
      });
      this.isPriceDescendingClicked = false;
      this.isPriceAscendingClicked = true;
      this.isDiscountDescendingClicked = false;
    }

    sortByDiscountDescending(): void {
      this.phones.sort((a, b) => {
        const discountA = parseFloat(a.discountedPrice) - parseFloat(a.price);
        const discountB = parseFloat(b.discountedPrice) - parseFloat(b.price);

        return discountB - discountA; // Sort in descending order based on discount amount
      });
      this.isPriceDescendingClicked = false;
      this.isPriceAscendingClicked = false;
      this.isDiscountDescendingClicked = true;
    }


}
