import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Notice } from 'src/app/models';

@Component({
  selector: 'notice-component',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent {

  @Output() dismiss: EventEmitter<number> = new EventEmitter<number>();
  @Input() notice: Notice;

  constructor() { }

  public dismissNotice(event, index: number) {
    this.dismiss.emit(index);
  }

}
