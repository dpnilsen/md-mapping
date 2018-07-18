import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavMenuService {

  // Observable string sources
  private _toggle = new Subject<String>();

  // Observable string streams
  toggle$ = this._toggle.asObservable();

  // Service message commands
  toggle() {

    this._toggle.next();
  }

}
