import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EtudiantModel } from 'src/app/_models/etudiant.model';
import { GlobalinfoService } from 'src/app/_services/globalinfo.service';

@Injectable({
  providedIn: 'root'
})
export class ProfilresolveService implements Resolve<EtudiantModel>{

  constructor(private profil: GlobalinfoService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): EtudiantModel | Observable<EtudiantModel> | Promise<EtudiantModel> {
   return this.profil.getUserByID();
  }
}
