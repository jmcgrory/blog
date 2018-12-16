import { Component } from '@angular/core';
import { UserModel } from 'src/app/models';
import { AuthService } from 'src/app/services/auth.service';

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
    console.log(this.user);
    this.authService.authenticateUser(this.user).subscribe((data) => {
      console.log(data);
    });
  }

}
