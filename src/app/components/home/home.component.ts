import { Component, OnInit } from '@angular/core';
import {VariableService} from '../../services/variable.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public variableService: VariableService) { }

  ngOnInit() {
    document.documentElement.scrollTop = 0;
    const visit_name = 'Home-' + this.variableService.visit_id;
    firebase.analytics().logEvent('visit', {name: visit_name});
  }
}
