import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { APIService } from '../../../services/API/API.service';
import { CategoryModel } from 'src/app/models';

@Component({
  selector: 'articles-component',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  categories: CategoryModel[];
  subscription: Subscription;

  constructor(
    private service: APIService
  ) { }

  ngOnInit() {
    this.subscription = this.service.getCategories().subscribe(
      (data) => {
        this.categories = data.map(
          (category) => new CategoryModel(category)
        );
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
