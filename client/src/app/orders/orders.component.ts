import { Component, OnInit } from '@angular/core';
import {AccountService} from "../account/account.service";
import {OrdersService} from "./orders.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  constructor(private ordersService: OrdersService, private accountService: AccountService) { }


  ngOnInit(): void {

  }

}
