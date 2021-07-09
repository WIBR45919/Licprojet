import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class I18nServiceService {

  localEvent = new Subject<string>();

  constructor(private translate: TranslateService) { }

  changeLocale(local: string){
    this.translate.use(local);
    this.localEvent.next(local);
  }

}
