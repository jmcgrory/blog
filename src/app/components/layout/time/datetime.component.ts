import { Component, Input } from '@angular/core';
import TimeProperty from '../../../models/Properties/TimeProperty';

@Component({
    selector: 'app-datetime',
    template: `
        <time [attr.datetime]="datetime.toString()">
            <i class="icon">calender_today</i>
            {{ datetime.toString() | date: 'full' }}
        </time>`
})
export class DatetimeComponent {
    @Input() datetime: TimeProperty;
}