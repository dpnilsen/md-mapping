import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


import { Application } from '../../models/application.interface';


@Component({
  selector: 'app-application-list-cards',
  templateUrl: './application-list-cards.component.html',
  styleUrls: ['./application-list-cards.component.scss']
})
export class ApplicationListCardsComponent implements OnInit {

  @Input()
  data: Application[];

  @Output()
  view: EventEmitter<Application> = new EventEmitter<Application>();

  constructor() { }

  ngOnInit() {
  }

}
