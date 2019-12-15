import { Component, OnInit } from '@angular/core';
import {VariableService} from '../../services/variable.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public variableService: VariableService) { }

  ngOnInit() {
  }

}
