import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  person1 = document.getElementById('person1');
  person1Text = document.getElementById('person1-text');
  person2 = document.getElementById('person2');
  person2LeftText = document.getElementById('person2-left-text');
  person2RightText = document.getElementById('person2-right-text');
  person3 = document.getElementById('person3');
  person3Text = document.getElementById('person3-text');

  arrowLeft3 = document.getElementById('arrow-left3');
  arrowRight3 = document.getElementById('arrow-right3');
  m = 1 ;

  constructor() { }

  ngOnInit() {
    if (document.querySelector('.contact-container2') === null) {
      document.querySelector('body').style.backgroundColor = 'white' ;
      document.querySelector('body').style.maxHeight  = 'auto';
    }
    if (window.innerWidth > 500 && window.innerHeight < window.innerWidth) {
      document.getElementById('deskop-type').classList.remove('hidden');
      document.getElementById('phone-type').classList.add('hidden');
    } else {
      document.getElementById('phone-type').classList.remove('hidden');
      document.getElementById('deskop-type').classList.add('hidden');
    }
    window.addEventListener('scroll', (event) => {
      if (window.scrollY > 400) {
        document.getElementById('header').classList.add('header-shadow');
      } else {
        document.getElementById('header').classList.remove('header-shadow');
      }
    });
    if (window.innerWidth < 600) {
      document.getElementById('about-container').style.backgroundImage = 'none';
    }
    if (document.querySelector('.home-banner2') != null) {
      const myHeader = document.getElementsByClassName('header')[0] as HTMLElement;
      const myDiv = document.getElementsByClassName('home-banner2')[0] as HTMLElement;
      myDiv.style.marginTop  = (myHeader.offsetHeight + 35) + 'px';
    }
  }

  // sleep time expects milliseconds
   sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  person1OverCall() {
    document.getElementById('person2').classList.add('hidden');
    document.getElementById('person3').classList.add('hidden');
    document.getElementById('person1-text').classList.remove('hidden');
    setTimeout(() => {
      document.getElementById('person1-text').classList.remove('opacity');
    }, 100);
  }
  person1LeaveCall() {
    setTimeout(() => {
      document.getElementById('person1-text').classList.add('opacity');
    }, 100);
    document.getElementById('person1-text').classList.add('hidden');
    document.getElementById('person2').classList.remove('hidden');
    document.getElementById('person3').classList.remove('hidden');
  }
  person2OverCall() {
    document.getElementById('person1').classList.add('hidden');
    document.getElementById('person3').classList.add('hidden');
    document.getElementById('person2-left-text').classList.remove('hidden');
    document.getElementById('person2-right-text').classList.remove('hidden');
    setTimeout(() => {
      document.getElementById('person2-left-text').classList.remove('opacity');
      document.getElementById('person2-right-text').classList.remove('opacity');
    }, 100);
  }
  person2LeaveCall() {
    document.getElementById('person1').classList.remove('hidden');
    document.getElementById('person3').classList.remove('hidden');
    setTimeout(() => {
      document.getElementById('person2-right-text').classList.add('opacity');
      document.getElementById('person2-left-text').classList.add('opacity');
    }, 100);
    document.getElementById('person2-left-text').classList.add('hidden');
    document.getElementById('person2-right-text').classList.add('hidden');
  }
  person3OverCall() {
      document.getElementById('person1').classList.add('hidden');
      document.getElementById('person2').classList.add('hidden');
      document.getElementById('person3-text').classList.remove('hidden');
      setTimeout(() => {
        document.getElementById('person3-text').classList.remove('opacity');
      }, 100);
  }
  person3LeaveCall() {
      document.getElementById('person1').classList.remove('hidden');
      document.getElementById('person2').classList.remove('hidden');
      setTimeout(() => {
        document.getElementById('person3-text').classList.add('opacity');
      }, 100);
      document.getElementById('person3-text').classList.add('hidden');
  }
  arrowRight3Call() {
    if (document.getElementById(`element${this.m + 1}`) != null) {
      const pastReview = document.getElementById(`element${this.m}`);
      this.m = this.m + 1;
      const myReview = document.getElementById(`element${this.m}`);
      pastReview.classList.add('hidden');
      myReview.classList.remove('hidden');
      document.getElementById('arrow-left3').classList.remove('opacity');
    }
    if (document.getElementById(`element${this.m + 1}`) === null) {
      document.getElementById('arrow-right3').classList.add('opacity');
    }
  }
  arrowLeft3Call() {
    if (document.getElementById(`element${this.m - 1}`) != null) {
      const pastReview = document.getElementById(`element${this.m}`);
      this.m = this.m - 1;
      const myReview = document.getElementById(`element${this.m}`);
      pastReview.classList.add('hidden');
      myReview.classList.remove('hidden');
      document.getElementById('arrow-right3').classList.remove('opacity');
    }
    if (document.getElementById(`element${this.m - 1}`) === null) {
      document.getElementById('arrow-left3').classList.add('opacity');
    }
  }
}

