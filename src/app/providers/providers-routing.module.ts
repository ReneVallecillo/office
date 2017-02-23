import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProvidersComponent } from './providers.component';


export const providersRoutes: Routes = [
  { path: 'providers', component: ProvidersComponent },
];

@NgModule({
//   imports: [RouterModule.forChild(providersRoutes)],
  exports: [RouterModule],
})
export class ProvidersRoutingModule { }
