import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss'],
})
export class OrderMasterComponent implements AfterViewInit {
  catList: ICategory[];
  selectedCatId: number = 0;

  recievedOrderTotalPrice: number = 0;

  @ViewChild('clientNameInp') clientNameInpElem!: ElementRef;
  @ViewChild(ProductListComponent) productListCompObj!: ProductListComponent;

  constructor() {
    this.catList = [
      { id: 1, name: 'Labs' },
      { id: 2, name: 'PC' },
    ];
  }
  ngAfterViewInit(): void {
    this.clientNameInpElem.nativeElement.value = 'ahmed abd elsalam';
    this.clientNameInpElem.nativeElement.style.border = '2px solid red';
    console.log(this.productListCompObj.prdList);
  }

  OnTotalPriceChange(totalPrice: number) {
    this.recievedOrderTotalPrice = totalPrice;
  }
}
