import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {I18nServiceService} from "../../i18n-service/i18n-service.service";
import { ActivatedRoute } from '@angular/router';
import { EtudiantModel } from 'src/app/_models/etudiant.model';

@Component({
  selector: 'app-profil-shell',
  templateUrl: './profil-shell.component.html',
  styleUrls: ['./profil-shell.component.css']
})
export class ProfilShellComponent implements OnInit {

  constructor(private active: ActivatedRoute,private translate: TranslateService, private i18nserice: I18nServiceService) { }

  ngOnInit(): void {
    this.i18nserice.localEvent.subscribe((local: string) => {
      this.translate.use(local);
    });

    this.active.data.subscribe((data) => {
      localStorage.setItem('USER_INFOS', JSON.stringify(data));
    }, error => {
      console.log(error);
    })
  }

}
