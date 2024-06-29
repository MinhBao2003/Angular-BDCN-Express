import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:3000/contact';

  constructor(private http: HttpClient) {}

  submitForm(formData: any): Observable<any> {
    // Add logic to save form data to your backend
    return this.http.post<any>(this.apiUrl, formData);
  }
}
