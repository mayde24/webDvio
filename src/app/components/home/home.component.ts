import { Component, OnInit } from '@angular/core';
import {VariableService} from '../../services/variable.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  hauteurEcran: number;
  largeur: number;

  constructor(public variableService: VariableService) { }

  ngOnInit() {
    this.hauteurEcran = window.innerHeight;
    this.largeur = window.innerWidth;

    if (document.querySelector('.contact-container2') === null) {
      document.querySelector('body').style.backgroundColor = 'white' ;
      document.querySelector('body').style.maxHeight  = 'auto';
    }
  }
}
