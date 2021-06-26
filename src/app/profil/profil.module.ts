import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { ProfilheaderComponent } from './profilheader/profilheader.component';
import {ProfilShellComponent} from "./profil-shell/profil-shell.component";
import { ImportComponent } from './import/import.component';
import {MatIconModule} from "@angular/material/icon";
import {ProfilComponent} from "./profil/profil.component";


@NgModule({
  declarations: [
    ProfilComponent,
    ProfilShellComponent,
    ProfilheaderComponent,
    ImportComponent
  ],
  exports: [
    ProfilheaderComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule,MatIconModule
  ]
})
export class ProfilModule { }
