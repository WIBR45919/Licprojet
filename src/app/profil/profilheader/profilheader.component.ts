import {Component, Input, OnInit} from '@angular/core';
import {ScriptsService} from "../../_services/scripts.service";
import {ActivatedRoute} from "@angular/router";
import {EtudiantModel} from "../../_models/etudiant.model";
import {PdfService} from "../../pdf/pdf.service";
declare var $:any

@Component({
  selector: 'app-profilheader',
  templateUrl: './profilheader.component.html',
  styleUrls: ['./profilheader.component.css']
})
export class ProfilheaderComponent implements OnInit {

  @Input() fullname!: string;
  @Input() email!: string;
  @Input() id!: number;

  constructor(private script: ScriptsService) {
  }

  ngOnInit(): void {
    this.script.responsiveMenu();
  }

  menuprofil(): void{
    $('#menuProfil').toggleClass('activeprofil');
  }
}
