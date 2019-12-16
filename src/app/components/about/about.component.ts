import {Component, OnInit, ViewChild} from '@angular/core';
import {VariableService} from '../../services/variable.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  hovered: number = 0;
  show: boolean = true;
  time: number = 5000;

  @ViewChild('mycarousel2', {static: true}) carousel: NgbCarousel;

  constructor(public variableService: VariableService,
              public config: NgbCarouselConfig) {
  }

  ngOnInit() {
    document.documentElement.scrollTop = 0;
  }

  hover(person: number) {
    this.hovered = person;
  }

  leave() {
    this.hovered = 0;
  }

  next() {
    this.carousel.next();
    this.time = 150000;
    this.show = false;
  }

  prev() {
    this.carousel.prev();
    this.time = 150000;
    this.show = false;
  }
}

