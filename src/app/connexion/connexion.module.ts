import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnexionRoutingModule } from './connexion-routing.module';
import { ConnexionComponent } from './connexion/connexion.component';
import { ConnexionShellComponent } from './connexion-shell/connexion-shell.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ConnexionService} from "./_service/connexion.service";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {SpinnerInterceptorService} from "../http-interceptor/spinner-interceptor.service";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}

@NgModule({
  declarations: [
      ConnexionComponent,
      ConnexionShellComponent
  ],
  imports: [
    CommonModule, SweetAlert2Module.forChild(),
    ConnexionRoutingModule,HttpClientModule,
    ReactiveFormsModule, FormsModule, TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      isolate: true,
      extend: true
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptorService,
      multi: true
    },
    ConnexionService
  ]
})
export class ConnexionModule { }
