import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { API_URI } from '../config';
import { UserModel } from '../models';
import APIStore from '../application/APIStore';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    private getUrl = (): string => `${API_URI}`;

    private handleError = (error: HttpErrorResponse) => {
        let message = 'The application has returned an Error.';
        if (error.error instanceof ErrorEvent) {
            message = error.error.message;
        }
        return throwError(message);
    }

    public authenticateUser = (user: UserModel) => {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let params = new HttpParams();
        params = params.set('username', user.username.toString());
        params = params.set('password', user.password.toString());
        return this.http.get<any>(
            `${this.getUrl()}/user/authenticate`,
            { headers: headers, params }
        );
    }

    public authenticateToken = (): Observable<boolean> => {
        const { username, token } = APIStore.getAuth();
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `jwt ${token}`
        });
        const params = new HttpParams().set('username', username);
        return this.http.get<Response>(
            `${this.getUrl()}/user/token`,
            { headers: headers, params }
        ).pipe(catchError(() => {
            this.logOut();
            return throwError('Authentication Error.');
        })).pipe(map((data) => {
            return !!(data);
        }));
    }

    public logOut = () => {
        APIStore.removeAuth();
        this.router.navigate(['/login']);
    }

}
