import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionShellComponent } from './connexion-shell/connexion-shell.component';
import { ConnexionComponent } from './connexion/connexion.component';

const routes: Routes = [
  { path: '', component: ConnexionShellComponent,
    children: [
        {path: '', component: ConnexionComponent},
        {path: 'connexion', component: ConnexionComponent}
    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }