import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoryService } from '../../../services/category/category.service';
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
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.subscription = this.categoryService.getCategories().subscribe(
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
