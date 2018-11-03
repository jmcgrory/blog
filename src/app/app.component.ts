import { Component } from '@angular/core';

@Component({
  selector: 'root-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  year: number;

  constructor() {

    this.year = new Date().getFullYear();

  }

}
