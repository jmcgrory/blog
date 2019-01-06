import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { NoticeService } from '../../../services/notice.service';
import Notice from '../../../models/Notice/Notice';
import NavItem from '../../../models/Navigation/NavItem';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboardNavigation: NavItem[] = [];

  constructor(
      private authService: AuthService,
      private router: Router,
      private noticeService: NoticeService
  ) { }

  ngOnInit() {
    this.setNavigation();
  }

  setNavigation = () => {
    this.dashboardNavigation = [
      new NavItem({ label: 'Articles', routerLink: '/dashboard' }),
      new NavItem({ label: 'Media', routerLink: 'media' }),
      new NavItem({ label: 'Meta', routerLink: 'meta' }),
      new NavItem({ label: 'Logout', click: this.logOut }),
    ];
  }

  logOut = () => {
      this.authService.logOut();
      this.noticeService.clear();
      this.noticeService.add(new Notice('Successfully Logged Out', 'info'));
      this.router.navigate(['/login']);
  }
}
