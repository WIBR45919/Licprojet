import {Component, Input, OnInit} from '@angular/core';
import {ScriptsService} from "../../_services/scripts.service";
import {ConnexionService} from "../../connexion/_service/connexion.service";
import { EtudiantModel } from 'src/app/_models/etudiant.model';

declare var $:any

@Component({
  selector: 'app-profilheader',
  templateUrl: './profilheader.component.html',
  styleUrls: ['./profilheader.component.css']
})
export class ProfilheaderComponent implements OnInit {

  fullname!: string;
  email!: string;
  Etudiant!: EtudiantModel;

  constructor(private script: ScriptsService, private con: ConnexionService) {
  }

  ngOnInit(): void {
    this.Etudiant = JSON.parse(localStorage['USER_INFOS']).Etudiant; 
    this.fullname = this.Etudiant.nom + ' ' + this.Etudiant.prenom
    this.email = this.Etudiant.email
  }

  OpenBurger(burger: any, responsive: any): void{
    this.script.responsiveMenu(burger, responsive);
   }

  menuprofil(): void{
    $('#menuProfil').toggleClass('activeprofil');
  }

  logout(): void{
    this.con.logout();
  }
}
