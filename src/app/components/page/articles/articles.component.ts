import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { APIService } from '../../../services/API.service';
import { CategoryModel } from 'src/app/models';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit, OnDestroy {

    categories: CategoryModel[];
    subscription: Subscription;

    constructor(
        private service: APIService
    ) { }

    ngOnInit() {
        // Get Ids first...
        /*this.subscription = this.service.getModels().subscribe(
            (data) => {
                this.categories = data.map(
                    (category) => new CategoryModel(category)
                );
            }
        );*/
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
