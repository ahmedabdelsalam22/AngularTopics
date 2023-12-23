import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PromotionAdsService } from 'src/app/Services/promotion-ads.service';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  storeInfo: StoreData;

  /**
   *
   */
  constructor(private adsService: PromotionAdsService) {
    this.storeInfo = new StoreData(
      'ITI',
      'https://picsum.photos/200/300/?blur',
      ['cairo', 'beni suef', 'giza']
    );
  }
  ngOnInit(): void {
    let Observer = {
      next: (data: string) => {
        console.log(data);
      },
      error: (err: string) => {
        console.log(err);
      },
      complete: () => {
        console.log('ads finished');
      },
    };

    this.adsService.getScheduledAds(3).subscribe(Observer);
  }
}
