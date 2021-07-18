import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardShellComponent} from "./dashboard-shell/dashboard-shell.component";

const routes: Routes = [
  {
    path: '', component: DashboardShellComponent/*, canActivate: [GuardService]*/,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
