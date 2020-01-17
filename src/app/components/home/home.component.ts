import { Component, OnInit } from '@angular/core';
import {VariableService} from '../../services/variable.service';
import * as firebase from 'firebase';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public variableService: VariableService,
              private cookieService: CookieService) { }

  ngOnInit() {
    document.documentElement.scrollTop = 0;
    const visit_name = 'Home-' + this.cookieService.get('visit_dvio_cookie');
    firebase.analytics().logEvent('visit', {name: visit_name});
  }
}
