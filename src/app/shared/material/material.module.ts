import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
        MatButtonModule, MatToolbarModule, MatCardModule,
        MatIconModule, MatSidenavModule, MatListModule, MatChipsModule,
        MatTableModule, MatPaginatorModule, MatSortModule,
        MatInputModule, MatFormFieldModule, MatCheckboxModule,
        MatOptionModule, MatSelectModule, MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule
      } from '@angular/material';
import {
        MatMomentDateModule
      } from '@angular/material-moment-adapter';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  imports: [
    MatButtonModule, MatToolbarModule, MatCardModule, MatIconModule,
    MatSidenavModule, MatListModule, MatChipsModule, MatTableModule,
    MatPaginatorModule, MatSortModule, MatInputModule, MatFormFieldModule,
    MatCheckboxModule, MatOptionModule, MatSelectModule, MatRadioModule, MatDatepickerModule,
    MatNativeDateModule, MatMomentDateModule,
    LayoutModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  declarations: [],
  exports: [
    MatButtonModule, MatToolbarModule, MatCardModule, MatIconModule,
    MatSidenavModule, MatListModule, MatChipsModule, MatTableModule,
    MatPaginatorModule, MatSortModule, MatInputModule, MatFormFieldModule,
    MatCheckboxModule, MatOptionModule, MatSelectModule, MatRadioModule, MatDatepickerModule,
    MatNativeDateModule, MatMomentDateModule,
    LayoutModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ]
})
export class MaterialModule { }


