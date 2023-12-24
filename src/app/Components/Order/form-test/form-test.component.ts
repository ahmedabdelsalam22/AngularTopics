import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from 'src/app/Models/login';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.scss'],
})
export class FormTestComponent {
  public loginModel: LoginModel;
  constructor() {
    this.loginModel = new LoginModel();
  }

  onSubmit(form: NgForm) {
    console.log(this.loginModel);
  }
}
