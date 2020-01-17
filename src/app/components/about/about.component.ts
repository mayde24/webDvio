import {Component, OnInit, ViewChild} from '@angular/core';
import {VariableService} from '../../services/variable.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import * as firebase from 'firebase';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  hovered: number = 0;
  show: boolean = true;
  time: number = 5000;

  @ViewChild('mycarousel2', {static: true}) carousel: NgbCarousel;

  constructor(public variableService: VariableService,
              public config: NgbCarouselConfig,
              private cookieService: CookieService) {
  }

  ngOnInit() {
    document.documentElement.scrollTop = 0;
    const visit_name = 'AboutUs-' + this.cookieService.get('visit_dvio_cookie');
    firebase.analytics().logEvent('visit', {name: visit_name});
  }

  goToMaya() {
    const visit_bis1 = 'MayaDouadi-' + this.cookieService.get('visit_dvio_cookie');
    firebase.analytics().logEvent('goTo_visit', {name: visit_bis1});
  }
  goToYasmine() {
    const visit_bis2 = 'YasmineDouadi-' + this.cookieService.get('visit_dvio_cookie');
    firebase.analytics().logEvent('goTo_visit', {name: visit_bis2});
  }
  goToArmand() {
    const visit_bis3 = 'ArmandBègue-' + this.cookieService.get('visit_dvio_cookie');
    firebase.analytics().logEvent('goTo_visit', {name: visit_bis3});
  }

  hover(person: number) {
    this.hovered = person;
  }

  leave() {
    this.hovered = 0;
  }

  next() {
    this.carousel.next();
    this.time = 150000;
    this.show = false;
  }

  prev() {
    this.carousel.prev();
    this.time = 150000;
    this.show = false;
  }
}

