import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalinfoService} from "../../_services/globalinfo.service";
import {Observable, Subject} from "rxjs";
import { EtudiantModel } from 'src/app/_models/etudiant.model';

@Injectable({
  providedIn: 'root'
})
export class UserInService implements OnInit{

  showSubject = new Subject<EtudiantModel[]>();
  ShowInfos!: EtudiantModel[];

  constructor(private http: HttpClient, private global: GlobalinfoService) {
  }

  ngOnInit():void{
    this.getInfos();
  }

  getInfos(): void{
    this.http.get<EtudiantModel[]>(this.global.getApiUrl() + 'admin/findAllEtudiant')
    .subscribe((etudiant) => {
      this.ShowInfos = etudiant;
      console.log(etudiant)
      this.emitSublect();
    },
    error =>{
      console.log(error);
    });
  }
  getHomme(){}
  getFemme(){}
  getNbreCandidats(){}
  getHandicape(){}

  emitSublect(): void{
    this.showSubject.next(this.ShowInfos);
  }
}
