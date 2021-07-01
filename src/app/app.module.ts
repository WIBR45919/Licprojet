import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {GlobalinfoService} from "./_services/globalinfo.service";
import {ScriptsService} from "./_services/scripts.service";
import {HttpClientModule} from "@angular/common/http";
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotfoundComponent,
        SpinnerComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule, HttpClientModule
    ],
    providers: [
        GlobalinfoService, ScriptsService
    ],
    exports: [
        SpinnerComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
