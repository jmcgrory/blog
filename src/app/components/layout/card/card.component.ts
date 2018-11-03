import { Component, Input } from '@angular/core';
import { CardModel } from '../../../models';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() card: CardModel;

  constructor() { }

}
