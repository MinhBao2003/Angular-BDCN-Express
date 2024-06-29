import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, combineLatest, map } from 'rxjs';
import { Trangchupr,   } from 'src/interface/trangchu.model';


@Injectable({
  providedIn: 'root'
})
export class TrangchuService {

  private apiUrl = 'http://localhost:3000/TrangchuPR';

  constructor(private http: HttpClient) {}

  getTrangchuprData(): Observable<Trangchupr> {
    return this.http.get<Trangchupr>(`${this.apiUrl}/11`);
  }
}
