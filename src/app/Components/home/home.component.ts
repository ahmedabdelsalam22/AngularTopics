import { Component } from '@angular/core';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

 storeInfo:StoreData;

 /**
  *
  */
 constructor() {
  this.storeInfo = new StoreData('ITI','https://picsum.photos/200/300/?blur',['cairo','beni suef','giza']);
 }

}
