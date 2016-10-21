import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientDetailComponent } from './client-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClientsComponent, ClientDetailComponent, ClientDetailComponent]
})
export class ClientsModule { }
