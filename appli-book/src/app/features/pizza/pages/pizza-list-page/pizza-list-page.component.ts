import { Component, inject } from '@angular/core';
import { PizzaService } from '../../../../services/pizza.service';
import { Pizza } from '../../../../models/pizza.model'; // Import du type Pizza
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-pizza-list-page',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './pizza-list-page.component.html',
  styleUrls: ['./pizza-list-page.component.css'],
})
export class PizzaListPageComponent {
  private pizzaService = inject(PizzaService);
  pizzas: Pizza[] = this.pizzaService.getPizzas();

  getStars(rating: number): string[] {
    return Array(5)
      .fill('☆')
      .map((_, i) => (i < rating ? '★' : '☆'));
  }

  formatPizzaUrl(name: string): string {
    return `/pizza/${this.pizzaService.formatPizzaSlug(name)}`;
  }
}

