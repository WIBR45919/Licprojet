import {Component, OnInit} from '@angular/core';
import  { jsPDF } from 'jspdf';
import html2canvas from "html2canvas";
import {ExportAsConfig, ExportAsService} from "ngx-export-as";

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  exportAsConfig: ExportAsConfig = {
    type: 'png',
    elementIdOrContent: 'content'
  }
  constructor(private exportAsService: ExportAsService) { }

  ngOnInit(): void {
  }

  downloadpdf(){
    var element = document.getElementById('content');
    if (element) {
       html2canvas(element).then((canvas) => {

         var imgData = canvas.toDataURL('image/png');

         var doc = new jsPDF();

         var imgHeight = canvas.height * 250 / canvas.width;

         doc.addImage(imgData,0,0,250, imgHeight);

         doc.save('fiche-inscription.pdf');
      });
    }
  }
}
