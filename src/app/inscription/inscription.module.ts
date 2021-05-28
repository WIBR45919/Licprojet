import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionComponent } from './inscription/inscription.component';
import {InscriptionRoutingModule} from "./inscription-routing.module";
import {InscriptionShellComponent} from "./inscription-shell/inscription-shell.component";



@NgModule({
  declarations: [
    InscriptionComponent,
    InscriptionShellComponent
  ],
  imports: [
    CommonModule,
    InscriptionRoutingModule
  ]
})
export class InscriptionModule { }
