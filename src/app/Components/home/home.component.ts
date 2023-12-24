import { NEVER, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PromotionAdsService } from 'src/app/Services/promotion-ads.service';
import { StoreData } from 'src/app/ViewModels/store-data';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  storeInfo: StoreData;

  public userList: any = [];

  /**
   *
   */
  constructor(
    private adsService: PromotionAdsService,
    private userService: UserService
  ) {
    this.storeInfo = new StoreData(
      'ITI',
      'https://picsum.photos/200/300/?blur',
      ['cairo', 'beni suef', 'giza']
    );
  }

  getUsers() {
    this.userService.getAllUsers().subscribe((res) => {
      this.userList = res;
      console.log('data loaded');
    });
  }

  ngOnInit(): void {
    this.getUsers();

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
