import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { QnA } from 'src/interface/qna.model';


@Injectable({
  providedIn: 'root'
})
export class QnaService {

  private apiUrl = 'http://localhost:3000/Qan';

  constructor(private http: HttpClient) {}

  saveQnA(qna: QnA): Observable<any> {
    return this.http.post(this.apiUrl, qna);
  }
  getEarliestComment(): Observable<QnA[]> {
    return this.http.get<QnA[]>(this.apiUrl);
  }
}
