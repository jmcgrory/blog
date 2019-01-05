import { Component, OnInit } from '@angular/core';
// import { APIService } from '../../../../services/API.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import ArticleModel from '../../../models/ArticleModel';
import { APIService } from '../../../services/API.service';
import APIFilter from '../../../models/Filter/APIFilter';
import {CardModel} from '../../../models';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

    article: ArticleModel;

    constructor(
        private route: ActivatedRoute,
        private apiService: APIService
    ) { }

    ngOnInit() {
        this.getArticleSlugSub().subscribe((data) => {
            this.getArticleIdSub(data).subscribe((string) => {
                this.setArticle(string);
            });
        });
    }

    getArticleSlugSub = (): Observable<string> => {
        return this.route.paramMap.pipe(
            map((params: ParamMap) => params.get('slug'))
        );
    }

    getArticleIdSub = (slug: string): Observable<string> => {
        const articleFilter = new APIFilter({ match: `slug:${slug}` });
        return this.apiService.getIds('article', articleFilter);
    }

    setArticle = (id: string): void => {
        this.apiService.getModel('article', id).subscribe((data) => {
            this.article = new ArticleModel(data);
        });
    }
}
