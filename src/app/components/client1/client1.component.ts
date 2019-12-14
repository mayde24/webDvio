import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client1',
  templateUrl: './client1.component.html',
  styleUrls: ['./client1.component.scss']
})
export class Client1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    if (document.querySelector('.contact-container2') === null) {
      document.querySelector('body').style.backgroundColor = 'white' ;
      document.querySelector('body').style.maxHeight  = 'auto';
    }
    if (document.querySelector('.client-banner') != null) {
      const myHeader = document.getElementsByClassName('header')[0] as HTMLElement;
      const myDiv = document.getElementsByClassName('client-banner')[0] as HTMLElement;
      myDiv.style.marginTop  = myHeader.offsetHeight + 'px';
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
