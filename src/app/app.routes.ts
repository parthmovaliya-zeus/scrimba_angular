import { Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { OrdersComponent } from './orders/orders.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CustomersComponent,
  },
  {
    path: 'order/:id',
    pathMatch: 'full',
    component: OrdersComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/customers',
  },
];
