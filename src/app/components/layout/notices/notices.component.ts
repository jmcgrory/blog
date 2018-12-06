import { Component, Input } from '@angular/core';
import { Notice } from 'src/app/models';

@Component({
  selector: 'notices-component',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss']
})
export class NoticesComponent {

  @Input() notices: Notice[];

  constructor() { }

}
