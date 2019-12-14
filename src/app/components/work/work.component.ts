import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  arrowLeft = document.getElementById('arrow-left');
  arrowRight = document.getElementById('arrow-right');
  i = 1 ;

  arrowLeft2 = document.getElementById('arrow-left2');
  arrowRight2 = document.getElementById('arrow-right2');
  y = 1 ;

  constructor() { }

  ngOnInit() {
    if (document.querySelector('.contact-container2') === null) {
      document.querySelector('body').style.backgroundColor = 'white' ;
      document.querySelector('body').style.maxHeight  = 'auto';
    }
    if (window.innerWidth > 500) {
      document.getElementById('deskop-screen').classList.remove('hidden');
      document.getElementById('phone-screen').classList.add('hidden');
    } else {
      document.getElementById('phone-screen').classList.remove('hidden');
      document.getElementById('deskop-screen').classList.add('hidden');
    }
    if (document.querySelector('.work') != null) {
      document.querySelector('body').style.maxHeight  = '100vh';
      const myHeader = document.getElementsByClassName('header')[0] as HTMLElement;
      const myDiv = document.getElementsByClassName('work')[0] as HTMLElement;
      const myDiv2 = document.getElementsByClassName('work')[1] as HTMLElement;
      const myDiv3 = document.getElementsByClassName('work')[2] as HTMLElement;
      myDiv.style.marginTop  = myHeader.offsetHeight + 'px';
      myDiv2.style.marginTop  = myHeader.offsetHeight + 'px';
      myDiv3.style.marginTop  = myHeader.offsetHeight + 'px';
    }
    if (document.querySelector('.client') != null) {
      document.querySelector('body').style.maxHeight  = '100vh';
      const myHeader = document.getElementsByClassName('header')[0] as HTMLElement;
      const myDiv = document.getElementsByClassName('client')[0] as HTMLElement;
      const myDiv2 = document.getElementsByClassName('client')[1] as HTMLElement;
      const myDiv3 = document.getElementsByClassName('client')[2] as HTMLElement;
      myDiv.style.marginTop  = myHeader.offsetHeight + 'px';
      myDiv2.style.marginTop  = myHeader.offsetHeight + 'px';
      myDiv3.style.marginTop  = myHeader.offsetHeight + 'px';
    }
    window.addEventListener('scroll', (event) => {
      if (window.scrollY > 400) {
        document.getElementById('header').classList.add('header-shadow');
      } else {
        document.getElementById('header').classList.remove('header-shadow');
      }
    });
  }

  arrowRightCall() {
    if (document.getElementById(`review${this.i + 1}`) != null) {
      const pastReview = document.getElementById(`review${this.i}`);
      this.i = this.i + 1;
      const myReview = document.getElementById(`review${this.i}`);
      pastReview.classList.add('hidden');
      myReview.classList.remove('hidden');
      document.getElementById('arrow-left').classList.remove('opacity');
    }
    if (document.getElementById(`review${this.i + 1}`) === null) {
      document.getElementById('arrow-right').classList.add('opacity');
    }
  }

  arrowLeftCall() {
    if (document.getElementById(`review${this.i - 1}`) != null) {
      const pastReview = document.getElementById(`review${this.i}`);
      this.i = this.i - 1;
      const myReview = document.getElementById(`review${this.i}`);
      pastReview.classList.add('hidden');
      myReview.classList.remove('hidden');
      document.getElementById('arrow-right').classList.remove('opacity');
    }
    if (document.getElementById(`review${this.i - 1}`) === null) {
      document.getElementById('arrow-left').classList.add('opacity');
    }
  }

  arrowRight2Call() {
      if (document.getElementById(`work${this.y + 1}`) != null) {
        const pastReview = document.getElementById(`work${this.y}`);
        this.y = this.y + 1;
        const myReview = document.getElementById(`work${this.y}`);
        pastReview.classList.add('hidden');
        myReview.classList.remove('hidden');
        document.getElementById('arrow-left2').classList.remove('opacity');
      }
      if (document.getElementById(`work${this.y + 1}`) === null) {
        document.getElementById('arrow-right2').classList.add('opacity');
      }
  }

  arrowLeft2Call() {
    if (document.getElementById(`work${this.y - 1}`) != null) {
      const pastReview = document.getElementById(`work${this.y}`);
      this.y = this.y - 1;
      const myReview = document.getElementById(`work${this.y}`);
      pastReview.classList.add('hidden');
      myReview.classList.remove('hidden');
      document.getElementById('arrow-right2').classList.remove('opacity');
    }
    if (document.getElementById(`work${this.y - 1}`) === null) {
      document.getElementById('arrow-left2').classList.add('opacity');
    }
  }
}

