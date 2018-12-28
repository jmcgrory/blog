import {Component, OnInit} from '@angular/core';
import { APIService } from '../../../../services/API.service';
import ArticleModel from '../../../../models/ArticleModel';
import APIFilter from '../../../../models/Filter/APIFilter';

@Component({
  selector: 'app-dashboard-articles',
  templateUrl: './dashboardArticles.component.html',
  styleUrls: ['./dashboardArticles.component.scss']
})
export class DashboardArticlesComponent implements OnInit {

  articles: ArticleModel[] = [];

  constructor(
      private apiService: APIService
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
}
