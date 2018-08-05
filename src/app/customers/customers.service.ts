import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Entity } from '../shared/entity';
import { Customer } from './models/customer.interface';

import { MessageService } from '../core/message.service';
import { HttpErrorHandler, HandleError } from '../core/http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private url = 'api/customers';  // URL to web api
  private me = 'CustomersService';

  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler,
    private messageService: MessageService
  ) {
    this.handleError = httpErrorHandler.createHandleError(this.me);
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url)
    .pipe(
      tap(_ => this.log(`${this.me} fetched all entities ${_[0].name}`)),
      catchError(this.handleError<Customer[]>(`${this.me} getAll`))
    );
  }

  /** GET by id. Will 404 if id not found */
  getById(id: number): Observable<Customer> {
    const url = `${this.url}/${id}`;
    return this.http.get<Customer>(url).pipe(
      tap(_ => this.log(`${this.me} fetched entity id=${id}`)),
      catchError(this.handleError<Customer>(`${this.me} getById id=${id}`))
    );
  }

  /* GET entities whose name contains search term */
  search (term: string): Observable<Customer[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Customer[]>(`${this.url}/?name=${term}`).pipe(
      tap(_ => this.log(`found entities matching "${term}"`)),
      catchError(this.handleError<Customer[]>('search', []))
    );
  }


  /** POST: add a new entity */
  add (entity: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.url, entity, httpOptions).pipe(
      tap(_ => this.log(`added entity id=${entity.id}`)),
      catchError(this.handleError<Customer>(`${this.me} add entity`))
    );
  }

  /** PUT: update the entity  */
  update (entity: Customer): Observable<Customer> {
    const url = `${this.url}/${entity.id}`;
    return this.http.put(url, entity, httpOptions).pipe(
      tap(_ => this.log(`${this.me} updated entity id=${entity.id}`)),
      catchError(this.handleError<any>(`${this.me} update entity id=${entity.id}`))
    );
  }

  /** DELETE: delete the entity */
  delete (entity: Customer | number): Observable<Customer> {
    const id = typeof entity === 'number' ? entity : entity.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Customer>(url, httpOptions).pipe(
      tap(_ => this.log(`${this.me} deleted entity id=${id}`)),
      catchError(this.handleError<Customer>(`${this.me} delete id=${id}`))
    );
  }

  private log(message: string) {
    this.messageService.add('Info: ' + message);
  }
}
