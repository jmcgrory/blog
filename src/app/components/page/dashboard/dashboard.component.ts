import { Component, OnInit } from '@angular/core';
import { APIService } from '../../../services/API.service';
import ArticleModel from '../../../models/ArticleModel';
import APIFilter from '../../../models/Filter/APIFilter';
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

  articles: ArticleModel[] = [];
  dashboardNavigation: NavItem[] = [];

  constructor(
      private authService: AuthService,
      private apiService: APIService,
      private router: Router,
      private noticeService: NoticeService
  ) { }

  ngOnInit() {
    this.setNavigation();
    const articleFilter = new APIFilter({});
    this.apiService.getIds('article', articleFilter).subscribe((ids) => {
      // TODO: Handle Errors
      if (ids.length) {
        this.apiService.getModels('article', ids).subscribe((articles) => {
          this.articles = articles.map((article) => new ArticleModel(article));
        });
      }
    });
  }

  setNavigation = () => {
    this.dashboardNavigation = [
      new NavItem({ label: 'Dash', routerLink: 'dashboard' }),
      new NavItem({ label: 'Articles', routerLink: 'dashboard/articles' }),
      new NavItem({ label: 'Pages', routerLink: 'dashboard/pages' }),
      new NavItem({ label: 'Media', routerLink: 'dashboard/media' }),
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
