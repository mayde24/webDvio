import { Component, OnInit, ViewChild } from '@angular/core';
import { VariableService } from '../../services/variable.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import * as firebase from 'firebase';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  @ViewChild('mycarousel', {static: true}) carousel: NgbCarousel;
  show: boolean = true;

  constructor(public variableService: VariableService,
              public config: NgbCarouselConfig,
              private cookieService: CookieService) {
  }

  ngOnInit() {
    this.variableService.page_shadow = false;
    document.documentElement.scrollTop = 0;
    const visit_name = 'Work-' + this.cookieService.get('visit_dvio_cookie');
    firebase.analytics().logEvent(visit_name);
  }

  next() {
    this.carousel.next();
    this.show = false;
  }

  prev() {
    this.carousel.prev();
    this.show = false;
  }
}

