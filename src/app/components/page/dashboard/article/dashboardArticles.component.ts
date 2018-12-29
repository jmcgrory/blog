import {Component, OnInit} from '@angular/core';
import { APIService } from '../../../../services/API.service';
import ArticleModel from '../../../../models/ArticleModel';
import APIFilter from '../../../../models/Filter/APIFilter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-articles',
  templateUrl: './dashboardArticles.component.html',
  styleUrls: ['./dashboardArticles.component.scss']
})
export class DashboardArticlesComponent implements OnInit {

  articles: ArticleModel[] = [];

  constructor(
      private apiService: APIService,
      private router: Router,
  ) { }

  ngOnInit(): void {
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

  selectArticle = (id: string): void => {
    console.log('SELECT:', id);
    this.router.navigate(['dashboard/edit/', id]);
  }

  deleteArticle = (id: string): void => {
    console.log('DELETE:', id);
  }
}
