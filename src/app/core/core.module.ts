import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent } from './spinner/spinner.component';
import { LoggerService } from './logger.service';
import { SpinnerService } from './spinner/spinner.service';
import { WindowRef } from './windowref.service';
import { DomNavigateService } from './domnavigate.service';
import { EventsHubService } from './eventshub.service';
import { MessageService } from './message.service';
import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SpinnerComponent],
  declarations: [SpinnerComponent],
  providers: [
    LoggerService, SpinnerService, MessageService,
    WindowRef,
    EventsHubService,
    DomNavigateService
  ]
})
export class CoreModule {

  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
