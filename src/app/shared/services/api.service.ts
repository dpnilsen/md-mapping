import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { JwtService } from './jwt.service';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private me = 'ApiService';

  constructor(
    private http: HttpClient,
    private jwtService: JwtService
  ) {}

  private setHeaders(): HttpHeaders {

    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    if (this.jwtService.getToken()) {
      headersConfig['Authorization'] = `Token ${this.jwtService.getToken()}`;
    }

    return new HttpHeaders(headersConfig);
  }

  private setParams(): HttpParams {

    const params = new HttpParams()
      .set('page', '1') // PageNo
      .set('sort', 'asc'); // SortOn

    return params;
  }

  private formatErrors(error: any) {
     return Observable.throw(error.json());
  }

  get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
    // return this.http.get(`${environment.api_url}${path}`, { headers: this.setHeaders(), search: params })
    return this.http.get(`${environment.api_url}${path}`, { headers: this.setHeaders(), params: this.setParams() })
    .pipe(
      tap(_ => this.log(`${this.me} fetched all entities`)),
      catchError(this.handleError<any[]>(`${this.me} getAll`))
    );
  }

  put(path: string, entity: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(entity),
      { headers: this.setHeaders() }
    )
    .pipe(
      tap(_ => this.log(`${this.me} updated ${entity}`)),
      catchError(this.handleError<any>(`${this.me} get`))
    );
  }

  post(path: string, entity: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(entity),
      { headers: this.setHeaders() }
    )
    .pipe(
      tap(_ => this.log(`${this.me} created ${entity}`)),
      catchError(this.handleError(`${this.me} get`))
    );
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`,
      { headers: this.setHeaders() }
    )
    .pipe(
      tap(_ => this.log(`${this.me} deleted ${path}`)),
      catchError(this.handleError(`${this.me} get`))
    );
  }


  log(arg0: any): any {
    throw new Error('Method not implemented.');
  }
  handleError<T>(arg0: any): any {
    throw new Error('Method not implemented.');
  }
}
