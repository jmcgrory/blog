import { Component, OnInit } from '@angular/core';
import { APIService } from './services/API.service';
import { Notice } from './models';

@Component({
    selector: 'root-component',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    year: number;
    notices: Notice[] = [];

    constructor(
        private service: APIService
    ) {
        this.year = new Date().getFullYear();
    }

    ngOnInit() {

        // Get Ping Response
        this.service.ping().subscribe((data) => {
            console.log(data);
        }, (error) => {
            this.notices.push(new Notice(error, 'error'));
        });

        this.notices.push(
            new Notice("Something has broken unfortunately!", "error"),
            new Notice("Well done, youve played yourself...", "success"),
            new Notice("Just to inform you that we're closing for Christmas.", "info"),
            new Notice("If you'd like to find a bug, you're a weirdo.", "debug"),
            new Notice("Again, we are closed Sir.", "info"),
            new Notice("The entire application has destroyed reality.", "fatal")
        );

    }

}
