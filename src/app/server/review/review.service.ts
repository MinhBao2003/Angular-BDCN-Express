import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from 'src/interface/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private apiUrl = 'http://localhost:3000/review';

  constructor(private http: HttpClient) {}

  saveReview(review: Review): Observable<any> {
    return this.http.post(this.apiUrl, review);
  }
  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.apiUrl);
  }
}
