import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github/github.service';

@Component({
  selector: 'about-component',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  content: string = `### Bonjour!`;

  constructor(
    private githubService: GithubService
  ) { }

  ngOnInit() {

    const test = this.githubService.getGit().subscribe((data) => {

      console.log(data);

    });

  }

}
