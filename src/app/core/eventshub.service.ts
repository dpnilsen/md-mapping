import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsHubService {
  private announcementSource = new Subject<string>();
  messageAnnounced$ = this.announcementSource.asObservable();

  announce(message: string) {
    console.log('eventHub : firing...' + message);
    this.announcementSource.next(message);
  }
}

