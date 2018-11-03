import { Component, OnInit } from '@angular/core';
import { CardModel } from '../../../models';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lol = () => {

    return {

      title: 'placeholder',

      createdAt: '2008-09-15T15:53:00',

      link: 'http://localhost:4200',

      text: 'Oh boy!'

    }

  }

  featured: CardModel[] = [

    new CardModel(this.lol()),

    new CardModel(this.lol()),

    new CardModel(this.lol()),

    new CardModel(this.lol()),

  ];

  content: string = `
  
  ## Front End Designer & Full Stack Developer

  I am a UX/UI focused digital designer and full stack web developer working in the South West of England, currently within the web design & development team of an industry leading construction marketing company.
  
  I combine my knowledge and experience of full stack web development, the latest web programming languages and frameworks with my expert design skill-set; developed from a degree level with a focus on understanding design fundamentals to create scalable, reusable online interfaces and production ready applications.
  
  I provide the complete package in designing, developing and analysing web applications, with the ability to find and solve problems and create unabridged online experiences for both business and consumer focused clientele.
  
  `;

  constructor() { }

  ngOnInit() {
  }

}
