import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PdfService} from "../../pdf/pdf.service";
import {EtudiantModel} from "../../_models/etudiant.model";
declare var $: any;

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  isValidate = false;
  id!: number;
  Etudiant!: EtudiantModel;
  date = new Date().getUTCFullYear();

  constructor(private route:ActivatedRoute, private pdf: PdfService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.state();
    this.pdf.getUserByID(this.id).subscribe((etu: EtudiantModel) => {
      if(etu !== null && etu !== undefined){
        this.Etudiant = etu;
      }
    });
  }

  state():void{
    if(!this.isValidate){
      $('#span-state').css({ color : 'darkred'});
    }else{
      $('#span-state').css({ color : 'green'});
    }
  }
}
