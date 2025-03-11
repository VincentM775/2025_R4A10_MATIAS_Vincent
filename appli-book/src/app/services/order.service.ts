import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { CreateOrder, Order } from '../models/order';
import { OrderService } from '../order-service.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderLocalService implements OrderService {
  private readonly storageKey = 'orders';
  private readonly defaultOrder: Order = {
    id: '0123456',
    paymentMethod: 'Bitcoin',
    pizza: 'Margherita',
    email: 'mario@luigi-family.com',
    size: 'XL',
  };

  private $orders: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>(this.loadOrdersFromStorage() || [this.defaultOrder]);

  constructor() {}


  private loadOrdersFromStorage(): Order[] | null {
    const storedOrders = localStorage.getItem(this.storageKey);
    return storedOrders ? JSON.parse(storedOrders) : null;
  }

  private saveOrdersToStorage(orders: Order[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(orders));
  }

  findMany(): Observable<Order[]> {
    return this.$orders.asObservable();
  }

  create(data: CreateOrder): Observable<Order> {
    const newOrder = { ...data, id: Math.random().toString().replace('.', '') };
    const updatedOrders = [...this.$orders.getValue(), newOrder];
    this.$orders.next(updatedOrders); 
    this.saveOrdersToStorage(updatedOrders); 
    return of(newOrder);
  }

  remove(id: string): void {
    const updatedOrders = this.$orders.getValue().filter((order) => order.id !== id);
    this.$orders.next(updatedOrders);
    this.saveOrdersToStorage(updatedOrders);  
  }
}
