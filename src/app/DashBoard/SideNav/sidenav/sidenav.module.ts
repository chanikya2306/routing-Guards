import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavRoutingModule } from './sidenav-routing.module';
import { SideNavChildComponent } from './SideNAvChild/side-nav-child/side-nav-child.component';
import { Sidenavchild2Component } from './SideNAvChild/sidenavchild2/sidenavchild2.component';



@NgModule({
  declarations: [
    SideNavChildComponent,
    Sidenavchild2Component,

  ],
  imports: [
    CommonModule,
    SidenavRoutingModule
  ]
})
export class SidenavModule { }
