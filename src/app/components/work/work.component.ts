import { Component, OnInit } from '@angular/core';
import {VariableService} from '../../services/variable.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  reviewIndex = 1 ;
  workIndex = 1 ;
  num2: number;
  nbReviews: number = 3;

  constructor(public variableService: VariableService) { }

  ngOnInit() {
    this.num2 = window.innerWidth;
    if (document.querySelector('.contact-container2') === null) {
      document.querySelector('body').style.backgroundColor = 'white' ;
      document.querySelector('body').style.maxHeight  = 'auto';
    }

  }

  arrowRightCall() {
    if (this.reviewIndex < this.nbReviews) {
      const pastReview = document.getElementById(`review${this.reviewIndex}`);
      this.reviewIndex = this.reviewIndex + 1;
      const myReview = document.getElementById(`review${this.reviewIndex}`);
      pastReview.classList.add('hidden');
      myReview.classList.remove('hidden');
      document.getElementById('arrow-left').classList.remove('opacity');
    }
    if (document.getElementById(`review${this.reviewIndex + 1}`) === null) {
      document.getElementById('arrow-right').classList.add('opacity');
    }
  }

  arrowLeftCall() {
    if (document.getElementById(`review${this.reviewIndex - 1}`) != null) {
      const pastReview = document.getElementById(`review${this.reviewIndex}`);
      this.reviewIndex = this.reviewIndex - 1;
      const myReview = document.getElementById(`review${this.reviewIndex}`);
      pastReview.classList.add('hidden');
      myReview.classList.remove('hidden');
      document.getElementById('arrow-right').classList.remove('opacity');
    }
    if (document.getElementById(`review${this.reviewIndex - 1}`) === null) {
      document.getElementById('arrow-left').classList.add('opacity');
    }
  }

  arrowRight2Call() {
      if (document.getElementById(`work${this.workIndex + 1}`) != null) {
        const pastReview = document.getElementById(`work${this.workIndex}`);
        this.workIndex = this.workIndex + 1;
        const myReview = document.getElementById(`work${this.workIndex}`);
        pastReview.classList.add('hidden');
        myReview.classList.remove('hidden');
        document.getElementById('arrow-left2').classList.remove('opacity');
      }
      if (document.getElementById(`work${this.workIndex + 1}`) === null) {
        document.getElementById('arrow-right2').classList.add('opacity');
      }
  }

  arrowLeft2Call() {
    if (document.getElementById(`work${this.workIndex - 1}`) != null) {
      const pastReview = document.getElementById(`work${this.workIndex}`);
      this.workIndex = this.workIndex - 1;
      const myReview = document.getElementById(`work${this.workIndex}`);
      pastReview.classList.add('hidden');
      myReview.classList.remove('hidden');
      document.getElementById('arrow-right2').classList.remove('opacity');
    }
    if (document.getElementById(`work${this.workIndex - 1}`) === null) {
      document.getElementById('arrow-left2').classList.add('opacity');
    }
  }
}

