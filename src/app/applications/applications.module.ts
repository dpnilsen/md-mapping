import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { ApplicationComponent } from './application/application.component';
import { ApplicationListComponent } from './application-list/application-list.component';

@NgModule({
  imports: [
    CommonModule,
    ApplicationsRoutingModule
  ],
  declarations: [ApplicationComponent, ApplicationListComponent]
})
export class ApplicationsModule { }
