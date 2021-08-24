import { Component, OnInit } from '@angular/core';
import {ScriptsService} from "../_services/scripts.service";
import {TranslateService} from "@ngx-translate/core";
declare var $:any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private scripts: ScriptsService,translate: TranslateService) {
  }

  ngOnInit(): void { 
   this.scripts.corpsHome();
  }

  OpenBurger(burger: any, responsive: any): void{
      this.scripts.responsiveMenu(burger, responsive);
  }
}
