import { Component, OnInit } from '@angular/core';
import {AccountService} from "../account/account.service";
import {OrdersService} from "./orders.service";
import {IOrder} from "../shared/models/order";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: IOrder[] = [];
  constructor(private ordersService: OrdersService) { }



  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.ordersService.getOrdersForUser().subscribe({
      next: orders => {
        if (orders) {
          this.orders = orders
        }
      }
    })
  }
}
