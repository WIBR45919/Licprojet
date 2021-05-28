import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import {InscriptionShellComponent} from "./inscription-shell/inscription-shell.component";
import {InscriptionComponent} from "./inscription/inscription.component";

const routes: Routes = [
  { path: '', component: InscriptionShellComponent,
    children : [
      { path: '', component: InscriptionComponent },
      { path: 'inscription', component: InscriptionComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class InscriptionRoutingModule { }
