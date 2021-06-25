import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { ProfilheaderComponent } from './profilheader/profilheader.component';
import {ProfilShellComponent} from "./profil-shell/profil-shell.component";
import { ImportComponent } from './import/import.component';


@NgModule({
  declarations: [
    ProfilheaderComponent,
    ProfilShellComponent,
    ProfilheaderComponent,
    ImportComponent
  ],
  exports: [
    ProfilheaderComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule
  ]
})
export class ProfilModule { }
