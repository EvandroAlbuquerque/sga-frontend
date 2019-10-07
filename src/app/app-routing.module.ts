import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionListComponent } from './components/action/action-list/action-list.component';
import { InstitutionListComponent } from './components/institution/institution-list/institution-list.component';
import { NeedyPointListComponent } from './components/needy-point/needy-point-list/needy-point-list.component';
import { VolunteerListComponent } from './components/volunteer/volunteer-list/volunteer-list.component';


const routes: Routes = [
  { path: 'acao', component: ActionListComponent },
  { path: 'instituicao', component: InstitutionListComponent },
  { path: 'pontocarente', component: NeedyPointListComponent },
  { path: 'voluntario', component: VolunteerListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  ActionListComponent,
  InstitutionListComponent,
  NeedyPointListComponent,
  VolunteerListComponent
]