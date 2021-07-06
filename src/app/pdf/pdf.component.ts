import {Component, OnInit} from '@angular/core';
import  { jsPDF } from 'jspdf';
import html2canvas from "html2canvas";
import {ActivatedRoute, Router} from "@angular/router";
import {PdfService} from "./pdf.service";
import {EtudiantModel} from "../_models/etudiant.model";

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  id!: number;
  Etudiant!: EtudiantModel;
  anne = new Date().getUTCFullYear();

  constructor(private route: ActivatedRoute, private router: Router, private pdf: PdfService) {
    this.route.queryParams.subscribe(params =>{
      this.id = params.id;
    });
  }

  ngOnInit(): void {
    this.pdf.getUserByID(this.id).subscribe((etu: EtudiantModel) => {
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

         var imgHeight = canvas.height * 200 / canvas.width;
         console.log(canvas.width);
         console.log(canvas.height);
         doc.addImage(imgData,'PNG',0,0,210, 240);
         doc.save('fiche-inscription.pdf');
         //redirection apres telechargement
         this.router.navigate(['/profil'],{ queryParams: { id: this.id}});
      });
    }
  }
}
