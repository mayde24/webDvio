import { Component, OnInit } from '@angular/core';
import {VariableService} from '../../services/variable.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public variableService: VariableService) { }

  ngOnInit() {
    const visit_name = 'Contact-' + this.variableService.visit_id;
    firebase.analytics().logEvent('visit', {name: visit_name});
  }

  goToMail() {
    const visit_bis = 'Mail-' + this.variableService.visit_id;
    firebase.analytics().logEvent('goTo_visit', {name: visit_bis});
  }
  goToLink() {
    const visit_bis = 'LinkedIn-' + this.variableService.visit_id;
    firebase.analytics().logEvent('goTo_visit', {name: visit_bis});
  }
  goToTwitter() {
    const visit_bis = 'Twitter-' + this.variableService.visit_id;
    firebase.analytics().logEvent('goTo_visit', {name: visit_bis});
  }
}
