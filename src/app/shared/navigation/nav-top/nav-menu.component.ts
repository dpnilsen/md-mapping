import { Component, Output, ViewChild, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavMenuService } from '../nav-menu.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  @Input()
  title: string;

  isExpanded = false;


  constructor(
    private navMenuService: NavMenuService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.title = 'App';
  }

  collapse() {
    this.isExpanded = false;
  }


  toggle(menu) {

    this.isExpanded = !this.isExpanded;

    this.navMenuService.toggle();

  }

  navigate(to: string): void {

    this.router.navigate([to]);
  }


}
