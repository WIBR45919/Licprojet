import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {loginModel} from "../../_models/login.model";
import {GlobalinfoService} from "../../_services/globalinfo.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  constructor(private http: HttpClient, private global: GlobalinfoService) { }

  Login(user: loginModel): Observable<any>{
    return this.http.post(this.global.getApiUrl(), user, {  });
  }
}
