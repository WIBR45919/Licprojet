import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardShellComponent} from "./dashboard-shell/dashboard-shell.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AdmisComponent} from "./admis/admis.component";
import {FilieresComponent} from "./filieres/filieres.component";
import {PeriodeComponent} from "./periode/periode.component";
import {RefusedComponent} from "./refused/refused.component";
import { GuardService } from '../_services/guard.service';

//todo: enlever les commentaires sur la securisation de la route de DashboardComponent
const routes: Routes = [
  {
    path: '', component: DashboardShellComponent, canActivate: [GuardService],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'admin', component: DashboardComponent },
      { path: 'admis', component: AdmisComponent },
      { path: 'refused', component: RefusedComponent },
      { path: 'school', component: FilieresComponent },
      { path: 'time', component: PeriodeComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
