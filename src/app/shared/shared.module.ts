import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MaterialModule } from './material/material.module';

import { NavigationModule } from './navigation/navigation.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { InitCapsPipe } from './init-caps.pipe';
import { ToastComponent } from './toast/toast.component';
import { HighlightDirective } from './highlight.directive';
import { ValidatorDirective } from './validator.directive';
import { MessagesComponent } from './messages/messages.component';
import { FilterTextComponent } from './filter-text/filter-text.component';
import { EscapeHtmlPipe } from './keep-html.pipe';
import { EscapeStylePipe } from './keep-style.pipe';
import { NotFoundComponent } from './notfound.component';

@NgModule({
  imports: [
    CommonModule, HttpClientModule, MaterialModule, FormsModule, BrowserAnimationsModule,
    NavigationModule
  ],
  declarations: [
    HeaderComponent, FooterComponent,
    InitCapsPipe, ToastComponent, HighlightDirective, ValidatorDirective, MessagesComponent, FilterTextComponent,
    EscapeHtmlPipe, EscapeStylePipe,
    NotFoundComponent
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    NavigationModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
