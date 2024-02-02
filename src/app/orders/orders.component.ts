import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ICustomer, IOrder } from '../interfaces';
import { DataService } from '../core/data.service';
import { CommonModule, CurrencyPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, RouterLink, CurrencyPipe, JsonPipe],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent implements OnInit {
  customer!: ICustomer | null;
  orders: IOrder[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _dataService: DataService
  ) {}

  ngOnInit(): void {
    let id: number | null = +this._route.snapshot.paramMap.get('id')!;
    this._dataService.getOrders(id).subscribe((order: IOrder[]) => {
      this.orders = order;
    });
    this._dataService.getCustomer(id).subscribe((cus: ICustomer | null) => {
      this.customer = cus;
    });
  }
}
