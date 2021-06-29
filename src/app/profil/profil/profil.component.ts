import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  isValidate = false;
  date = new Date().getUTCFullYear();

  constructor() { }

  ngOnInit(): void {
    this.state();
  }

  state():void{
    if(!this.isValidate){
      $('#span-state').css({ color : 'darkred'});
    }else{
      $('#span-state').css({ color : 'green'});
    }
  }
}
