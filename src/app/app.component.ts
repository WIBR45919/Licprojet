import {Component, OnInit} from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import {TranslateService} from "@ngx-translate/core";
import { ConnexionService } from './connexion/_service/connexion.service';
import {I18nServiceService} from "./i18n-service/i18n-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  cont = false
  loading = false;

  constructor(private translate: TranslateService, private  i18nService: I18nServiceService,
    private con: ConnexionService, private router: Router){
  }

  ngOnInit(): void {
    this.router.events.subscribe(ev => {
     
      if (ev instanceof NavigationStart) {
        this.loading = true;
      }
      if (ev instanceof NavigationEnd || ev instanceof NavigationCancel || ev instanceof NavigationError) {
        this.loading = false;
      }
    });
    this.i18nService.localEvent.subscribe((local: string) => {
      this.translate.use(local);
      // console.log(local);
    });
    this.cont = this.con.conter;
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
