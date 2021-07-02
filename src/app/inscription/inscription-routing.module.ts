import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import {InscriptionShellComponent} from "./inscription-shell/inscription-shell.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import {HelpComponent} from "./help/help.component";
import {PdfComponent} from "../pdf/pdf.component";

const routes: Routes = [
  { path: '', component: InscriptionShellComponent,
    children : [
      { path: '', component: InscriptionComponent },
      { path: 'inscription', component: InscriptionComponent },
      { path: 'help', component: HelpComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class InscriptionRoutingModule { }
