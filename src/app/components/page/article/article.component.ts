import { Component, OnInit } from '@angular/core';
// import { APIService } from '../../../../services/API.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor(
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getArticleIdSub().subscribe((data) => {
      console.log(data);
    });
  }

  getArticleIdSub = (): Observable<string> => {
    return this.route.paramMap.pipe(
        map((params: ParamMap) => params.get('slug'))
    );
  }

}
