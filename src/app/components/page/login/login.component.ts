import { Component } from '@angular/core';
import { UserModel } from 'src/app/models';
import { APIService } from 'src/app/services/API.service';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private apiService: APIService
  ) { }

  public user: UserModel = new UserModel({
    username: '',
    password: '',
  });

  public authenticateUser = (): void => {
    console.log(this.user);
    this.apiService.authenticateUser(this.user).subscribe((data) => {
      console.log(data);
    });
  }

}
