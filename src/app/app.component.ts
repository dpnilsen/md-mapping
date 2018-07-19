import { Component, ChangeDetectorRef, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

import { NavMenuService } from './shared/navigation/nav-menu.service';
import { MessageService } from './core/message.service';
import { MessagesComponent } from './shared/messages/messages.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  AfterViewInit {


  @ViewChild('sideNav') sideNav: MatSidenav;

  @ViewChild('messageBox') messageBox: MessagesComponent;

  white = '#fff';
  overflow = 'auto';


  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  title = 'app';
  messageShow = false;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private element: ElementRef,
    private navMenuService: NavMenuService,
    private messageService: MessageService
  ) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  ngAfterViewInit(): void {

    this.navMenuService.toggle$.subscribe(
      m => {
        console.log('SideNav toggle');
        this.sideNav.toggle();
      }
    );

    this.messageService.toggle$.subscribe(
      m => {
        console.log('MessageBox toggle');
        this.messageBox.toggle();
      }
    );
  }

}
