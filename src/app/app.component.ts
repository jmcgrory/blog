import { Component, OnInit } from '@angular/core';
import APIStorage from './application/APIStorage';
import CardModel from './models/ArticleModel';

@Component({
  selector: 'root-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  year: number;

  constructor() {
    this.year = new Date().getFullYear();
  }

  ngOnInit() {
    console.log(APIStorage);
    APIStorage.setModel(
      'category',
      new CardModel({
        title: 'hello',
        id: Math.round(Math.random() * 100)
      })
    )
  }

}
