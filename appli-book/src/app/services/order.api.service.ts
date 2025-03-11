import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateOrder, Order } from '../models/order';
import { OrderService } from '../order-service.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderAPIService implements OrderService {
  private apiUrl = 'http://localhost:5000/api/orders'; 

  constructor(private http: HttpClient) {}

  findMany(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }

  create(data: CreateOrder): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, data);
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
