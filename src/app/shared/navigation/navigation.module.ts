import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';

import { NavLeftComponent } from './nav-left/nav-left.component';
import { NavMenuComponent } from './nav-top/nav-menu.component';
import { NavMenuService } from './nav-menu.service';



@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: [NavLeftComponent, NavMenuComponent],
  exports: [NavLeftComponent, NavMenuComponent],
  providers: [ NavMenuService]

})
export class NavigationModule { }
