import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {ConnexionService} from "../connexion/_service/connexion.service";

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  constructor(private auth: ConnexionService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.isUserLoggedIn()){
      return  true;
    }else{
      this.router.navigateByUrl('/connexion');
      return false;
    }
  }
}
