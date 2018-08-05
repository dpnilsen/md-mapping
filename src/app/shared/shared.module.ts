import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { MaterialModule } from './material/material.module';

import { NavigationModule } from './navigation/navigation.module';

import { FormModule } from './form/form.module';

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
import { EditorComponent } from './editor/editor.component';
import { EditorTinyComponent } from './editor-tiny/editor-tiny.component';
import { DynamicFieldDirective } from './dynamic-field.directive';

import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';


@NgModule({
  imports: [
    CommonModule, HttpClientModule, MaterialModule, FormsModule, BrowserAnimationsModule,
    NavigationModule, ReactiveFormsModule, FormModule,
    CKEditorModule
  ],
  declarations: [
    HeaderComponent, FooterComponent,
    InitCapsPipe, ToastComponent, HighlightDirective, ValidatorDirective,
    MessagesComponent,
    FilterTextComponent,
    EscapeHtmlPipe, EscapeStylePipe,
    NotFoundComponent,
    EditorComponent,
    EditorTinyComponent,
    DynamicFieldDirective,
    DynamicFormComponent
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule, // angular
    ReactiveFormsModule,
    FormModule,
    BrowserAnimationsModule,
    NavigationModule,
    CKEditorModule,
    HeaderComponent,
    FooterComponent,
    MessagesComponent,
    DynamicFieldDirective,
    DynamicFormComponent
  ]
})
export class SharedModule { }
