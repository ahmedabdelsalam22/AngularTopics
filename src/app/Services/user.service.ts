import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public getAllUsers() {
    let res = this.httpClient.get<any>(
      'https://jsonplaceholder.typicode.com/users'
    );
    return res;
  }
}
