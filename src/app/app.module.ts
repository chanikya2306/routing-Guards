import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorDirective } from './Shared/error.directive';
import { FooterComponent } from './DashBoard/Footer/footer/footer.component';
import { HeaderComponent } from './DashBoard/Header/header/header.component';
import { MainPageComponent } from './DashBoard/MainPage/main-page/main-page.component';
import { SidenavComponent } from './DashBoard/SideNav/sidenav/sidenav.component';
import { RightsidenavComponent } from './DashBoard/rightsidenav/rightsidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorDirective,
    FooterComponent,
    HeaderComponent,
    MainPageComponent,
    SidenavComponent,
    RightsidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
