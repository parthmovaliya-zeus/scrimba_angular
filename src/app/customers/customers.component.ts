import { Component, OnInit } from '@angular/core';

import { CustomersListComponent } from './customers-list/customers-list.component';
import { DataService } from '../core/data.service';
import { ICustomer } from '../interfaces';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CustomersListComponent],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss',
  host: { ngSkipHydration: 'true' },
})
export class CustomersComponent implements OnInit {
  constructor(private dataService: DataService) {}
  people: ICustomer[] = [];

  ngOnInit(): void {
    this.dataService
      .getCustomers()
      .subscribe((customers: ICustomer[]) => (this.people = customers));
  }

  // people = [
  //     { id: 1, name: 'john Doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
  //     { id: 2, name: 'Jane Doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
  //     { id: 3, name: 'Michelle Thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31)},
  //     { id: 4, name: 'Jim Thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31)},
  // ];
}
