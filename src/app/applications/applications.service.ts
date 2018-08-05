import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Entity } from '../shared/entity';
import { Application } from './models/application.interface';

import { MessageService } from '../core/message.service';
import { HttpErrorHandler, HandleError } from '../core/http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  private url = 'api/applications';  // URL to web api
  private me = 'ApplicationsService';

  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler,
    private messageService: MessageService
  ) {
    this.handleError = httpErrorHandler.createHandleError(this.me);
  }

  getAll(): Observable<Application[]> {
    return this.http.get<Application[]>(this.url)
    .pipe(
      tap(_ => this.log(`${this.me} fetched all entities ${_[0].name}`)),
      catchError(this.handleError<Application[]>(`${this.me} getAll`))
    );
  }

  /** GET by id. Will 404 if id not found */
  getById(id: number): Observable<Application> {
    const url = `${this.url}/${id}`;
    return this.http.get<Application>(url).pipe(
      tap(_ => this.log(`${this.me} fetched entity id=${id}`)),
      catchError(this.handleError<Application>(`${this.me} getById id=${id}`))
    );
  }

  /* GET entities whose name contains search term */
  search (term: string): Observable<Application[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Application[]>(`${this.url}/?name=${term}`).pipe(
      tap(_ => this.log(`found entities matching "${term}"`)),
      catchError(this.handleError<Application[]>('search', []))
    );
  }


  /** POST: add a new entity */
  add (entity: Application): Observable<Application> {
    return this.http.post<Application>(this.url, entity, httpOptions).pipe(
      tap(_ => this.log(`added entity id=${entity.id}`)),
      catchError(this.handleError<Application>(`${this.me} add entity`))
    );
  }

  /** PUT: update the entity  */
  update (entity: Application): Observable<Application> {
    const url = `${this.url}/${entity.id}`;
    return this.http.put(url, entity, httpOptions).pipe(
      tap(_ => this.log(`${this.me} updated entity id=${entity.id}`)),
      catchError(this.handleError<any>(`${this.me} update entity id=${entity.id}`))
    );
  }

  /** DELETE: delete the entity */
  delete (entity: Application | number): Observable<Application> {
    const id = typeof entity === 'number' ? entity : entity.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Application>(url, httpOptions).pipe(
      tap(_ => this.log(`${this.me} deleted entity id=${id}`)),
      catchError(this.handleError<Application>(`${this.me} delete id=${id}`))
    );
  }

  private log(message: string) {
    this.messageService.add('Info: ' + message);
  }


}
