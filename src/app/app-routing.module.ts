import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {PdfComponent} from "./pdf/pdf.component";
import {GuardService} from "./_services/guard.service";

const routes: Routes = [
  { path: '', component: HomeComponent,  pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'connexion', loadChildren: () => import('./connexion/connexion.module').then(m => m.ConnexionModule)},
  { path: 'inscription', loadChildren: () => import('./inscription/inscription.module').then(w => w.InscriptionModule) },
  { path: 'profil', loadChildren: () => import('./profil/profil.module').then(p => p.ProfilModule), canActivate: [GuardService]
    , canActivateChild: [GuardService]},
  { path: 'pdf', component: PdfComponent, canActivate: [GuardService] },
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
