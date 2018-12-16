import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { API_URI } from '../config';
import { UserModel } from 'src/app/models';
import APIFilter from '../models/Filter/APIFilter';

type Base = 'article' | 'category' | 'tag' | 'user' | 'page';

@Injectable({
    providedIn: 'root'
})
export class APIService {

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

    public ping = () => {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.get<any>(
            `${this.getUrl()}/ping`,
            { headers: headers }
        ).pipe(catchError(this.handleError));
    }

    public getIds = (route: string, filters: APIFilter) => {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let params = new HttpParams();
        if (filters !== null) {
            [...filters.toMap().entries()].forEach(([key, value]) => {
                params = params.set(key, value);
            });
        }
        return this.http.get<any>(
            `${this.getUrl()}/${route}/ids`,
            { headers: headers, params }
        ).pipe(catchError(this.handleError));
    }

    public getModel = (route: string, id: string) => {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let params = new HttpParams().set('id', id);
        return this.http.get<any>(
            `${this.getUrl()}/${route}/get`,
            { headers: headers, params }
        )
    }

    public getModels = (route: string, ids: string[]) => {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let params = new HttpParams().set('ids', ids.join(','));
        return this.http.get<any>(
            `${this.getUrl()}/${route}/get-many`,
            { headers: headers, params }
        )
    }

    public save = () => {
        // '/save', 'put', this.save, true
    }

    public remove = () => {
        // '/remove', 'delete', this.remove, true
    }

    public update = () => {
        // '/update', 'patch', this.update, true
    }

    public setActive = () => {
        // '/active', 'patch', this.setActive, true
    }

}
