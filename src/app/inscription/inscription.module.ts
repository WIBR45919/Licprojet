import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionComponent } from './inscription/inscription.component';
import {InscriptionRoutingModule} from "./inscription-routing.module";
import {InscriptionShellComponent} from "./inscription-shell/inscription-shell.component";
import {HeaderComponent} from "../header/header.component";



@NgModule({
  declarations: [
    InscriptionComponent,
    InscriptionShellComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    InscriptionRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class InscriptionModule { }
