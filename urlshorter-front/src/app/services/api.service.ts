import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Url } from '../interfaces/url';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL: string = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) {
  }

  getShortensUrls(): Observable<any> {
    return this.http.get(this.baseURL + 'short')
  }

  shotenUrl(url: String): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify({ "origUrl": url });
    console.log(body)
    return this.http.post(this.baseURL + 'short', body, {'headers': headers })
}
}

