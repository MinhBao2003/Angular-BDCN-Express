import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhanQuyenloginService } from 'src/app/server/PhanQuyen/phan-quyenlogin.service';
import { StaffService } from 'src/app/server/Staff/staff.service';
import { CartService } from 'src/app/server/cart/cart.service';
import { ProductinformationService } from 'src/app/server/productinformation/productinformation.service';
import { QnaService } from 'src/app/server/qna/qna.service';
import { ReviewService } from 'src/app/server/review/review.service';
import { TextService } from 'src/app/server/text/text.service';
import { TrangchuService } from 'src/app/server/trangchu/trangchu.service';
import { StaffComment } from 'src/interface/Staff.model';
import { CartItem } from 'src/interface/cart-item.model';
import { ProductInformation } from 'src/interface/productinformation.model';
import { QnA } from 'src/interface/qna.model';
import { Review } from 'src/interface/review.model';
import { TrangchuModel } from 'src/interface/trangchu1.model';


@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit{
  private firstCharacterColors: { [char: string]: string } = {};  trangchuData: any;// Use the actual type
  productData: ProductInformation[] = [];
  color1:any;
  color2:any;
  selectedButton: string = 'red';
  loggedInUser: any;
  toggleProducts: boolean = false;
  toggleProducts1: boolean = true;
  toggleProducts2: boolean = false;
  customerReviews: Review[] = [];
  review: Review = {
    id: '',
    username: '',
    star: 0,
    comment: '',
    permission: 0,
    role: '',
    price: '',  // Automatically captured value
    rom: '',    // Automatically captured value
    img: '',    // Automatically captured value
    date: '',
    clock: '',
  };
  commentError: string = '';
  earliestComments: QnA[] = [];
  qna: QnA = {
    id:'',
    username: '',
    comment: '',
    date: '',
    clock: '',
  };
  qnaError: string = '';
  staffComments: StaffComment[] = [];
  staffError: string = '';
  staff:StaffComment={
    id:'',
    userStaff:'',
    date:'',
    clock:'',
    comment:'',
  }
  showGameContent: boolean = false;
  showCameraContent: boolean = false;
  constructor(private router: Router,private staffCommentService: StaffService,private ProductinformationService: ProductinformationService,private el: ElementRef, private renderer: Renderer2,private qnaService: QnaService,private route: ActivatedRoute,private trangchuService: TextService,private cartService: CartService,private loginService: PhanQuyenloginService,private reviewService: ReviewService)
  {
    this.trangchuData = {} as TrangchuModel;
    this.color1={}as TrangchuModel;
    this.color2={}as TrangchuModel;
     this.color1 = {
      img1: 'https://cdn.tgdd.vn/Products/Images/42/250103/samsung-galaxy-a54-thumb-den-600x600.jpg',
      // ... other properties ...
    };
    // Set the selected image when the component is initialized
    this.selectedImage = this.color1.img1;

    this.color2 = {
      img2: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/s/a/samsung-galaxy-a54_1__1.jpg',
      // ... other properties ...
    };
    // Set the selected image when the component is initialized
    this.selectedImage1 = this.color2.img2;
  }
  getColorForFirstCharacter(username: string): string {
    const firstChar = username.charAt(0).toLowerCase();

    if (!this.firstCharacterColors[firstChar]) {
      // Nếu màu chưa được đặt cho ký tự đầu tiên, tạo một màu mới và gán cho ký tự đó
      const randomColor = this.getRandomColor();
      this.firstCharacterColors[firstChar] = randomColor;
    }

    return this.firstCharacterColors[firstChar];
  }

  // Hàm để lấy một màu ngẫu nhiên từ mảng colors
  private getRandomColor(): string {
    // Thay đổi mảng colors theo ý muốn của bạn
    const colors: string[] = ['#ff5733', '#33ff57', '#5733ff', '#33ffec', '#ec33ff'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  toggleContent(type: string): void {
    if (type === 'game') {
      this.showGameContent = !this.showGameContent;
      this.showCameraContent = false;
    } else if (type === 'camera') {
      this.showCameraContent = !this.showCameraContent;
      this.showGameContent = false;
    }
  }
  setStarRating(star: number) {
    this.review.star = star;
  }
  postQuestion(username: string, comment: string): void {
    // Implement your logic for posting a question
    console.log(`Username: ${username}, Comment: ${comment}`);
  }
  selectButton(color: string) {
    this.selectedButton = color;
  }

  selectedImage1!: string; // Biến để lưu trữ ảnh được chọn

  showImage1(imageSrc1: string): void {
    this.selectedImage1 = imageSrc1;
  }
  selectedImage!: string; // Biến để lưu trữ ảnh được chọn

  showImage(imageSrc: string): void {
    this.selectedImage = imageSrc;

  }
  ngOnInit(): void {
    this.getProductInformation();
    this.trangchuService.getData().subscribe((data: TrangchuModel[]) => {
      // Chỉ lấy dữ liệu từ id 11
      const foundItem = data.find((item: TrangchuModel) => item.id === 11);
      if (foundItem) {
        this.trangchuData = foundItem;
      } else {
        console.error('Item with id 11 not found');
      }
    });
    this.getProductInformation();
    this.getCustomerReviews();
    this.loadEarliestComment();
    this.loadStaffComments();
    const username = this.loginService.getUsername();
    if (!username) {
      this.router.navigate(['/login']);
    } else {
      // Assume you have methods in your service to get price, rom, and img
      this.review.price = this.getPrice();  // Implement getPrice() method
      this.review.rom = this.getRom();      // Implement getRom() method
      this.review.img = this.getImg();      // Implement getImg() method
      this.review.username = username;
    }
   
  }
  loadStaffComments() {
    this.staffCommentService.getStaffComments().subscribe(
      (staffs) => {
        this.staffComments = staffs.filter((staff)=>staff.userStaff!=='');
        //this.setEarliestDateTime(); // Call the function to set earliest date and time
      },
      (error) => {
        console.error('Error getting staff comments:', error);
      }
    );
  }
  addStaffComment() {
    const userStaff = this.loginService.getUsername();
    if (!userStaff) {
      this.router.navigate(['/login']);
    } else {
      if (this.staff.comment.trim() === '') {
        this.staffError = 'Comment cannot be empty';
        return;
      }
      this.staffError = '';
      // Assume you have methods in your service to get date and clock
      const currentDate = new Date();
      this.staff.date = currentDate.toISOString().slice(0, 10); // Implement getDate() method
      this.staff.clock = currentDate.toTimeString().slice(0, 8);// Implement getClock() method
      this.staff.userStaff = userStaff;

      this.staffCommentService.addStaffComment(this.staff).subscribe(
        () => {
          console.log('staff saved successfully');
          this.resetstaff();
        },
        (error) => {
          console.error('Error saving Q&A:', error);
        }
      );
    }
  }
  resetstaff() {
    this.staff = {
      id:'',
      userStaff: '',
      comment: '',
      date: '',
      clock: '',
    };
  }
  sortedstaff(): StaffComment[] {
    // Sắp xếp theo ngày giờ tăng dần
    return this.staffComments.sort((a, b) => {
      const dateA = new Date(a.date + ' ' + a.clock).getTime();
      const dateB = new Date(b.date + ' ' + b.clock).getTime();
      
      return dateA - dateB; // Sắp xếp tăng dần theo ngày giờ
    });
  }
  // Lấy ra ngày giờ sớm nhất
  
  loadEarliestComment() {
    this.qnaService.getEarliestComment().subscribe(
      (qnas) => {
        this.earliestComments = qnas.filter((qna)=>qna.username!=='');
      },
      (error) => {
        console.error('Error fetching earliest comment:', error);
      }
    );
  }
  sortedQan(): QnA[] {
    // Sắp xếp theo ngày giờ tăng dần
    return this.earliestComments.sort((a, b) => {
      const dateA = new Date(a.date + ' ' + a.clock).getTime();
      const dateB = new Date(b.date + ' ' + b.clock).getTime();
      
      return dateA - dateB; // Sắp xếp tăng dần theo ngày giờ
    });
  }
  getCustomerReviews() {
    this.loginService.getReviews().subscribe(
      (reviews) => {
// Lọc ra những đánh giá từ khách hàng đã đăng nhập
        this.customerReviews = reviews.filter((review) => review.username !== '');
      },
      (error) => {
        console.error('Error getting reviews:', error);
      }
    );
  }
  saveReview() {
    if (this.review.comment.trim() === '') {
      this.commentError = 'Comment cannot be empty';
      return; // Stop the process if the comment is empty
    }
  
    // Reset the comment error if it was previously set
    this.commentError = '';
  
    // Set the current date and time
    const currentDate = new Date();
    this.review.date = currentDate.toISOString().slice(0, 10);
    this.review.clock = currentDate.toTimeString().slice(0, 8);
  
    this.reviewService.saveReview(this.review).subscribe(
      () => {
        console.log('Review saved successfully');
  
        // Trigger a click event on the star rating
        this.triggerStarRatingClick();
  
        this.resetReview();
      },
      (error) => {
        console.error('Error saving review:', error);
      }
    );
  }
  // Hàm để sắp xếp danh sách đánh giá
  sortedReviews(): Review[] {
    // Sắp xếp theo số sao giảm dần, sau đó theo ngày giờ tăng dần
    return this.customerReviews.sort((a, b) => {
      if (b.star !== a.star) {
        
  
    return b.star - a.star; // Sắp xếp giảm dần theo số sao
          } else {
            // Sắp xếp tăng dần theo ngày giờ
            return new Date(a.date + ' ' + a.clock).getTime() - new Date(b.date + ' ' + b.clock).getTime();
          }
    });
  }

  // Function to trigger a click event on the star rating
private triggerStarRatingClick() {
  const starRatingElement = document.getElementById('starRating');
  if (starRatingElement) {
    starRatingElement.click();
  }
}
  resetReview() {
    this.review = {
      id: '',
      username: '',
      star: 0,
      comment: '',
      permission: 0,
      role: '',
      price: '',
      rom: '',
      img: '',
      date: '',
      clock: '',
    };
  }
  getPrice(): string {
    // Implement logic to get the price
    return '9.990.000₫';
  }

  getRom(): string {
    // Implement logic to get the rom
    return '256GB';
  }

  getImg(): string {
    // Implement logic to get the img
    return 'https://cdn.tgdd.vn/Products/Images/42/250103/samsung-galaxy-a54-thumb-den-600x600.jpg';
  }
  saveQnA() {
    const username = this.loginService.getUsername();

    if (!username) {
      this.router.navigate(['/login']);
    } else {
      if (this.qna.comment.trim() === '') {
        this.qnaError = 'Comment cannot be empty';
        return;
      }
      this.qnaError = '';
      // Assume you have methods in your service to get date and clock
      const currentDate = new Date();
      this.qna.date = currentDate.toISOString().slice(0, 10); // Implement getDate() method
      this.qna.clock = currentDate.toTimeString().slice(0, 8);// Implement getClock() method
      this.qna.username = username;

      this.qnaService.saveQnA(this.qna).subscribe(
        () => {
          console.log('Q&A saved successfully');
          this.resetQnA();
        },
        (error) => {
          console.error('Error saving Q&A:', error);
        }
      );
    }
  }

  resetQnA() {
    this.qna = {
      id:'',
      username: '',
      comment: '',
      date: '',
      clock: '',
    };
  }
  getProductInformation(): void {
    this.ProductinformationService.getProductInformation().subscribe((data) => {
      this.productData = data;
      console.log(this.productData); // Dữ liệu từ API
    });
  }
  addToCart(quantity?: number): void {
    if (this.trangchuData) {
      const currentDate = new Date();

      // Increment the cartId to create a unique identifier
      const cartId = 'id_' + Date.now(); // Example: id_1635346147103

      const cartItem: CartItem = {
        id: cartId,
        userId: this.loggedInUser.id,
        id_product: this.trangchuData.id, // Make sure this is a number
        username: this.loggedInUser.username,
        permission: this.loggedInUser.permission,
        role: this.loggedInUser.role,
        name: this.trangchuData.name,
        price: this.trangchuData.discountedPrice,
        img: this.trangchuData.img,
        date: currentDate.toISOString().slice(0, 10),
        clock: currentDate.toTimeString().slice(0, 8),
        quantity: quantity || 1,
      };

      // Check if the id already exists in the cart
      const existingCartItemIndex = this.cartService.cartItems.findIndex(
        (item) => item.id === cartId
      );

      if (existingCartItemIndex !== -1) {
        // If id already exists, increment the quantity
        this.cartService.cartItems[existingCartItemIndex].quantity += quantity || 1;
      } else {
        // If id does not exist, add the new item to the cart
        this.cartService.cartItems.push(cartItem);
      }

      this.cartService.addToCart(cartItem).subscribe(
        (response) => {
          console.log('Item added to cart:', response);
          // You may want to handle success, update UI, etc.
        },
        (error) => {
          console.error('Error adding item to cart:', error);
          // Handle error, show a message to the user, etc.
        }
      );
    }
  }
}
