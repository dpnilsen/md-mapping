import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ListView } from '../models/application-list-view.enum';

@Injectable({ providedIn: 'root' })
export class ApplicationListService {

  // Observable string sources
  private _toggle = new Subject<ListView>();

  // Observable string streams
  toggle$ = this._toggle.asObservable();


  // Service message commands
  toggle(view: ListView) {

    console.log('Service ', view);

    this._toggle.next(view);
  }

}
