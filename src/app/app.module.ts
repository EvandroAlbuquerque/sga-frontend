import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionDetailComponent } from './action-detail/action-detail.component';
import { ActionListComponent } from './action-list/action-list.component';
import { VolunteerDetailComponent } from './volunteer-detail/volunteer-detail.component';
import { VolunteerListComponent } from './volunteer-list/volunteer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionDetailComponent,
    ActionListComponent,
    VolunteerDetailComponent,
    VolunteerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
