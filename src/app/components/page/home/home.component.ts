import { Component, OnInit, OnDestroy } from '@angular/core';
import { CardModel } from '../../../models';
import { APIService } from 'src/app/services/API.service';
import APIFilter from '../../../models/Filter/APIFilter';
import ArticleModel from 'src/app/models/ArticleModel';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    constructor(
        private articleService: APIService
    ) { }

    featured: CardModel[] = [];

    pageArticle: ArticleModel;

    ngOnInit() {

        this.articleService.getModel('article', '5c14ec0c45accb168ec1e1c7').subscribe((data) => {
            if (data) {
                this.pageArticle = new ArticleModel(data);
            }
        });

        const idFilter = new APIFilter({ limit: 4 });
        this.articleService.getIds('article', idFilter).subscribe((ids) => {
            if (ids.length) {
                this.articleService.getModels(
                    'article', ids
                ).subscribe((data) => {
                    console.log(data);
                    this.featured = data.map((article): CardModel => new CardModel(article));
                });
            }
        });

    }

    ngOnDestroy() {

    }

}
