import { Component, OnInit } from '@angular/core';
import {VariableService} from '../../services/variable.service';

@Component({
  selector: 'app-client2',
  templateUrl: './client2.component.html',
  styleUrls: ['./client2.component.scss']
})
export class Client2Component implements OnInit {

  constructor(public variableService: VariableService) { }

  ngOnInit() {
    document.documentElement.scrollTop = 0;
  }

}
