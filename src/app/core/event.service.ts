import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private subject = new ReplaySubject<any>();

  sendMessage(message: string) {
    this.subject.next({ text: message });
  }

  clearMessage() {
    this.subject.next('');
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
