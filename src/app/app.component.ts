import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {I18nServiceService} from "./i18n-service/i18n-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  constructor(private translate: TranslateService, private  i18nService: I18nServiceService){
  }

  ngOnInit(): void {
    this.i18nService.localEvent.subscribe((local: string) => {
      this.translate.use(local);
      // console.log(local);
    });
  }

  changeLanguage(lang: HTMLElement): void{
    if(lang.textContent === 'FR') lang.innerText = 'EN'
    else lang.innerText = 'FR';
    lang.textContent === 'EN'? this.changeLocale('en'): this.changeLocale('fr');
  }
  changeLocale(local: string): void{
    this.i18nService.changeLocale(local);
  }
}
