import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Routes } from '@angular/router';

import { CustomersComponent } from './customers/customers.component';
import { AppRoutingModule } from './app-routing.module';
import { OrdersComponent } from './orders/orders.component';

// const routes:Routes = [
//   {
//     path: 'customers',
//     component: CustomersComponent,
//   },
// ];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomersComponent, OrdersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'scrimba_angular_2';
}
