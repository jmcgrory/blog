import { Component, OnInit } from '@angular/core';
import { APIService } from './services/API.service';
import { Notice } from './models';
import { NoticeService } from './services/notice.service';
import NavItem from './models/Navigation/NavItem';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    /** @todo currently unused */
    private ping: any;
    public year: number;
    public mainNavigation: NavItem[] = [
        new NavItem({
            routerLink: '',
            title: 'Link to Homepage',
            label: 'Home'
        }),
        new NavItem({
            routerLink: 'about',
            title: 'Link to About Page',
            label: 'About'
        }),
        new NavItem({
            routerLink: 'articles',
            title: 'Link to Articles',
            label: 'Articles'
        }),
        new NavItem({
            routerLink: 'contact',
            title: 'Link to Contact Page',
            label: 'Contact'
        }),
    ];

    constructor(
        private service: APIService,
        private noticeService: NoticeService
    ) {
        this.year = new Date().getFullYear();
    }

    ngOnInit() {
        // Get Ping Response
        this.service.ping().subscribe(
            (data) => {
                this.ping = data;
            },
            (error) => {
                this.noticeService.add(new Notice(error, 'error'));
            }
        );
    }
}
