import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../../../../services/notice.service';
import { APIService } from '../../../../services/API.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import ArticleModel from '../../../../models/ArticleModel';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

    article: ArticleModel;

    constructor(
        private noticeService: NoticeService,
        private apiService: APIService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.assignArticle();
    }

    /**
     * @todo handle null values
     */
    getArticleIdSub = (): Observable<string> => {
        return this.route.paramMap.pipe(
            map((params: ParamMap) => params.get('id'))
        );
    }

    /**
     * @todo handle null values
     */
    assignArticle = (): void => {
        this.getArticleIdSub().subscribe((id: string) => {
            this.apiService.getModel('article', id)
                .subscribe((article: object) => {
                    this.article = new ArticleModel(article);
                });
        });
    }

    updateArticle = (): void => {
        this.apiService.update('article', this.article).subscribe((data) => {
            console.log(data);
        });
    }
}
