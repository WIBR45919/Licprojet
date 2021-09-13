import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalinfoService} from "../../_services/globalinfo.service";
import {Observable, Subject} from "rxjs";
import { EtudiantModel } from 'src/app/_models/etudiant.model';
import { retry } from 'rxjs/operators';
import { FiliereModel } from 'src/app/_models/filiere.model';
import { CursusModel } from 'src/app/_models/cursus.model';
import { NiveauModel } from 'src/app/_models/niveau.model';

@Injectable({
  providedIn: 'root'
})
export class UserInService implements OnInit{

  constructor(private http: HttpClient, private global: GlobalinfoService) {
  }

  ngOnInit():void{
    this.getInfos();
  }

  getInfos(): Observable<EtudiantModel[]>{
    return this.http.get<EtudiantModel[]>(this.global.getApiUrl() + 'admin/findAllEtudiant')
    .pipe(
      retry(2)
    )
  }

  getAdmis(): Observable<EtudiantModel[]>{
    return this.http.get<EtudiantModel[]>(this.global.getApiUrl() + '')
    .pipe(
      retry(2)
    )
  }

  getRefuse(): Observable<EtudiantModel[]>{
    return this.http.get<EtudiantModel[]>(this.global.getApiUrl() + '')
    .pipe(
      retry(2)
    )
  }

  getFiliere(): Observable<any[]>{
    return this.http.get<FiliereModel[]>(this.global.getApiUrl() + 'admin/filiere')
    .pipe(
      retry(2)
    )
  }

  getCursus(): Observable<any[]>{
    return this.http.get<CursusModel[]>(this.global.getApiUrl() + 'cursus')
    .pipe(
      retry(2)
    )
  }

  getNiveau(): Observable<any[]>{
    return this.http.get<NiveauModel[]>(this.global.getApiUrl() + 'niveau')
    .pipe(
      retry(2)
    )
  }

  setFiliere(newFil: any): void{
    this.http.post(this.global.getApiUrl() + 'admin/filiere', newFil).subscribe(data => {
      console.log(data) 
    },
    error => {
      console.log(error)
    })
  }
  getHomme(){}
  getFemme(){}
  getNbreCandidats(){}
  getHandicape(){}
}
