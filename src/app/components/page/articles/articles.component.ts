import { Component, OnInit } from '@angular/core';
import { APIService } from '../../../services/API.service';
import { CategoryModel } from 'src/app/models';
import APIFilter from '../../../models/Filter/APIFilter';
import ArticleModel from '../../../models/ArticleModel';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

    categories: CategoryModel[];
    articles: ArticleModel[];

    constructor(
        private apiService: APIService
    ) { }

    ngOnInit() {
        this.loadArticles();
    }

    loadArticles = (): void => {
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
