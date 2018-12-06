import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GIT_URI } from '../config';

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
            `${GIT_URI}/users/jmcgrory/events`,
            { headers: headers }
        );
    }

}
