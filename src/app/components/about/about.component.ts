import { Component, OnInit } from '@angular/core';
import {VariableService} from '../../services/variable.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  hovered: number = 0;
  personIndex: number = 1 ;
  nbPersons: number = 4;


  constructor(public variableService: VariableService) { }

  ngOnInit() {
  }

  hover(person: number) {
    this.hovered = person;
  }

  leave() {
    this.hovered = 0;
  }

  arrowRight() {
    this.personIndex++;
  }

  arrowLeft() {
    this.personIndex--;
  }
}

