import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {GlobalinfoService} from "./_services/globalinfo.service";
import {ScriptsService} from "./_services/scripts.service";
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { SpinnerComponent } from './spinner/spinner.component';
import {PdfComponent} from "./pdf/pdf.component";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { SpinnerInterceptorService } from './http-interceptor/spinner-interceptor.service';
import { ConterTimerComponent } from './conter-timer/conter-timer.component';

export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/home/', '.json')
}

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotfoundComponent,
        SpinnerComponent,
        PdfComponent,
        ConterTimerComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
        },
          isolate: false
      })
    ],
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: SpinnerInterceptorService,
        multi: true
      }
    ],
    exports: [
        SpinnerComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
