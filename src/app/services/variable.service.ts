import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class VariableService {

  scrollY: number;
  hauteur: string;
  largeur: number;
  hauteurEcran: number;
  visit_id: string;

  constructor(private cookieService: CookieService) {
    if (this.cookieService.get('visit_dvio_cookie') == '') {
      let date = new Date();
      const rand = Math.floor(Math.random() * (999999 - 100000)) + 100000;
      this.visit_id = date.getDay() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + '-' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '-' + rand;
      this.cookieService.set('visit_dvio_cookie', this.visit_id);
    }
  }
}
