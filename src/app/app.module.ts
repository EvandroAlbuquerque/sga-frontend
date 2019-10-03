import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionDetailComponent } from './components/action/action-detail/action-detail.component';
import { ActionListComponent } from './components/action/action-list/action-list.component';
import { VolunteerDetailComponent } from './components/volunteer/volunteer-detail/volunteer-detail.component';
import { VolunteerListComponent } from './components/volunteer/volunteer-list/volunteer-list.component';

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
