import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    window.addEventListener('scroll', (event) => {
      if (window.scrollY > 400) {
        document.getElementById('header').classList.add('header-shadow');
      } else {
        document.getElementById('header').classList.remove('header-shadow');
      }
    });
    if (document.querySelector('.contact-container2') === null) {
      document.querySelector('body').style.backgroundColor = 'white' ;
      document.querySelector('body').style.maxHeight  = 'auto';
    }
  }

}
