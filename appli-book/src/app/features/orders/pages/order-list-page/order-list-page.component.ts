import { Component, OnInit } from '@angular/core';
import { OrderLocalService } from '../../../../services/order.service';
import { Order } from '../../../../models/order';
import { OrderCardComponent } from '../../components/order-card/order-card.component';

@Component({
  selector: 'app-order-list-page',
  standalone: true,
  imports: [OrderCardComponent],
  templateUrl: './order-list-page.component.html',
  styleUrl: './order-list-page.component.css',
})
export class OrderListPageComponent implements OnInit {
  orders: Order[] = [];

  constructor(private readonly orderService: OrderLocalService) {}

  ngOnInit(): void {
    this.orderService.findMany().subscribe((orders) => {
      this.orders = orders;
    });
  }

  onDelete(id: string) {
    this.orderService.remove(id);
  }
}
