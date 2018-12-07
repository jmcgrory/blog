import { Component, OnInit } from '@angular/core';
import { Notice } from 'src/app/models';
import { NoticeService } from '../../../services/notice.service';

@Component({
    selector: 'notices-component',
    templateUrl: './notices.component.html',
    styleUrls: ['./notices.component.scss']
})
export class NoticesComponent implements OnInit {

    private count: number = 0;
    private isInstantiated: boolean = false;
    private testNotice: Notice;
    public notices: Map<number, Notice> = new Map([]);

    constructor(
        private noticeService: NoticeService
    ) { }

    ngOnInit() {
        // Subscribe to notifications
        this.subscribe();
    }

    public getNotices = (): Notice[] => [...this.notices.values()];

    /**
     * Subscribes to NoticeService
     * @todo look at alteratives to ignoring the initial value (ReplaySubject?)
     */
    private subscribe = (): void => {
        this.noticeService.notice.subscribe((notice) => {
            if (this.isInstantiated) {
                notice.setId(++this.count);
                this.notices.set(this.count, notice);
            } else {
                this.isInstantiated = true;
            }
        });
    }

    public dismiss = (id: any): void => {
        if (this.notices.has(id)) {
            this.notices.delete(id);
            if (!this.notices.size) {
                this.count = 0;
            }
        }
    }

}
