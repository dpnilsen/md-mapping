import { Component, ChangeDetectorRef, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';


import { NavMenuService } from './shared/navigation/nav-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  AfterViewInit {


  @ViewChild('sideNav') sideNav: MatSidenav;

  white = '#fff';
  overflow = 'auto';


  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  title = 'app';

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private element: ElementRef,
    private navMenuService: NavMenuService
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
  }

}
