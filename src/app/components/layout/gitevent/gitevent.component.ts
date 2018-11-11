import { Component, Input, OnInit } from '@angular/core';
import EventModel from 'src/app/models/Github/EventModel';

@Component({
  selector: 'gitevent-component',
  templateUrl: './gitevent.component.html',
  styleUrls: ['./gitevent.component.scss']
})
export class GiteventComponent implements OnInit {

  @Input() event: EventModel[];

  ngOnInit() { }

}
