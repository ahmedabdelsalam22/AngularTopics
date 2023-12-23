import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromotionAdsService {
  adsList: string[];

  constructor() {
    this.adsList = [
      'Discount',
      'Sale up to 50%',
      'friday offers',
      '',
      'friday offers 70%',
    ];
  }

  getScheduledAds(intervalInSecond: number): Observable<string> {
    return new Observable<string>((observer) => {
      let counter = 0;

      let adsTimer = setInterval(() => {
        if (counter == this.adsList.length) {
          observer.complete();
        } else if (this.adsList[counter] == '') {
          observer.error('no ads found');
        } else {
          observer.next(this.adsList[counter]);
          counter++;
        }
      }, intervalInSecond * 1000);
    });
  }
}
