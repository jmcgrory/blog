import { Component, Input } from '@angular/core';
import { CardModel } from '../../../models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() url: string = '';
  @Input() card: CardModel;

  constructor() {}

}
