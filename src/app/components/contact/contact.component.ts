import { Component, OnInit } from '@angular/core';
import {VariableService} from '../../services/variable.service';
import * as firebase from 'firebase';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public variableService: VariableService,
              private cookieService: CookieService) { }

  ngOnInit() {
    this.variableService.page_shadow = false;
    document.documentElement.scrollTop = 0;
    const visit_name = 'Contact-' + this.cookieService.get('visit_dvio_cookie');
    firebase.analytics().logEvent(visit_name);
  }

  goToMail() {
    const visit_name = 'goToMail-' + this.cookieService.get('visit_dvio_cookie');
    firebase.analytics().logEvent(visit_name);
  }
  goToLink() {
    const visit_name = 'goToLinkedin-' + this.cookieService.get('visit_dvio_cookie');
    firebase.analytics().logEvent(visit_name);
  }
  goToTwitter() {
    const visit_name = 'goToTwitter-' + this.cookieService.get('visit_dvio_cookie');
    firebase.analytics().logEvent(visit_name);
  }
}
