import { Component, OnInit } from '@angular/core';
import {VariableService} from '../../services/variable.service';
import * as firebase from 'firebase';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-client2',
  templateUrl: './client2.component.html',
  styleUrls: ['./client2.component.scss']
})
export class Client2Component implements OnInit {

  constructor(public variableService: VariableService,
              private cookieService: CookieService) { }

  ngOnInit() {
    this.variableService.page_shadow = false;
    document.documentElement.scrollTop = 0;
    const visit_name = 'EsmelLian-' + this.cookieService.get('visit_dvio_cookie');
    firebase.analytics().logEvent(visit_name);
  }

  goTo() {
    const visit_bis = 'goToEsmelLian-' + this.cookieService.get('visit_dvio_cookie');
    firebase.analytics().logEvent('goTo_visit', {name: visit_bis});
  }
}
