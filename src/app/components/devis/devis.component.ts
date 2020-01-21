import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.scss']
})
export class DevisComponent implements OnInit {

  constructor(private cookieService: CookieService) { }
  widthEcran: number;

  ngOnInit() {
    this.widthEcran = window.innerWidth;
    document.documentElement.scrollTop = 0;
    const visit_name = 'Devis-' + this.cookieService.get('visit_dvio_cookie');
    firebase.analytics().logEvent(visit_name);
  }

}
