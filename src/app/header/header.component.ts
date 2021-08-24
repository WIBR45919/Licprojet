import { Component, OnInit } from '@angular/core';
import { ScriptsService } from '../_services/scripts.service';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private script: ScriptsService) { }

  ngOnInit(): void {
  }

  OpenBurger(burger: any, responsive: any): void{
   this.script.responsiveMenu(burger, responsive);
  }

  linkMenu(burger: any, responsive: any){
    this.OpenBurger(burger, responsive);
  }
}
