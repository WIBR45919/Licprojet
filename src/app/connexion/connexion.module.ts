import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnexionComponent } from './connexion/connexion.component';
import { ConnexionShellComponent } from './connexion-shell/connexion-shell.component';

@NgModule({
  declarations: [
      ConnexionComponent,
      ConnexionShellComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ConnexionModule { }
