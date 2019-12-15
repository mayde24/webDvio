import {Component, OnInit} from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'webSite';
  ngOnInit() {
    AOS.init({
      offset: 200,
      delay: 100,
      duration: 1000,
    });
  }
}
