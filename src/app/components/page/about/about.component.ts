import { Component, OnInit, OnDestroy } from '@angular/core';
import { GithubService } from 'src/app/services/github/github.service';
import { Subscription } from 'rxjs';

import EventModel from '../../../models/Github/EventModel';

@Component({
  selector: 'about-component',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  content: string = `### Bonjour!`;

  gitEvents: EventModel[];

  constructor(
    private githubService: GithubService
  ) { }

  ngOnInit() {

    this.subscription = this.githubService.getGit().subscribe((data) => {

      this.gitEvents = data.map((e) => new EventModel(e));

      console.log(this.gitEvents);

    });

  }

  ngOnDestroy() {

    this.subscription.unsubscribe();

  }

}
