import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfilShellComponent} from "./profil-shell/profil-shell.component";
import {ProfilComponent} from "./profil/profil.component";
import {ImportComponent} from "./import/import.component";

const routes: Routes = [
  {
    path: '', component: ProfilShellComponent, children: [
      {path: '', component: ProfilComponent},
      {path: 'profil', component: ProfilComponent},
      {path: 'import', component: ImportComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilRoutingModule { }
