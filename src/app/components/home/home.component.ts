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
  }
}
