import { Component, OnInit } from '@angular/core';
import {EtudiantModel} from "../../_models/etudiant.model";
import {GlobalinfoService} from "../../_services/globalinfo.service";
import {TranslateService} from "@ngx-translate/core";
import {I18nServiceService} from "../../i18n-service/i18n-service.service";

@Component({
  selector: 'app-profil-shell',
  templateUrl: './profil-shell.component.html',
  styleUrls: ['./profil-shell.component.css']
})
export class ProfilShellComponent implements OnInit {

  Etudiant!: EtudiantModel;
  id!: number;

  constructor(private global: GlobalinfoService,private translate: TranslateService, private i18nserice: I18nServiceService) { }

  ngOnInit(): void {
    this.i18nserice.localEvent.subscribe((local: string) => {
      this.translate.use(local);
    });

    this.global.getUserByID().subscribe((etudiant) => {
      console.log(etudiant);
      if(etudiant !== null && etudiant !== undefined){
        this.Etudiant = etudiant;
      }
    }, error => {
      console.log(error);
    });
  }

}
