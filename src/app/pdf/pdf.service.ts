import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalinfoService} from "../_services/globalinfo.service";
import {Observable} from "rxjs";
import {EtudiantModel} from "../_models/etudiant.model";

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  constructor(private http: HttpClient, private global: GlobalinfoService) { }

  getUserByID(id: any): Observable<any>{
    console.log(id);
    return this.http.get<EtudiantModel>(this.global.getApiUrl() + 'inscrit/' + id, { observe: "body" });
  }
}
