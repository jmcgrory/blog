import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GithubService {

    constructor(
        private http: HttpClient
    ) { }

    getGit = (): Observable<any> => {

        const headers: HttpHeaders = new HttpHeaders();

        headers.append('Content-Type', 'application/json');

        return this.http.get<any>(

            'https://api.github.com/users/jmcgrory/events',

            { headers: headers }

        )

    }

}
