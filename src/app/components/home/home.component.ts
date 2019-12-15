import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (window.innerHeight > window.innerWidth) {
      document.getElementById('down').classList.add('hidden');
    }
    if (document.querySelector('.home-banner') != null) {
      const myHeader = document.getElementsByClassName('header')[0] as HTMLElement;
      const myDiv = document.getElementsByClassName('home-banner')[0] as HTMLElement;
      myDiv.style.marginTop  = myHeader.offsetHeight + 'px';
    }
    if (document.querySelector('.home-banner') != null && window.innerWidth < 1080) {
      const myHeader = document.getElementsByClassName('header')[0] as HTMLElement;
      const myDiv = document.getElementsByClassName('home-banner')[0] as HTMLElement;
      myDiv.style.marginTop  = (2 * myHeader.offsetHeight) + 'px';
    }
    if (document.querySelector('.contact-container2') === null) {
      document.querySelector('body').style.backgroundColor = 'white' ;
      document.querySelector('body').style.maxHeight  = 'auto';
    }
    window.addEventListener('scroll', (event) => {
      if (window.scrollY > 400) {
        document.getElementById('header').classList.add('header-shadow');
      } else {
        document.getElementById('header').classList.remove('header-shadow');
      }
    });
  }
}
