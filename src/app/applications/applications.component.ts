import { Component, OnInit, Output, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

import { ApplicationsService } from './applications.service';
import { ApplicationListService } from './application-list/application-list.service';
import { Application } from './models/application.interface';
import { ListView } from './models/application-list-view.enum';

@Component({
  selector: 'app-applications',
  styles: ['.commands { display: flex; flex-wrap: wrap; margin:2em; }'],
  template: `
    <div class="commands">
    <mat-toolbar>
    <button mat-icon-button>
    <mat-icon (click)="viewAs('Table')">view_list</mat-icon>
    </button>
    <button mat-icon-button>
    <mat-icon (click)="viewAs('Cards')">view_module</mat-icon>
    </button>
    <button mat-icon-button>
    <mat-icon (click)="viewAs('Cards')">add</mat-icon>
    </button>
    <button mat-icon-button>
    <mat-icon (click)="viewAs('Cards')">edit</mat-icon>
    </button>
    <button mat-icon-button>
    <mat-icon (click)="viewAs('Cards')">delete</mat-icon>
    </button>
    </mat-toolbar>
    </div>

    <app-application-list [data]="applications" [view]="defaultView"></app-application-list>
  `
})
export class ApplicationsComponent implements OnInit {

  applications: Application[] = [];
  defaultView: ListView = ListView.Table;
  view: ListView = ListView.Cards;
  // view = 'cards';
  // view = 'table';

  constructor(
    private router: Router,
    private dataService: ApplicationsService,
    private listService: ApplicationListService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }

  ngOnInit() {

    this.dataService
      .getAll()
      .subscribe((data: Application[]) => this.applications = data);
  }



  viewAs(view: string) {

    this.view = ListView[view];
    this.listService.toggle(this.view);

    console.log('Toggled ', view, this.view as ListView);
  }
}
