import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  infos!: Subject<any>;
  PdfElt =  new Array<any>(); 

  constructor() { }

  setInfos(elt: any): void{
    this.PdfElt.push(elt);
    this.emitInfos();
  }

  emitInfos(): void{
    this.infos.next(this.PdfElt.slice());
  }
}
