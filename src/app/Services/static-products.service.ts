import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class StaticProductsService {
  prdList: IProduct[];

  constructor() {
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

  getAllProducts(): IProduct[] {
    return this.prdList;
  }
  getProductById(prdId: number): IProduct | null {
    let product = this.prdList.find((x) => x.id == prdId);
    if (product != null) {
      return product;
    } else {
      return null;
    }
  }
  getProductsByCatId(catId: number): IProduct[] {
    if (catId == 0) {
      return this.prdList;
    } else {
      return this.prdList.filter((x) => x.categoryId == catId);
    }
  }
}
