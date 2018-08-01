import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Shared exports CommonModule, FormsModule, and more ....
import { SharedModule } from '../../shared/shared.module';

// containers
import { ApplicationListComponent } from './application-list.component';

// pages
import { ApplicationListTableComponent } from './application-list-table/application-list-table.component';
import { ApplicationListCardsComponent } from './application-list-cards/application-list-cards.component';

// services
import { ApplicationsService } from '../applications.service';
import { ApplicationListService } from './application-list.service';

// const routes: Routes = [
//   {
//     path: 'list',
//     children: [
//       // { path: '', component: ApplicationListComponent },
//       { path: 'table', component: ApplicationListTableComponent },
//       { path: 'cards', component: ApplicationListCardsComponent },
//     ]

//    }
// ];

@NgModule({
  imports: [
    SharedModule,
    // RouterModule.forChild(routes)
  ],
  declarations: [
    ApplicationListComponent,
    ApplicationListCardsComponent,
    ApplicationListTableComponent
  ],
  exports: [
    ApplicationListComponent,
  ],
  providers: [
    ApplicationsService,
    ApplicationListService
  ]
})
export class ApplicationListModule { }
