import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/server/review/review.service';
import { Review } from 'src/interface/review.model';

@Component({
  selector: 'app-thdanhgia',
  templateUrl: './thdanhgia.component.html',
  styleUrls: ['./thdanhgia.component.css']
})
export class ThdanhgiaComponent implements OnInit{
  reviews: Review[] = [];
  notRatedCount: number = 0;
  ratedCounts: any[] = []; // You might want to replace 'any' with a more specific type

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.reviewService.getReviews().subscribe((reviews) => {
      this.reviews = reviews;
      this.displayReviewCounts();
    });
  }

  displayReviewCounts(): void {
    this.notRatedCount = this.reviews.filter((review) => review.star === 0).length;

    this.ratedCounts = Array.from({ length: 5 }, (_, index) => ({
      stars: index + 1,
      count: this.reviews.filter((review) => review.star === index + 1).length,
    }));
  }
}
