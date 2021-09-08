import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {PdfComponent} from "./pdf/pdf.component";
import { ProfilresolveService } from './profil/__service/profilresolve.service';
import {GuardService} from "./_services/guard.service";
import { GuardchildService } from './_services/guardchild.service';
import {PreloadService} from "./_services/preload.service";
import { SessionService } from './_services/session.service';

const routes: Routes = [
  {
    path: '', component: HomeComponent,  pathMatch: 'full',
  },

  {
    path: 'home', component: HomeComponent ,
  },

  { path: 'connexion', loadChildren: () => import('./connexion/connexion.module').then(m => m.ConnexionModule),
    data: {
      shouldPreload: true
    }, canActivate: [SessionService]},

  { path: 'inscription', loadChildren: () => import('./inscription/inscription.module').then(w => w.InscriptionModule),
    data: {
      shouldPreload: true
    } },

  { path: 'profil', loadChildren: () => import('./profil/profil.module').then(p => p.ProfilModule),
    canActivate: [GuardService], canActivateChild: [GuardchildService],
    resolve: {
      Etudiant: ProfilresolveService
    }
  },

  { path: 'pdf/:objEtudiant', component: PdfComponent, canActivate: [GuardService] },

  { path: 'admin', loadChildren: ()=>import('./private/dashboard.module').then(admin => admin.DashboardModule),
    /*, canActivate: [GuardService], canActivateChild: [GuardchildService] */},
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
