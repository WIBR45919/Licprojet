import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {I18nServiceService} from "../../i18n-service/i18n-service.service";

@Component({
  selector: 'app-connexion-shell',
  templateUrl: './connexion-shell.component.html',
  styleUrls: ['./connexion-shell.component.css']
})
export class ConnexionShellComponent implements OnInit {

  constructor(private translate: TranslateService, private i18nserice: I18nServiceService) {
  }

  ngOnInit(): void {
    this.i18nserice.localEvent.subscribe((local: string) => {
      this.translate.use(local);
    });
  }

}
