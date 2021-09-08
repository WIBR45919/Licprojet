import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  PdfElt!: any; 
  constructor() { }

  setInfos(elt: any){
    this.PdfElt = elt;
    console.log(this.PdfElt);
  }

  getInfos(): any{
    return this.PdfElt;
  }
}
