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
    const visit_name = 'Contact-' + this.cookieService.get('visit_dvio_cookie');
    firebase.analytics().logEvent('visit', {name: visit_name});
  }

  goToMail() {
    const visit_bis = 'Mail-' + this.cookieService.get('visit_dvio_cookie');
    firebase.analytics().logEvent('goTo_visit', {name: visit_bis});
  }
  goToLink() {
    const visit_bis = 'LinkedIn-' + this.cookieService.get('visit_dvio_cookie');
    firebase.analytics().logEvent('goTo_visit', {name: visit_bis});
  }
  goToTwitter() {
    const visit_bis = 'Twitter-' + this.cookieService.get('visit_dvio_cookie');
    firebase.analytics().logEvent('goTo_visit', {name: visit_bis});
  }
}
