import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {I18nServiceService} from "../../i18n-service/i18n-service.service";

@Component({
  selector: 'app-inscription-shell',
  templateUrl: './inscription-shell.component.html',
  styleUrls: ['./inscription-shell.component.css']
})
export class InscriptionShellComponent implements OnInit {

  constructor(private translate: TranslateService, private i18nserice: I18nServiceService) { }

  ngOnInit(): void {
    this.i18nserice.localEvent.subscribe((local: string) => {
      this.translate.use(local);
    });
  }

}
