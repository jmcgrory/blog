import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models';
import { AuthService } from 'src/app/services/auth.service';
import { NoticeService } from '../../../services/notice.service';
import APIStore from '../../../application/APIStore';
import Notice from '../../../models/Notice/Notice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router,
    private noticeService: NoticeService
  ) { }

  public user: UserModel = new UserModel({
    username: '',
    password: '',
  });

  public authenticateUser = (): void => {
    this.authService.authenticateUser(this.user).subscribe((data) => {
      if (data.token) {
        this.storeUser(data);
        const successNotice = new Notice(
            'Successfully Logged In',
            'success'
        );
        this.noticeService.clear();
        this.noticeService.add(successNotice);
        this.router.navigate(['/dashboard']);
      }
    });
  }

  private storeUser = ({ username, token }): void => {
    APIStore.setAuth(username, token);
  }

}
