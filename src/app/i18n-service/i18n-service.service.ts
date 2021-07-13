import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class I18nServiceService {

  localEvent = new BehaviorSubject<string>('en');

  constructor(private translate: TranslateService) { }

  changeLocale(local: string){
    this.translate.use(local);
    this.localEvent.next(local);
  }

}
