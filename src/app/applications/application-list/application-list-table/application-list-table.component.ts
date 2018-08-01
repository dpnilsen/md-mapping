import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatCheckbox } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

import { Application } from '../../models/application.interface';

@Component({
  selector: 'app-application-list-table',
  styleUrls: ['./application-list-table.component.scss'],
  templateUrl: './application-list-table.component.html'
})
export class ApplicationListTableComponent implements OnInit {

  private _data;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input()
  set data(data: Application[]) {
    // console.log('Data', data);
    this._data = new MatTableDataSource<Application>(data);
  }
  @Input()
  useCheckbox = true;

  @Output()
  view: EventEmitter<Application> = new EventEmitter<Application>();

  get dataSource() {
    return this._data;
  }

  selection = new SelectionModel<Application>(true, []);

  columns = [
    { columnDef: 'id',            header: 'No.',      cell: (element: Application) => `${element.id}`           },
    { columnDef: 'name',          header: 'Name',     cell: (element: Application) => `${element.name}`         },
    { columnDef: 'applicationId', header: 'App Id',   cell: (element: Application) => `${element.applicationId}`},
    { columnDef: 'checkInDate',   header: 'Check In', cell: (element: Application) => `${element.checkInDate  }`},
  ];

  // displayedColumns = this.columns.map(c => c.columnDef);

  get displayedColumns() {

    // this.dataSource.map(c => c.)
    return this.columns.map(c => c.columnDef);
  }
  // displayedColumns: string[] = ['id', 'name', 'applicationId', 'checkInDate'];

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    // this.displayedColumns = this.dataSource.map(x => x.name);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  getColumnIcon(icon) { return null; }
}
