import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {GlobalinfoService} from "./_services/globalinfo.service";
import {ScriptsService} from "./_services/scripts.service";
import {ProfilModule} from "./profil/profil.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProfilModule,
  ],
  providers: [
    GlobalinfoService, ScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
