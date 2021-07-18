import {Component, OnInit} from '@angular/core';
import  { jsPDF } from 'jspdf';
import html2canvas from "html2canvas";
import {Router} from "@angular/router";
import {EtudiantModel} from "../_models/etudiant.model";
import {GlobalinfoService} from "../_services/globalinfo.service";

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  Etudiant!: EtudiantModel;
  anne = new Date().getUTCFullYear();

  constructor(private router: Router, private global: GlobalinfoService) {
  }

  ngOnInit(): void {
    this.global.getUserByID().subscribe((etu: EtudiantModel) => {
      if(etu !== null && etu !== undefined){
        this.Etudiant = etu;
      }
    });
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
