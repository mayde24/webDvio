import {Component, OnInit} from '@angular/core';
import * as AOS from 'aos';
import {VariableService} from './services/variable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'webSite';
  constructor(private variableService: VariableService) {
    window.onscroll = function () {
      variableService.scrollY = document.documentElement.scrollTop;
    };
    variableService.largeur = window.innerWidth;
    variableService.hauteur = window.innerWidth > 1080 ? '10vh' : '7vh';
    variableService.hauteurEcran = window.innerHeight;
  }
  ngOnInit() {
    AOS.init({
      offset: 200,
      delay: 100,
      duration: 1000,
    });
  }
}
