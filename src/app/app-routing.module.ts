import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './DashBoard/Footer/footer/footer.component';
import { HeaderComponent } from './DashBoard/Header/header/header.component';
import { MainPageComponent } from './DashBoard/MainPage/main-page/main-page.component';
import { RightsidenavComponent } from './DashBoard/rightsidenav/rightsidenav.component';
import { SidenavComponent } from './DashBoard/SideNav/sidenav/sidenav.component';
import { SideNavChildComponent } from './DashBoard/SideNav/sidenav/SideNAvChild/side-nav-child/side-nav-child.component';
import { Sidenavchild2Component } from './DashBoard/SideNav/sidenav/SideNAvChild/sidenavchild2/sidenavchild2.component';
import { AuthChildGuard } from './Shared/auth-child.guard';
import { AuthenticationGuard } from './Shared/authentication.guard';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'mainpage', component: MainPageComponent, canActivate: [AuthenticationGuard] },
  { path: 'sidenav', component: SidenavComponent },
  {
    path: 'sidenav',canActivateChild: [AuthChildGuard],
    children: [
      { path: 'childnav', component: SideNavChildComponent},
      {path:'childnav2',component:Sidenavchild2Component}
    
    ]
  },
  

  // {path:'sidenav',loadChildren:()=>import('./DashBoard/SideNav/sidenav/sidenav.module').then(m=>m.SidenavModule)},
  {path:'rightnav',component:RightsidenavComponent},
  { path: 'footer', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
