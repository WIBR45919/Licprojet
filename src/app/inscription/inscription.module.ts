import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionComponent } from './inscription/inscription.component';
import {InscriptionRoutingModule} from "./inscription-routing.module";
import {InscriptionShellComponent} from "./inscription-shell/inscription-shell.component";
import {HeaderComponent} from "../header/header.component";
import {MatStepperModule} from "@angular/material/stepper";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {StepperOrientation} from "@angular/material/stepper/testing";



@NgModule({
  declarations: [
    InscriptionComponent,
    InscriptionShellComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    InscriptionRoutingModule,
    MatStepperModule,
    MatButtonModule,MatIconModule,StepperOrientation
  ],
  exports: [
    HeaderComponent
  ]
})
export class InscriptionModule { }
