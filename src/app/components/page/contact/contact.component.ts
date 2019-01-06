import { Component, OnInit } from '@angular/core';
import { EMAIL_ADDRESS } from '../../../config';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    public content: string = `If you wish to contact me in regards to any of my past work, had questions regarding an article or were interested in collaborating on any of my on-going packages and projects, feel free to get in contact via <a href="mailto:${EMAIL_ADDRESS}?subject=Website Enquiry">${EMAIL_ADDRESS}</a> and I will be sure to be back to you soon.\n\n If you looking to contact me regarding recruitment possibilities, I am currently happily employed, but thank you for the interest.`;

    constructor() { }

    ngOnInit() {
    }

}
