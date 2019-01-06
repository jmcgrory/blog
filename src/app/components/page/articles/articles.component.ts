import { Component, OnInit } from '@angular/core';
import { APIService } from '../../../services/API.service';
import { CategoryModel } from 'src/app/models';
import APIFilter from '../../../models/Filter/APIFilter';
import ArticleModel from '../../../models/ArticleModel';
import TagModel from '../../../models/TagModel';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

    categories: CategoryModel[] = [];
    tags: TagModel[] = [];
    articles: ArticleModel[] = [];

    constructor(
        private apiService: APIService
    ) { }

    ngOnInit() {
        this.loadArticles();
        this.loadGroups();
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

    loadGroups = (): void => {
        const groupFilter = new APIFilter({});
        this.apiService.getIds('group', groupFilter).subscribe((ids) => {
            console.log(ids);
            this.apiService.getModels('group', ids).subscribe((groups) => {
                groups.forEach((group) => {
                    if (group.type === 'tag') {
                        this.appendTag(group);
                    } else if (group.type === 'category') {
                        this.appendCategory(group);
                    }
                });
            });
        });
    }

    appendTag = (group: object): void => {
        this.tags.push(new TagModel(group));
    }

    appendCategory = (group: object): void => {
        this.categories.push(new CategoryModel(group));
    }

    selectTag = (tag: TagModel): void => {
        console.log(tag);
    }

    selectCategory = (category: CategoryModel): void => {
        console.log(category);
    }

}
