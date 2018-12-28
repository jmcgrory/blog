import { Component, OnInit } from '@angular/core';
import { APIService } from './services/API.service';
import { Notice } from './models';
import { NoticeService } from './services/notice.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    year: number;

    constructor(
        private service: APIService,
        private noticeService: NoticeService
    ) {
        this.year = new Date().getFullYear();
    }

    ngOnInit() {

        // Get Ping Response
        this.service.ping().subscribe((data) => {
            console.log(data);
        }, (error) => {
            this.noticeService.add(new Notice(error, 'error'));
        });

    }

}
