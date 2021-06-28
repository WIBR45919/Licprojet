import { Injectable } from '@angular/core';
import {GlobalinfoService} from "../../_services/globalinfo.service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private global: GlobalinfoService, private  http: HttpClient) { }
  //todo: ajouter le header pour le token d'authentification et le type de reponse attendu
  sendImageServer(tab: any): Observable<any>{
    return this.http.post(this.global.url, tab);
  }
}
