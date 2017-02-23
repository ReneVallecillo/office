// import {fakeBackendProvider} from './helpers/fake-backend';
// import { MockBackend, MockConnection } from '@angular/http/testing';
// import { BaseRequestOptions } from '@angular/http';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';


import {AppComponent} from './app.component';
import { routing }        from './app.routing';

import { AuthGuard } from './guards/auth.guard';
import { AuthenticationService, UserService, SharedService, AlertService } from './services/';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {ClientsComponent, ClientDetailComponent} from './clients/';
import {AboutComponent} from './about/about.component';
import { MaterialModule } from '@angular/material';
import { RegisterComponent } from './register/register.component';
import { AlertComponent} from './directives/alert.component';

// Modules
import { ProfileModule } from './profile/profile.module';
import { RefundsModule } from './refunds/refunds.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ReportsModule } from './reports/reports.module';
import { ProvidersModule } from './providers/providers.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    ClientsComponent,
    ClientDetailComponent,
    RegisterComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot(),
    ProfileModule,
    RefundsModule,
    DashboardModule,
    ReportsModule,
    ProvidersModule,

  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    SharedService,
    AlertService,

    // //fake backend\
    // fakeBackendProvider,
    // MockBackend,
    // BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
