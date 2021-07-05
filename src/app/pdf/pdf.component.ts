import {Component, OnInit} from '@angular/core';
import  { jsPDF } from 'jspdf';
import html2canvas from "html2canvas";

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadpdf(){
    var element = document.getElementById('content');
    if (element) {
       html2canvas(element).then((canvas) => {

         var imgData = canvas.toDataURL('image/png');

         var doc = new jsPDF();

         var imgHeight = canvas.height * 200 / (canvas.width - 400);
         console.log(canvas.width);
         console.log(canvas.height);
         doc.addImage(imgData,'PNG',0,0,200, imgHeight);

         doc.save('fiche-inscription.pdf');
      });
    }
  }
}
