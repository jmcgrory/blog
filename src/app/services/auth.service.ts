import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { API_URI } from '../config';
import { UserModel } from '../models';

type Base = 'article' | 'category' | 'tag' | 'user' | 'page';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient
    ) { }

    private getUrl = (): string => `${API_URI}`;

    private handleError = (error: HttpErrorResponse) => {
        let message = 'The application has returned an Error.';
        if (error.error instanceof ErrorEvent) {
            message = error.error.message;
        }
        return throwError(message);
    };

    public authenticateUser = (user: UserModel) => {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let params = new HttpParams();
        params = params.set('username', user.username.toString());
        params = params.set('password', user.password.toString());
        return this.http.get<any>(
            `${this.getUrl()}/user/authenticate`,
            { headers: headers, params }
        )
    }

    public authenticateToken = () => {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let params = new HttpParams();
        params = params.set('token', this.getToken());
        params = params.set('token', this.getUsername());
        return this.http.get<any>(
            `${this.getUrl()}/user/token`,
            { headers: headers, params }
        )
    }

    private getToken = (): string => {
        return 'TEST';
    }

    private getUsername = (): string => {
        return 'root';
    }

}
