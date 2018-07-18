import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatToolbarModule, MatCardModule,
          MatIconModule, MatSidenavModule, MatListModule, MatChipsModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    MatButtonModule, MatToolbarModule, MatCardModule, MatIconModule, MatSidenavModule, MatListModule, MatChipsModule,
    LayoutModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  declarations: [],
  exports: [
    MatButtonModule, MatToolbarModule, MatCardModule, MatIconModule, MatSidenavModule, MatListModule, MatChipsModule,
    LayoutModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ]
})
export class MaterialModule { }


