import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductInformation } from 'src/interface/productinformation.model';
import { Observable, combineLatest, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductinformationService {

  private apiUrl = 'http://localhost:3000/productinformation';

  constructor(private http: HttpClient) {}

  getProductInformation(): Observable<ProductInformation[]> {
    return this.http.get<ProductInformation[]>(this.apiUrl);
  }
  
}