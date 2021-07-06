import { Component, OnInit } from '@angular/core';
import {EtudiantModel} from "../../_models/etudiant.model";
import {ActivatedRoute} from "@angular/router";
import {PdfService} from "../../pdf/pdf.service";

@Component({
  selector: 'app-profil-shell',
  templateUrl: './profil-shell.component.html',
  styleUrls: ['./profil-shell.component.css']
})
export class ProfilShellComponent implements OnInit {

  Etudiant!: EtudiantModel;
  id!: number;

  constructor(private route: ActivatedRoute, private pdf: PdfService) {
    this.route.queryParams.subscribe(params =>{
      this.id = params.id;
    });
  }

  ngOnInit(): void {
    this.pdf.getUserByID(this.id).subscribe((etu: EtudiantModel) => {
      if(etu !== null && etu !== undefined){
        this.Etudiant = etu;
      }
    });
  }

}
