import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConnexionService } from '../connexion/_service/connexion.service';

@Injectable({
  providedIn: 'root'
})
export class GuardchildService implements CanActivateChild{

  constructor(private auth: ConnexionService, private router: Router) { }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.auth.isUserLoggedIn()){
      return  true;
  }else{
    this.router.navigateByUrl('/connexion');
    return false;
  }
  }
}
