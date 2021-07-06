import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GlobalinfoService {

 private url = 'http://192.168.137.92:8080/';

  constructor(private  http: HttpClient) { }

  getApiUrl(): string{
    return this.url;
  }
}
