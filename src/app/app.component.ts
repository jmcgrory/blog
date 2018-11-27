import { Component, OnInit } from '@angular/core';
import APIStorage from './application/APIStorage';

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
    new APIStorage(window.localStorage);
  }

}
