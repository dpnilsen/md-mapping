import { Component, OnInit, Input, ViewChild, Output, EventEmitter, AfterViewInit } from '@angular/core';

import { Application } from '../models/application.interface';
import { ListView } from '../models/application-list-view.enum';

import { ApplicationListService } from './application-list.service';
import { nextTick } from 'q';

@Component({
  selector: 'app-application-list',
  template: `
  <div class="component-wrapper">
  <div *ngIf="tableView; then tableBlock else cardsBlock"></div>
  <ng-template #tableBlock>
  <app-application-list-table [data]="applications"></app-application-list-table>
  </ng-template>
  <ng-template #cardsBlock>
  <app-application-list-cards [data]="applications"></app-application-list-cards>
  </ng-template>
  </div>
  `
})
export class ApplicationListComponent implements OnInit, AfterViewInit {

  private _data;
  tableView;

  // @ViewChild('messageBox') messageBox: MessagesComponent;

  @Input()
  set data(data: Application[]) {
    // console.log('Data', data);
    this._data = data;
  }

  get applications() {
    return this._data;
  }

  @Input()
  set view(view: ListView) {

    console.log('Input view as Cards ', view === ListView.Cards);
    this.tableView = false;
    if (view === ListView.Table) {
      this.tableView = true;
    }
  }

  constructor(private listService: ApplicationListService) {}

  ngOnInit(): void {
  }

  // toggle(view: string) {
  //   this.view = view;
  // }

  ngAfterViewInit(): void {

    this.listService.toggle$.subscribe(
      value => {
        console.log('List view toggle ', value);
        this.toggleView(value);
      }
    );
  }

  toggleView(view: ListView) {

    this.tableView = false;
    console.log('Toggle Show as Card', view === ListView.Cards);
    if (view === ListView.Table) {
      console.log('Show as table');
      this.tableView = true;
    }

  }
}
