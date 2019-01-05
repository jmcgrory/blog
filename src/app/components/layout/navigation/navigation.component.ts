import { Component, Input, OnInit } from '@angular/core';
import NavItem from '../../../models/Navigation/NavItem';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() headingText: string;
  @Input() headingLevel: number = 2;
  @Input() isMain: boolean = false;
  @Input() items: NavItem[];
  public heading: string;

  private setHeading = (): void => {
    const tag = `h${this.headingLevel}`;
    this.heading = `<${tag}>${this.headingText}</${tag}>`;
  }

  ngOnInit() {
    if (this.headingText) {
      this.setHeading();
    }
  }

}
