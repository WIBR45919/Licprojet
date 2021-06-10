import { Component, OnInit } from '@angular/core';
import { gsap, Back } from 'gsap';
import {ScriptsService} from "../_services/scripts.service";
declare var $:any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private scripts: ScriptsService) { }

  ngOnInit(): void {
   this.scripts.responsiveMenu();
   this.scripts.corpsHome();
  }

}
