import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnexionRoutingModule } from './connexion-routing.module';
import { ConnexionComponent } from './connexion/connexion.component';
import { ConnexionShellComponent } from './connexion-shell/connexion-shell.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ConnexionService} from "./_service/connexion.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {SpinnerInterceptorService} from "../http-interceptor/spinner-interceptor.service";

@NgModule({
  declarations: [
      ConnexionComponent,
      ConnexionShellComponent
  ],
  imports: [
    CommonModule,
    ConnexionRoutingModule,
    ReactiveFormsModule, FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptorService,
      multi: true
    },
    ConnexionService
  ]
})
export class ConnexionModule { }
