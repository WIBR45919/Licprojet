import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnexionRoutingModule } from './connexion-routing.module';
import { ConnexionComponent } from './connexion/connexion.component';
import { ConnexionShellComponent } from './connexion-shell/connexion-shell.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ConnexionService} from "./_service/connexion.service";

@NgModule({
  declarations: [
      ConnexionComponent,
      ConnexionShellComponent
  ],
  imports: [
    CommonModule,
    ConnexionRoutingModule,
    HttpClientModule, ReactiveFormsModule, FormsModule
  ],
  providers: [
    ConnexionService
  ]
})
export class ConnexionModule { }
