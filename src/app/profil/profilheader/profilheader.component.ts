import {Component, Input, OnInit} from '@angular/core';
import {ScriptsService} from "../../_services/scripts.service";
import {ConnexionService} from "../../connexion/_service/connexion.service";
import {Router} from "@angular/router";

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

  constructor(private script: ScriptsService, private con: ConnexionService, private  router: Router) {
  }

  ngOnInit(): void {
  }

  OpenBurger(burger: any, responsive: any): void{
    this.script.responsiveMenu(burger, responsive);
   }

  menuprofil(): void{
    $('#menuProfil').toggleClass('activeprofil');
  }

  logout(): void{
    this.con.logout();
    this.router.navigate(['/connexion']);
  }
}
