import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnChanges {
  catList: ICategory[];
  prdList: IProduct[];

  orderTotalPrice: number = 0;
  @Input() sentCatId: number = 0;
  prdListOfCat: IProduct[] = [];

  @Output() totalPriceChange: EventEmitter<number>;

  /**
   *
   */
  constructor() {
    this.totalPriceChange = new EventEmitter<number>();
    this.catList = [
      { id: 1, name: 'Labs' },
      { id: 2, name: 'PC' },
    ];
    this.prdList = [
      {
        id: 1,
        name: 'Labtop',
        price: 150,
        quantity: 3,
        imgUrl:
          'https://th.bing.com/th/id/OIP.yjSbZJfj8V3T6Nub4Cv97wHaEy?rs=1&pid=ImgDetMain',
        categoryId: 1,
      },
      {
        id: 2,
        name: 'Monitor',
        price: 80,
        quantity: 0,
        imgUrl:
          'https://th.bing.com/th/id/OIP.kO6Sv_K23W_woagEMroQ3gHaFK?w=278&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        categoryId: 2,
      },
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.filterProductByCatId();
  }

  filterProductByCatId() {
    if (this.sentCatId == 0) {
      this.prdListOfCat = this.prdList;
    } else {
      this.prdListOfCat = this.prdList.filter(
        (prd) => prd.categoryId == this.sentCatId
      );
    }
  }

  buy(prdPrice: number, count: any) {
    let prdsCount = parseInt(count);

    this.orderTotalPrice += prdPrice * prdsCount;
    // execute event
    this.totalPriceChange.emit(this.orderTotalPrice);
  }
}
