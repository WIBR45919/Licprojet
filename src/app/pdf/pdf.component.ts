import {Component, OnDestroy, OnInit } from '@angular/core';
import  { jsPDF } from 'jspdf';
import html2canvas from "html2canvas";
import { Router} from "@angular/router";
import { Subscription } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit, OnDestroy {

  Etudiant!: any;
  Image!: any;
  anne = new Date().getUTCFullYear();
  subscription!: Subscription;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.Etudiant = JSON.parse(sessionStorage['USER_FORM']).infos;
    this.Image = JSON.parse(sessionStorage['USER_FORM']).image;
    $('#box').css("background-image", "url(" + this.Image+ ")")
  }

  downloadpdf(): void{
    var element = document.getElementById('content');
    if (element) {
       html2canvas(element).then((canvas) => {

         var imgData = canvas.toDataURL('image/png');

         var doc = new jsPDF();

         // var imgHeight = canvas.height * 200 / canvas.width;
         console.log(canvas.width);
         console.log(canvas.height);
         doc.addImage(imgData,'PNG',0,0,210, 240);
         doc.save('fiche-inscription.pdf');
      });
    }
  }

  ngOnDestroy(): void {
    sessionStorage.clear();
  }

}
