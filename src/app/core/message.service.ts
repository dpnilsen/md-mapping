import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
  messages: string[] = [];

  // Observable string sources
  private _toggle = new Subject<String>();

  // Observable string streams
  toggle$ = this._toggle.asObservable();

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  // Service message commands
  toggle() {

    this._toggle.next();
  }
}
