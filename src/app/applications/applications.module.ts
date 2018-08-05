import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditorModule } from '@tinymce/tinymce-angular';

// Shared exports CommonModule, FormsModule, and more ....
import { SharedModule } from '../shared/shared.module';

// modules
import { ApplicationListModule } from './application-list/application-list.module';

// containers
import { ApplicationsComponent } from './applications.component';

import { ApplicationListComponent } from './application-list/application-list.component';

// pages
import { ApplicationDetailComponent } from './application-detail/application-detail.component';

// services
import { ApplicationsService } from './applications.service';
import { ApplicationEditComponent } from './application-edit/application-edit.component';

const routes: Routes = [
  {
    path: 'applications',
    children: [
      { path: '', component: ApplicationsComponent },
      { path: 'list', component: ApplicationListComponent },
      { path: 'edit', component: ApplicationEditComponent },
      { path: ':id', component: ApplicationDetailComponent },
    ]

   }
];

@NgModule({
  imports: [
    SharedModule,
    EditorModule,
    ApplicationListModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ApplicationsComponent,
    ApplicationDetailComponent,
    ApplicationEditComponent
  ],
  providers: [
    ApplicationsService
  ]
})
export class ApplicationsModule { }
