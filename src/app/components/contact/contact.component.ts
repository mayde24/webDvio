import { Component, OnInit } from '@angular/core';
import {VariableService} from '../../services/variable.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public variableService: VariableService) { }

  ngOnInit() {
    if (document.querySelector('.contact-container2') != null) {
      document.querySelector('body').style.backgroundColor = '#56dff7' ;
      document.querySelector('body').style.maxHeight  = '100vh';
      const myHeader = document.getElementsByClassName('header')[0] as HTMLElement;
      const myDiv = document.getElementsByClassName('putain')[0] as HTMLElement;
      myDiv.style.marginTop  = (myHeader.offsetHeight - 2) + 'px';
    }
    if (document.querySelector('.contact-container2') === null) {
      document.querySelector('body').style.backgroundColor = 'white' ;
      document.querySelector('body').style.maxHeight  = 'auto';
    }
  }

}
