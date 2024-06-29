import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  private apiUrl = 'http://localhost:3000/phone';

  constructor(private http: HttpClient) { }

  getPhones(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  getPhoneIds(ids: number[]): Observable<any[]> {
    const url = `${this.apiUrl}?id=${ids.join('&id=')}`;
    return this.http.get<any[]>(url);
  }
}
