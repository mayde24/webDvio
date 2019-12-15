import { Component, OnInit } from '@angular/core';
import {VariableService} from '../../services/variable.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  reviewIndex = 1 ;
  nbReviews: number = 3;
  workIndex = 1 ;
  nbWorks: number = 3;

  constructor(public variableService: VariableService) { }

  ngOnInit() {
    if (document.querySelector('.contact-container2') === null) {
      document.querySelector('body').style.backgroundColor = 'white' ;
      document.querySelector('body').style.maxHeight  = 'auto';
    }
  }

  arrowRightCall() {
    this.reviewIndex++;
  }

  arrowLeftCall() {
    this.reviewIndex--;
  }

  arrowRight2Call() {
    this.workIndex++;
  }

  arrowLeft2Call() {
    this.workIndex--;
  }
}

