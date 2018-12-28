import { Component, OnInit } from '@angular/core';
import { Notice } from 'src/app/models';
import { NoticeService } from '../../../services/notice.service';

@Component({
    selector: 'app-notices',
    templateUrl: './notices.component.html',
    styleUrls: ['./notices.component.scss']
})
export class NoticesComponent implements OnInit {

    private count: number = 0;
    private isInstantiated: boolean = false;
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
        this.noticeService.actions.subscribe((action) => {
           switch (action) {
               case 'clear':
                   this.clear();
                   break;
               default:
                   console.warn('No such action:', action);
                   break;
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

    public clear = (): void => {
        this.notices.clear();
    }

}
