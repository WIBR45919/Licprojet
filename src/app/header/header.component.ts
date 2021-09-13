import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion/_service/connexion.service';
import { EtudiantModel } from '../_models/etudiant.model';
import { ScriptsService } from '../_services/scripts.service';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isShow = true;
  fullname!:string;
  email!: string;
  Etudiant!: EtudiantModel;

  constructor(private script: ScriptsService, private con: ConnexionService) { }

  ngOnInit(): void {
    if(localStorage.getItem('USER_INFOS') !== null){
    this.Etudiant = JSON.parse(localStorage['USER_INFOS']).Etudiant; 
    this.fullname = this.Etudiant.nom + ' ' + this.Etudiant.prenom
    this.email = this.Etudiant.email;
    this.isShow = false
   }else{
     this.isShow = true;
   }
  }

  OpenBurger(burger: any, responsive: any): void{
   this.script.responsiveMenu(burger, responsive);
  }

  linkMenu(burger: any, responsive: any){
    this.OpenBurger(burger, responsive);
  }
  logout(): void{
    this.con.logout();
  }
  menuprofil(): void{
    $('#menuProfil').toggleClass('activeprofil');
  }
}
