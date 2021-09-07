import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConnexionService } from '../connexion/_service/connexion.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService implements CanActivate{

  constructor(private router: Router, private con: ConnexionService) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(!this.con.isUserLoggedIn()){
      return true;
    }else{
      this.router.navigate(['/profil']);
      return false;
    }
  }
}
