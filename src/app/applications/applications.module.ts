import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  {
    path: 'applications',
    children: [
      { path: '', component: ApplicationsComponent },
      { path: 'list', component: ApplicationListComponent },
      { path: ':id', component: ApplicationDetailComponent },
    ]

   }
];

@NgModule({
  imports: [
    SharedModule,
    ApplicationListModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ApplicationsComponent,
    ApplicationDetailComponent
  ],
  providers: [
    ApplicationsService
  ]
})
export class ApplicationsModule { }
