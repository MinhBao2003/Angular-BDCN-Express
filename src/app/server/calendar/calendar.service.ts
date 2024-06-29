import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private apiUrl = 'http://localhost:3000/calendar';

  constructor(private http: HttpClient) {}

  saveAppointment(appointmentData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, appointmentData);
  }

  checkIfNameExists(hoten: string): Observable<{ exists: boolean }> {
    const url = `${this.apiUrl}/checkIfNameExists`; // Adjust the API endpoint accordingly
    return this.http.post<{ exists: boolean }>(url, { hoten });
  }
}
