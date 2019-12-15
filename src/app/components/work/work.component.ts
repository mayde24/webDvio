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
  }

  arrowRightReview() {
    this.reviewIndex++;
  }

  arrowLeftReview() {
    this.reviewIndex--;
  }

  arrowRight2Work() {
    this.workIndex++;
  }

  arrowLeft2Work() {
    this.workIndex--;
  }
}

