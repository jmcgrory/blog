import {Component, Input, OnInit } from '@angular/core';

type Aspect = 'portrait' | 'landscape' | 'square' | 'auto';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() src: string = './assets/placeholder.jpg';
  @Input() aspect: Aspect = 'auto';
  classNames: string[];

  constructor() {
  }

  ngOnInit(): void {
    this.updateClassnames();
  }

  updateClassnames = (): void => {
    this.classNames = ['image', this.aspect];
  }

}
