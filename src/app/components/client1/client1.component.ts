import { Component, OnInit } from '@angular/core';
import {VariableService} from '../../services/variable.service';
import * as firebase from 'firebase';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-client1',
  templateUrl: './client1.component.html',
  styleUrls: ['./client1.component.scss']
})
export class Client1Component implements OnInit {

  constructor(public variableService: VariableService,
              private cookieService: CookieService) { }

  ngOnInit() {
    document.documentElement.scrollTop = 0;
    const visit_name = 'DameCoeur-' + this.cookieService.get('visit_dvio_cookie');
    firebase.analytics().logEvent(visit_name);
  }

  goTo() {
    const visit_name = 'goToDameCoeur' + this.cookieService.get('visit_dvio_cookie');
    firebase.analytics().logEvent(visit_name);
  }

}
