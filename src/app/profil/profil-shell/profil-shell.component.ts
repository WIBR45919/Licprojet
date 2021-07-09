import { Component, OnInit } from '@angular/core';
import {EtudiantModel} from "../../_models/etudiant.model";
import {ActivatedRoute} from "@angular/router";
import {GlobalinfoService} from "../../_services/globalinfo.service";

@Component({
  selector: 'app-profil-shell',
  templateUrl: './profil-shell.component.html',
  styleUrls: ['./profil-shell.component.css']
})
export class ProfilShellComponent implements OnInit {

  Etudiant!: EtudiantModel;
  id!: number;

  constructor(private route: ActivatedRoute, private global: GlobalinfoService) {
      this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.global.getUserByID().subscribe((etudiant: EtudiantModel) => {
      if(etudiant !== null && etudiant !== undefined){
        this.Etudiant = etudiant;
      }
    });
  }

}
