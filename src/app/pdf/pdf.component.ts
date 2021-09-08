import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import  { jsPDF } from 'jspdf';
import html2canvas from "html2canvas";
import {ActivatedRoute, Router} from "@angular/router";
import { ContentService } from './content.service';
declare var $: any;

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  Etudiant!: any;
  anne = new Date().getUTCFullYear();

  @ViewChild('box') box!: ElementRef;

  constructor(private router: Router, private activate: ActivatedRoute, private content: ContentService) {
  }

  ngOnInit(): void {
    console.log(this.content.getInfos())
    this.Etudiant = this.content.getInfos();
    $(this.box).css("background-image", "url(" + this.Etudiant.image+ ")")
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
}
