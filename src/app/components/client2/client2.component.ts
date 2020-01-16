import { Component, OnInit } from '@angular/core';
import {VariableService} from '../../services/variable.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-client2',
  templateUrl: './client2.component.html',
  styleUrls: ['./client2.component.scss']
})
export class Client2Component implements OnInit {

  constructor(public variableService: VariableService) { }

  ngOnInit() {
    document.documentElement.scrollTop = 0;
    const visit_name = 'EsmelLian-' + this.variableService.visit_id;
    firebase.analytics().logEvent('visit', {name: visit_name});
  }

  goTo() {
    const visit_bis = 'EsmelLian-' + this.variableService.visit_id;
    firebase.analytics().logEvent('goTo_visit', {name: visit_bis});
  }
}
