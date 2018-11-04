import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from '../../../models';

@Component({
  selector: 'cards-component',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() cards: CardModel[];

  ngOnInit() { }

}
