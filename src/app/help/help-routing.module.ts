import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {HelpShellComponent} from "./help-shell/help-shell.component";
import {HelpComponent} from "./help/help.component";

const routes: Routes = [
  { path: '', component: HelpShellComponent,
    children: [
      { path:'',component: HelpComponent },
      { path:'help',component: HelpComponent }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class HelpRoutingModule { }
