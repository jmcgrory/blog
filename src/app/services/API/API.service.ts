import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { API_URI } from '../../config';
import { Notice } from 'src/app/models';

type Base = 'article' | 'category' | 'tag' | 'user' | 'page';

@Injectable({
    providedIn: 'root'
})
export class APIService {

    private url: string = 'http://localhost:3000';
    private base: Base;

    constructor(
        private http: HttpClient
    ) { }

    private getUrl = (): string => `${this.url}`;

    private getBaseUrl = (): string => `${this.getUrl}/${this.base}`;

    private getOptions = (): object => {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
    }

    private handleError = (error: HttpErrorResponse) => {
        let message = 'The application has returned an Error.';
        console.log(error);
        if (error.error instanceof ErrorEvent) {
            message = error.error.message;
        }
        return throwError(message);
    };

    public setBase = (base: Base): string => this.base = base;

    public ping = () => {
        return this.http.get<any>(
            `${this.getUrl()}/ping`,
            this.getOptions()
        ).pipe(catchError(this.handleError));
    }

    public getIds = () => {
        // '/ids', 'get', this.getIds
    }

    public getModel = () => {
        // '/get', 'get', this.getModel
    }

    public getModels = () => {
        // '/get-many', 'get', this.getModels
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

    public getCategories = (fromMaster: boolean = false): Observable<any[]> => {
        const headers: HttpHeaders = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.get<any[]>(
            `${API_URI}/category/get`,
            { headers: headers }
        );
    }

}
