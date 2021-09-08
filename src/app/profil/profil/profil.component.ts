import {Component, OnInit} from '@angular/core';
import {EtudiantModel} from "../../_models/etudiant.model";
import {GlobalinfoService} from "../../_services/globalinfo.service";
declare var $: any;

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  isValidate = false;
  Etudiant!: EtudiantModel;
  date = new Date().getUTCFullYear();

  constructor(private global: GlobalinfoService) { }

  ngOnInit(): void {
    this.state();
    this.Etudiant = JSON.parse(localStorage['USER_INFOS']).Etudiant;
  }

  state():void{
    if(!this.isValidate){
      $('#span-state').css({ color : 'darkred'});
    }else{
      $('#span-state').css({ color : 'green'});
    }
  }
}
