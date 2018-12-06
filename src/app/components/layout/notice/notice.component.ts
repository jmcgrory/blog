import { Component, Input } from '@angular/core';
import { Notice } from 'src/app/models';

@Component({
  selector: 'notice-component',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent {

  @Input() notice: Notice;

  constructor() { }

  public dismiss = (): boolean => {
    console.log("dismiss", this.notice);
    return true;
  }

}
