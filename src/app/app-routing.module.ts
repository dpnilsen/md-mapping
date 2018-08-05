import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { ApplicationsComponent } from './applications/applications.component';

import { EditorComponent } from './shared/editor/editor.component';
import { EditorTinyComponent } from './shared/editor-tiny/editor-tiny.component';

import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'applications', component: ApplicationsComponent },
  { path: 'editor', component: EditorComponent },
  { path: 'editor-tiny', component: EditorTinyComponent },
  { path: 'registration', component: RegistrationComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
