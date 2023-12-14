import { Component } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  prdList:IProduct[];
  orderTotalPrice:number = 0;
  /**
   *
   */
  constructor() {
    this.prdList = [
      {id:1 , name:'Labtop',price:150 ,quantity:3 , imgUrl:'https://th.bing.com/th/id/OIP.yjSbZJfj8V3T6Nub4Cv97wHaEy?rs=1&pid=ImgDetMain',categoryId:1},
      {id:2 , name:'Monitor',price:80 ,quantity:1 , imgUrl:'https://th.bing.com/th/id/OIP.kO6Sv_K23W_woagEMroQ3gHaFK?w=278&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',categoryId:2},
    ];    
  }
  

  buy(prdPrice:number , count:any)
  {
    let prdsCount = parseInt(count);
    
    this.orderTotalPrice = prdPrice*prdsCount;
  }

}
