import { Injectable } from '@angular/core';
import {SpinnerService} from "../_services/spinner.service";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {ConnexionService} from "../connexion/_service/connexion.service";

@Injectable({
  providedIn: 'root'
})
export class SpinnerInterceptorService implements HttpInterceptor{

  constructor(private spinnerService: SpinnerService, private authenticationService: ConnexionService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url.indexOf('auth') === -1 && this.authenticationService.isUserLoggedIn()) {
      
      const authReq = req.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: this.authenticationService.getLoggedInUserName()
        })
      });
  
      return next.handle(authReq)
    } else {
      return next.handle(req);
    }
  }

  handler(next: HttpHandler, request: HttpRequest<any>){
    return next.handle(request)
      .pipe(
        tap(
          (event) => {
            if (event instanceof HttpResponse){
              this.spinnerService.requestEnded();
            }
          },
          (error: HttpErrorResponse) => {
            this.spinnerService.resetSpinner();
            throw error;
          }
        ),
      );
  }
}
