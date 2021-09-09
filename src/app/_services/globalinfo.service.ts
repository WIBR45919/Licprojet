import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {EtudiantModel} from "../_models/etudiant.model";
import { retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalinfoService {

 private url = environment.URL_IUT_CONCOURS;
 private idUser!: number;

  constructor(private  http: HttpClient) { }

  getApiUrl(): string{
    return this.url;
  }

  getUserByID(): Observable<EtudiantModel>{
    return this.http.get<EtudiantModel>(this.getApiUrl() + 'admin/findEtudiantById/' + localStorage.getItem('ID'))
    .pipe(
      retry(2)
    )
  }
}
