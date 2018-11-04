import { Component, OnInit, OnDestroy } from '@angular/core';
import { GithubService } from 'src/app/services/github/github.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'about-component',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  subscription: Subscription;

  content: string = `### Bonjour!`;

  constructor(
    private githubService: GithubService
  ) { }

  ngOnInit() {

    this.subscription = this.githubService.getGit().subscribe((data) => {

      console.log(data);

    });

  }

  ngOnDestroy() {

    this.subscription.unsubscribe();

  }

}
