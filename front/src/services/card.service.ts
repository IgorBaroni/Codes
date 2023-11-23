import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { Card } from '../models/Card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  baseUrl = `${environment.UrlPrincipal}/api/Card`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Card>{
    return this.http.get<Card>(`${this.baseUrl}/${id}`);
  }

  post(card: Card){
    return this.http.post(`${this.baseUrl}`, card);
  }

  put(card: Card){
    return this.http.put(`${this.baseUrl}/${card.id}`, card);
  }

  delete(id: number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
