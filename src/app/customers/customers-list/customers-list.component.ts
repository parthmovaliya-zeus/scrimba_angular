import { Component, Input } from '@angular/core';

import { FilterTextboxComponent } from './filter-textbox/filter-textbox.component';
import { ICustomer } from '../../interfaces';
import { CommonModule } from '@angular/common';
import { SorterService } from '../../core/sorter.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customers-list',
  standalone: true,
  imports: [CommonModule, FilterTextboxComponent, RouterLink],
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.scss',
})
export class CustomersListComponent {
  private _customers: ICustomer[] = [];
  customersOrderTotal: number = 0;
  filteredCustomers: ICustomer[] = [];
  currencyCode: string = 'USD';

  constructor(private _sorterService: SorterService) {}

  sort(prop: string) {
    this._sorterService.sort(this.filteredCustomers, prop);
  }

  @Input() get customers(): ICustomer[] {
    return this._customers;
  }

  filter(data: string) {
    if (data) {
      this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
        return (
          cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          cust.orderTotal!.toString().indexOf(data) > -1
        );
      });
    } else {
      this.filteredCustomers = this.customers;
    }
    this.calculateOrders();
  }

  set customers(value: ICustomer[]) {
    if (value) {
      this._customers = this.filteredCustomers = value;
      this.calculateOrders();
    }
  }

  calculateOrders() {
    this.customersOrderTotal = 0;
    if (this.filteredCustomers && this.filteredCustomers.length) {
      this.filteredCustomers.forEach((customer) => {
        this.customersOrderTotal += customer.orderTotal!;
      });
    }
  }
}
