import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Notice } from '../models';
import Level from '../models/Notice/Level';

@Injectable({
    providedIn: 'root'
})
export class NoticeService {

    private source = new BehaviorSubject<Notice>(new Notice('Successful Init', 'success'));
    notice: Observable<Notice> = this.source.asObservable();

    constructor() {
    }

    public add = (notice: Notice): void => {
        this.source.next(notice);
    }

    public remove = (id: string): boolean => {
        console.log('remove', id);
        return false;
    }

}
