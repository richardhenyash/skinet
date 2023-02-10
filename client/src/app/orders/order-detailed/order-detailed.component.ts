import { Component, OnInit } from '@angular/core';
import {OrdersService} from "../orders.service";
import {IOrder} from "../../shared/models/order";
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-order-detailed',
  templateUrl: './order-detailed.component.html',
  styleUrls: ['./order-detailed.component.scss']
})
export class OrderDetailedComponent implements OnInit {
  order: IOrder;

  constructor(private ordersService: OrdersService, private route: ActivatedRoute,
              private bcService: BreadcrumbService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) this.getOrder(+id);
  }

  getOrder(id: number) {
    this.ordersService.getOrderDetailed(id).subscribe({
      next: order => {
        if (order) {
          this.order = order;
          this.bcService.set('@OrderDetailed', `Order# ${order.id} - ${order.status}`);
        }
      }
    })
  }

}
