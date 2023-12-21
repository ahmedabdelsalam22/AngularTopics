import { Component } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss'],
})
export class OrderMasterComponent {
  catList: ICategory[];
  selectedCatId: number = 0;

  recievedOrderTotalPrice: number = 0;

  constructor() {
    this.catList = [
      { id: 1, name: 'Labs' },
      { id: 2, name: 'PC' },
    ];
  }

  OnTotalPriceChange(totalPrice: number) {
    this.recievedOrderTotalPrice = totalPrice;
  }
}
