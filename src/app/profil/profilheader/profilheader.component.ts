import { Component, OnInit } from '@angular/core';
import {ScriptsService} from "../../_services/scripts.service";
declare var $:any

@Component({
  selector: 'app-profilheader',
  templateUrl: './profilheader.component.html',
  styleUrls: ['./profilheader.component.css']
})
export class ProfilheaderComponent implements OnInit {

  constructor(private script: ScriptsService) { }

  ngOnInit(): void {
    this.script.responsiveMenu();
  }

  menuprofil(): void{
    $('#menuProfil').toggleClass('activeprofil');
  }
}
