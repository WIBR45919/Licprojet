import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionComponent } from './inscription/inscription.component';
import { InscriptionRoutingModule } from "./inscription-routing.module";
import { InscriptionShellComponent } from "./inscription-shell/inscription-shell.component";
import { MatStepperModule } from "@angular/material/stepper";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {HeaderComponent} from "../header/header.component";
import {HelpComponent} from "./help/help.component";
import {MatDividerModule} from "@angular/material/divider";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatNativeDateModule} from "@angular/material/core";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {InfosService} from "./__services/infos.service";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {SpinnerInterceptorService} from "../http-interceptor/spinner-interceptor.service";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader"
import { WebcamModule } from 'ngx-webcam';
import { NgxMaskModule } from 'ngx-mask';

export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}
@NgModule({
  declarations: [
    InscriptionComponent,
    InscriptionShellComponent,
    HelpComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    InscriptionRoutingModule,
    MatStepperModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatListModule,
    ReactiveFormsModule, FormsModule, MatDividerModule, MatSelectModule,NgxMaskModule,
    MatDatepickerModule, MatNativeDateModule, MatSnackBarModule, HttpClientModule,WebcamModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      isolate: true,
      extend: true
    })
  ],
  exports: [
    HeaderComponent
  ],
  providers:[
    InfosService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptorService,
      multi: true
    }
  ]
})
export class InscriptionModule { }
