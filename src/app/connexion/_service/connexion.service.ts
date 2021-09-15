import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import {HttpClient} from "@angular/common/http";
import {loginModel} from "../../_models/login.model";
import {GlobalinfoService} from "../../_services/globalinfo.service";
import {Observable, of} from "rxjs";
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import jwtDecode from 'jwt-decode';
import { jWTModel } from 'src/app/_models/jwt.model';
import { ResetModel } from 'src/app/_models/reset.model';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'USERAUTH';
  user!: loginModel;
  userReset!: ResetModel;
  jwt!: jWTModel;
  conter = false;

  constructor(private http: HttpClient, private global: GlobalinfoService,
    private router: Router) { }

  Login(user: loginModel): Observable<any>{
    this.user = user;
    return this.http.post(this.global.getApiUrl() + 'auth', user, {observe: 'body'});
  }

  resetPassword(userreset: ResetModel): Observable<any>{
    this.userReset = userreset;
    return this.http.post(this.global.getApiUrl() + 'changePasswordInscrit', userreset, {observe: 'body'});
  }
  registerSuccessfulLogin(token: string, ID: string): void{
    localStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, token);
    localStorage.setItem('ID', ID);
  }

  logout(): void{
    localStorage.clear();
    localStorage.removeItem('USER_INFOS');
    
    this.router.navigate(['/connexion']);
  }

  isUserLoggedIn(): boolean{
    let user = localStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null || user === '') return false
    else return true
  }

  getLoggedInUserName(): string{
    let user = localStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return '';
    else return user.toString();
  }

  logoutTimer(expirationDate: number): void{
    of(true).pipe(
      delay( expirationDate * 1000)
    ).subscribe(_ => {
      this.notifyUser();
    });
  }

  decodeToken(token: string): void{
    this.jwt = jwtDecode(token)
    this.logoutTimer(this.jwt.exp);
  }

  notifyUser(): void{
    Swal.fire({
      title: 'Time Over',
      text: "Le temps de connexion est dépassé!",
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, redirect!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.logout();
      }
    })
  }
}
