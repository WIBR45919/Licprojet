import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalinfoService} from "../../_services/globalinfo.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserInService {
  ShowInfos!: any[];

  constructor(private http: HttpClient, private global: GlobalinfoService) {
  }

  getInfos(): Observable<any>{
    return this.http.get(this.global.getApiUrl(), { });
  }
  getHomme(){}
  getFemme(){}
  getNbreCandidats(){}
  getHandicape(){}
}
