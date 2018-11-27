import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URI } from '../../config';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    constructor(
        private http: HttpClient
    ) { }

    public getCategories = (fromMaster: boolean = false): Observable<any[]> => {
        const headers: HttpHeaders = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.get<any[]>(
            `${API_URI}/category/get`,
            { headers: headers }
        );
    }

}
