import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StaffComment } from 'src/interface/Staff.model';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private apiUrl = 'http://localhost:3000/Staff';

  constructor(private http: HttpClient) {}

  getStaffComments(): Observable<StaffComment[]> {
    return this.http.get<StaffComment[]>(this.apiUrl);
  }

  addStaffComment(staff:StaffComment): Observable<any> {
    return this.http.post(this.apiUrl,staff);
  }
}
