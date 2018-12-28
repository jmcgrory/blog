import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import Level from 'src/app/models/Notice/Level';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

    @Input() label: string;
    @Input() isGhost: boolean;
    @Input() isFluid: boolean;
    @Input() level: Level;
    @Input() icon: string;
    @Output() emitter = new EventEmitter<any>();

    classList = [];

    constructor() {
    }

    onClick = (): void => {
      this.emitter.emit();
    }

    ngOnInit(): void {
        if (this.isFluid) {
            this.classList.push('is-fluid');
        } else {
            this.setGhostClass(this.isGhost);
            this.setButtonLevel(this.level);
        }
    }

    setGhostClass = (isGhost: boolean = false): void => {
        this.classList.push(isGhost ? 'ghost' : 'no-ghost');
    }

    setButtonLevel = (level: Level = 'info'): void => {
        this.classList.push(`button-${level}`);
    }

}
