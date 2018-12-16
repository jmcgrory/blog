import { Component } from '@angular/core';
import { UserModel } from 'src/app/models';
import { AuthService } from 'src/app/services/auth.service';
import APIStore from '../../../application/APIStore';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private authService: AuthService
  ) { }

  public user: UserModel = new UserModel({
    username: '',
    password: '',
  });

  public authenticateUser = (): void => {
    this.authService.authenticateUser(this.user).subscribe((data) => {
      if (data.token) {
        this.storeUser(data);
      }
    });
  }

  private storeUser = ({ username, token }): void => {
    APIStore.setAuth(username, token);
  }

}
