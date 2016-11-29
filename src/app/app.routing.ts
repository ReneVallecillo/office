import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {ClientsComponent} from './clients/clients.component';
import {AboutComponent} from './about/about.component';
import {AuthGuard} from './guards/auth.guard';

import {clientsRouterConfig} from './clients/clients.routing';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    // { path: '', component: HomeComponent, canActivate:[AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutComponent },
    ...clientsRouterConfig,
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];


export const routing = RouterModule.forRoot(appRoutes)