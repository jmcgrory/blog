import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URI } from '../../config';

@Injectable({
    providedIn: 'root'
})
export class APIService {

    constructor(
        private http: HttpClient
    ) { }

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
