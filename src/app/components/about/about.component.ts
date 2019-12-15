import { Component, OnInit } from '@angular/core';
import {VariableService} from '../../services/variable.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  personIndex = 1 ;
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

  // sleep time expects milliseconds
   sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  person1OverCall() {
    document.getElementById('person2').classList.add('hidden');
    document.getElementById('person3').classList.add('hidden');
    document.getElementById('person1-text').classList.remove('hidden');
    document.getElementById('person1-text').classList.remove('opacity');
  }
  person1LeaveCall() {
    document.getElementById('person1-text').classList.add('opacity');
    document.getElementById('person1-text').classList.add('hidden');
    document.getElementById('person2').classList.remove('hidden');
    document.getElementById('person3').classList.remove('hidden');
  }
  person2OverCall() {
    document.getElementById('person1').classList.add('hidden');
    document.getElementById('person3').classList.add('hidden');
    document.getElementById('person2-left-text').classList.remove('hidden');
    document.getElementById('person2-right-text').classList.remove('hidden');
    document.getElementById('person2-left-text').classList.remove('opacity');
    document.getElementById('person2-right-text').classList.remove('opacity');
  }
  person2LeaveCall() {
    document.getElementById('person1').classList.remove('hidden');
    document.getElementById('person3').classList.remove('hidden');
    document.getElementById('person2-right-text').classList.add('opacity');
    document.getElementById('person2-left-text').classList.add('opacity');
    document.getElementById('person2-left-text').classList.add('hidden');
    document.getElementById('person2-right-text').classList.add('hidden');
  }
  person3OverCall() {
      document.getElementById('person1').classList.add('hidden');
      document.getElementById('person2').classList.add('hidden');
      document.getElementById('person3-text').classList.remove('hidden');
      document.getElementById('person3-text').classList.remove('opacity');
  }
  person3LeaveCall() {
      document.getElementById('person1').classList.remove('hidden');
      document.getElementById('person2').classList.remove('hidden');
      document.getElementById('person3-text').classList.add('opacity');
      document.getElementById('person3-text').classList.add('hidden');
  }
  arrowRight3Call() {
    if (document.getElementById(`element${this.personIndex + 1}`) != null) {
      const pastReview = document.getElementById(`element${this.personIndex}`);
      this.personIndex = this.personIndex + 1;
      const myReview = document.getElementById(`element${this.personIndex}`);
      pastReview.classList.add('hidden');
      myReview.classList.remove('hidden');
      document.getElementById('arrow-left3').classList.remove('opacity');
    }
    if (document.getElementById(`element${this.personIndex + 1}`) === null) {
      document.getElementById('arrow-right3').classList.add('opacity');
    }
  }
  arrowLeft3Call() {
    if (document.getElementById(`element${this.personIndex - 1}`) != null) {
      const pastReview = document.getElementById(`element${this.personIndex}`);
      this.personIndex = this.personIndex - 1;
      const myReview = document.getElementById(`element${this.personIndex}`);
      pastReview.classList.add('hidden');
      myReview.classList.remove('hidden');
      document.getElementById('arrow-right3').classList.remove('opacity');
    }
    if (document.getElementById(`element${this.personIndex - 1}`) === null) {
      document.getElementById('arrow-left3').classList.add('opacity');
    }
  }
}

