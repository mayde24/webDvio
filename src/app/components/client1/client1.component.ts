import { Component, OnInit } from '@angular/core';
import {VariableService} from '../../services/variable.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-client1',
  templateUrl: './client1.component.html',
  styleUrls: ['./client1.component.scss']
})
export class Client1Component implements OnInit {

  constructor(public variableService: VariableService) { }

  ngOnInit() {
    document.documentElement.scrollTop = 0;
    const visit_name = 'DameCoeur-' + this.variableService.visit_id;
    firebase.analytics().logEvent('visit', {name: visit_name});
  }

  goTo() {
    const visit_bis = 'DameCoeur-' + this.variableService.visit_id;
    firebase.analytics().logEvent('goTo_visit', {name: visit_bis});
  }

}
