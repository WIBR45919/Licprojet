import { Injectable } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class I18nServiceService {

  localEvent = new BehaviorSubject<string>('en');

  constructor(private translate: TranslateService) { }

  changeLocale(local: string): void{
    this.translate.use(local);
    this.localEvent.next(local);
  }

}
