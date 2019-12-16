import { Component, OnInit, ViewChild } from '@angular/core';
import { VariableService } from '../../services/variable.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  @ViewChild('mycarousel', {static: true}) carousel: NgbCarousel;
  show: boolean = true;

  constructor(public variableService: VariableService,
              public config: NgbCarouselConfig) {
  }

  ngOnInit() {
    document.documentElement.scrollTop = 0;
  }

  next() {
    this.carousel.next();
    this.show = false;
  }

  prev() {
    this.carousel.prev();
    this.show = false;
  }
}

