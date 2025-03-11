import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router';
import { PizzaService } from '../../../../services/pizza.service';
import { Pizza } from '../../../../models/pizza.model'; 

@Component({
  selector: 'app-single-pizza',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './single-pizza.component.html',
  styleUrls: ['./single-pizza.component.css'],
})
export class SinglePizzaComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private pizzaService = inject(PizzaService);

  pizza: Pizza | undefined;

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const pizzaSlug = params.get('name');
      if (pizzaSlug) {
        const foundPizza = this.pizzaService.getPizzaBySlug(pizzaSlug);
        if (foundPizza) {
          this.pizza = foundPizza;
        } else {
          this.router.navigate(['/404']); 
        }
      }
    });
  }

  get stars(): string[] {
    return Array(5)
      .fill('☆')
      .map((_, i) => (i < this.pizza?.rating! ? '★' : '☆'));
  }

   onOrderPizza(): void {
    this.router.navigate(['/commander']);
  }
}

