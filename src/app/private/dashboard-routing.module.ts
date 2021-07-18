import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardShellComponent} from "./dashboard-shell/dashboard-shell.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '', component: DashboardShellComponent/*, canActivate: [GuardService]*/,
    children: [
      {
        path: '', component: DashboardComponent
      },
      {
        path: 'admin', component: DashboardComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
