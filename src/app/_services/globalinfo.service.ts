import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalinfoService {

 private url = 'http://192.168.137.92:8080/';

  constructor() { }

  getApiUrl(): string{
    return this.url;
  }

  setApiUrl(newUrl: string): void{
    this.url = newUrl;
  }
}
