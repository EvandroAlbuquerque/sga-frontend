import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionListComponent } from './components/action/action-list/action-list.component';
import { DonationListComponent } from './components/donation-list/donation-list.component';
import { InstitutionListComponent } from './components/institution/institution-list/institution-list.component';
import { NeedyPointListComponent } from './components/needy-point/needy-point-list/needy-point-list.component';
import { VolunteerListComponent } from './components/volunteer/volunteer-list/volunteer-list.component';


const routes: Routes = [
  { path: 'acao', component: ActionListComponent },
  { path: 'doacao', component: DonationListComponent},
  { path: 'instituicao', component: InstitutionListComponent },
  { path: 'ponto-carente', component: NeedyPointListComponent },
  { path: 'voluntario', component: VolunteerListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  ActionListComponent,
  DonationListComponent,
  InstitutionListComponent,
  NeedyPointListComponent,
  VolunteerListComponent
]