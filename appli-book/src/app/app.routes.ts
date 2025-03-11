import { Routes } from "@angular/router";
import { PizzaListPageComponent } from "./features/pizza/pages/pizza-list-page/pizza-list-page.component";
import { OrderPizzaPageComponent } from "./features/pizza/pages/order-pizza-page/order-pizza-page.component";
import { SinglePizzaComponent } from "./features/pizza/pages/single-pizza/single-pizza.component";
import { NotFoundComponent } from "./shared/pages/not-found/not-found.component";
import { OrderListPageComponent } from "./features/orders/pages/order-list-page/order-list-page.component";

export const routes: Routes = [
  {
    path: "",
    component: PizzaListPageComponent,
  },
  {
    path: "pizzas",
    component: PizzaListPageComponent,
  },
  {
    path: "pizza/:name",
    component: SinglePizzaComponent,
  },
  {
    path: "commander",
    component: OrderPizzaPageComponent,
  },
  {
    path: "commandes",
    component: OrderListPageComponent,
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];
