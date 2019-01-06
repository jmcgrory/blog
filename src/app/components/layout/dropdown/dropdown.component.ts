import { Component, EventEmitter, Input, Output } from '@angular/core';
import Selectable from '../../../lib/Selectable';

@Component({
    selector: 'app-dropdown',
    styleUrls: ['./dropdown.component.scss'],
    template: `<div class="dropdown-container">
        <strong class="title" *ngIf="title">{{title}}</strong>
        <div class="dropdown">
            <span class="placeholder row" (click)="toggleActive()">
                Click to {{ isActive ? 'Close' : 'Select' }}
                <i class="icon">
                    {{ isActive ? 'arrow_drop_up' : 'arrow_drop_down' }}
                </i>
            </span>
            <ul *ngIf="isActive">
                <li class="row" *ngFor="let value of values" (click)="selectValue(value)" [ngClass]="{selected: value.isSelected}">
                    <i class="icon">
                        {{ value.isSelected ? 'check_box' : 'check_box_outline_blank' }}
                    </i>
                    {{value.name.toString()}}
                </li>
                <li class="row clear-selection" [ngClass]="{invalid: !hasSelected}" (click)="resetValues()">
                    <i class="icon">undo</i>
                    Clear Selection
                </li>
            </ul>
        </div>
    </div>`
})
export class DropdownComponent {

    private selectedCount: number = 0;
    public hasSelected: boolean = false;
    public isActive: boolean = false;
    @Input() title: string;
    @Input() values: Selectable[] = [];
    @Output() select = new EventEmitter<any>();

    constructor() { }

    public toggleActive = (): void => {
        this.isActive = !this.isActive;
    }

    public selectValue = (value: Selectable): void => {
        value.toggle();
        this.select.emit(value);
        this.iterateSelectedCount(value.isSelected);
    }

    private iterateSelectedCount = (isSelected: boolean): void => {
        if (isSelected) {
            this.selectedCount++;
        } else {
            this.selectedCount--;
        }
        this.hasSelected = (this.selectedCount > 0);
    }

    public resetValues = (): void => {
        this.selectedCount = 0;
        this.values.forEach((selectable) => {
            selectable.toggle(false);
        });
    }

}
