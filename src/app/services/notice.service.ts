import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Notice } from '../models';

@Injectable({
    providedIn: 'root'
})
export class NoticeService {

    private static readonly actions = new Map([
        [ 0, 'clear'],
    ]);

    private noticeSource = new BehaviorSubject<Notice>(
        new Notice('Successful Init', 'success')
    );
    notice: Observable<Notice> = this.noticeSource.asObservable();

    private actionSource = new BehaviorSubject<string>('clear');
    actions: Observable<string> = this.actionSource.asObservable();

    public add = (notice: Notice): void => {
        this.noticeSource.next(notice);
    }

    public clear = (): void => {
        this.actionSource.next(NoticeService.actions.get(0));
    }

}
