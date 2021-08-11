import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardShellComponent} from "./dashboard-shell/dashboard-shell.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {MatIconModule} from "@angular/material/icon";
import {AdmisComponent} from "./admis/admis.component";
import { RefusedComponent } from './refused/refused.component';
import { FilieresComponent } from './filieres/filieres.component';
import { PeriodeComponent } from './periode/periode.component';


@NgModule({
  declarations: [
    DashboardShellComponent,
    DashboardComponent,
    AdmisComponent,
    RefusedComponent,
    FilieresComponent,
    PeriodeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule
  ]
})
export class DashboardModule { }
