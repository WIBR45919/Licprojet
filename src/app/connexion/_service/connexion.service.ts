import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {loginModel} from "../../_models/login.model";
import {GlobalinfoService} from "../../_services/globalinfo.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'USERAUTH';
  user!: loginModel;

  constructor(private http: HttpClient, private global: GlobalinfoService) { }

  Login(user: loginModel): Observable<any>{
    this.user = user;
    return this.http.post(this.global.getApiUrl() + 'inscrit', {observe: 'body'});
  }

  registerSuccessfulLogin(token: string) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, token);
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null || user === '') return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return '';
    return user
  }
}
