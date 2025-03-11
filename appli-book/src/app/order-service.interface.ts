import { Observable } from 'rxjs';
import { CreateOrder, Order } from './models/order';

export interface OrderService {
  findMany(): Observable<Order[]>;
  create(data: CreateOrder): Observable<Order>;
  remove(id: string): void;
}
