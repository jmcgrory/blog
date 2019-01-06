import { Component, Input } from '@angular/core';
import TimeProperty from '../../../models/Properties/TimeProperty';

type DateFormat = 'full' | 'short' | 'medium' | 'long';

@Component({
    selector: 'app-datetime',
    styles: [
        `time { font-size: 0.8em; }`,
        `.icon { margin-right: 0.5em; }`
    ],
    template: `
        <time [attr.datetime]="datetime.toString()">
            <i class="icon">date_range</i> 
            {{ datetime.toString() | date: format }}
        </time>`
})
export class DatetimeComponent {
    @Input() datetime: TimeProperty;
    @Input() format: DateFormat = 'full';
}
