import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WorkComponent } from './components/work/work.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { Client1Component } from './components/client1/client1.component';
import { HeaderComponent } from './components/header/header.component';
import { TypingAnimationModule } from 'angular-typing-animation';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material';
import { MyHammerConfig } from './my-hammer.config';
import { Client2Component } from './components/client2/client2.component';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';
import { CookieService } from 'ngx-cookie-service';

import * as firebase from 'firebase';
import { DevisComponent } from './components/devis/devis.component';
import { EstimationComponent } from './components/estimation/estimation.component';

const firebaseConfig = {
  apiKey: "AIzaSyBScHiHWsJuzRMkhVSxWMZQFxxaYixZ6so",
  authDomain: "www.dvio.fr",
  databaseURL: "https://dvio-test.firebaseio.com",
  projectId: "dvio-test",
  storageBucket: "dvio-test.appspot.com",
  messagingSenderId: "231299476528",
  appId: "1:231299476528:web:a606453f696af5ba9691f5",
  measurementId: "G-TCZDB2CJHG"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkComponent,
    ContactComponent,
    AboutComponent,
    Client1Component,
    HeaderComponent,
    Client2Component,
    DevisComponent,
    EstimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TypingAnimationModule,
    NgsRevealModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    MatCardModule,
    LazyLoadImagesModule
  ],
  providers: [
    CookieService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
