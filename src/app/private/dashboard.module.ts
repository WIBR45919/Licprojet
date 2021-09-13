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
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { SpinnerInterceptorService } from '../http-interceptor/spinner-interceptor.service';
import { UserInService } from './_service-admin/user-in.service';


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
    MatIconModule,HttpClientModule
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptorService,
      multi: true
    },
    UserInService
  ]
})
export class DashboardModule { }
