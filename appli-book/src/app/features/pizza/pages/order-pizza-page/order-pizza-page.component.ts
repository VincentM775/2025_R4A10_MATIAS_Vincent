import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderLocalService } from '../../../../services/order.service';
import { PizzaService } from '../../../../services/pizza.service'; 
import { Pizza } from '../../../../models/pizza.model';
import { ReactiveFormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-order-pizza-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './order-pizza-page.component.html',
  styleUrls: ['./order-pizza-page.component.css'],
})
export class OrderPizzaPageComponent {
  orderForm: FormGroup;
  pizzas: Pizza[] = []; 
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private orderService: OrderLocalService,
    private pizzaService: PizzaService
  ) {
    this.orderForm = this.fb.group({
      pizza: ['', Validators.required],
      size: ['', Validators.required],
      paymentMethod: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    this.pizzas = this.pizzaService.getPizzas();
  }

  onSubmit(): void {
    if (this.orderForm.valid) {
      const orderData = this.orderForm.value;
      this.orderService.create(orderData).subscribe(
        (order) => {
          this.successMessage = 'Commande enregistrée avec succès !';
          this.errorMessage = null;
          this.orderForm.reset();
        },
        (error) => {
          this.successMessage = null;
          this.errorMessage = 'Une erreur est survenue. Veuillez réessayer.';
        }
      );
    } else {
      this.successMessage = null;
      this.errorMessage = 'Veuillez remplir tous les champs correctement.';
    }
  }
}
