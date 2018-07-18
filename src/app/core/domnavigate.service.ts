import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DomNavigateService {

  constructor() { }

  // Observable navItem source
  private _navItemSource = new BehaviorSubject<number>(0);

  // Observable navItem stream
  navItem$ = this._navItemSource.asObservable();

  // service command
  changeNav(number) {
    this._navItemSource.next(number);
  }

}
