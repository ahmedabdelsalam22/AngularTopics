import { StaticProductsService } from './../../../Services/static-products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  currPrdID: number = 0;
  prdList: IProduct | null = null;

  constructor(
    private activitedRout: ActivatedRoute,
    private prdService: StaticProductsService
  ) {}

  ngOnInit(): void {
    this.currPrdID = Number(this.activitedRout.snapshot.paramMap.get('pID'));
    this.prdList = this.prdService.getProductById(this.currPrdID);
  }
}
