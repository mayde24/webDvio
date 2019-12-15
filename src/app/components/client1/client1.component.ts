import { Component, OnInit } from '@angular/core';
import {VariableService} from '../../services/variable.service';

@Component({
  selector: 'app-client1',
  templateUrl: './client1.component.html',
  styleUrls: ['./client1.component.scss']
})
export class Client1Component implements OnInit {

  constructor(public variableService: VariableService) { }

  ngOnInit() {
  }

}
