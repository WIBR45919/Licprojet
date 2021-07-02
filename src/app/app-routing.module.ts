import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {PdfComponent} from "./pdf/pdf.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'connexion', loadChildren: () => import('./connexion/connexion.module').then(m => m.ConnexionModule)},
  { path: 'inscription', loadChildren: () => import('./inscription/inscription.module').then(w => w.InscriptionModule) },
  { path: 'profil', loadChildren: () => import('./profil/profil.module').then(p => p.ProfilModule) },
  { path: 'pdf', component: PdfComponent },
  { path: '**', component: NotfoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
