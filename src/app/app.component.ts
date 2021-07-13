import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {I18nServiceService} from "./i18n-service/i18n-service.service";
declare var $: any;
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

  changeLanguage(){
    const vel = $('.internalisation > span').text();
    // console.log(vel);
    if(vel === 'FR'){
      $('.internalisation span').text('EN');
      this.changeLocale('fr');
    }else{
      $('.internalisation span').text('FR');
      this.changeLocale('en');
    }
  }
  changeLocale(local: string){
    this.i18nService.changeLocale(local);
  }
}
