import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Order } from '../../../../models/order';

@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [],
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.css',
})
export class OrderCardComponent {  
  @Input() order!: Order;
  @Output() remove = new EventEmitter<string>();
  
  removeOrder() {
    this.remove.emit(this.order.id);
  }
}
