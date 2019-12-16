import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {VariableService} from '../../services/variable.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router,
              public scrollService: VariableService,
              public variableService: VariableService) { }

  ngOnInit() {
  }
}
