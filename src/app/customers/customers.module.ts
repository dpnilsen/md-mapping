import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Shared exports CommonModule, FormsModule, and more ....
import { SharedModule } from '../shared/shared.module';

// containers
import { CustomersComponent } from './customers.component';
import { CustomerViewerComponent } from './customer-viewer/customer-viewer.component';

// pages
import { CustomersCountComponent } from './customers-count/customers-count.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

// services
import { CustomersService } from './customers.service';


const routes: Routes = [
  {
    path: 'customers',
    children: [
      { path: '', component: CustomersComponent },
      { path: ':id', component: CustomerViewerComponent },
    ]

   }
];

@NgModule({
  imports: [
    // FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CustomersComponent,
    CustomerViewerComponent,
    CustomersCountComponent,
    CustomerDetailComponent,
    CustomerFormComponent
  ],
  providers: [
    CustomersService
  ]
})
export class CustomersModule { }
