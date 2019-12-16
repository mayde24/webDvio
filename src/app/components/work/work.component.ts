import { Component, OnInit } from '@angular/core';
import { VariableService } from '../../services/variable.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor(public variableService: VariableService) { }

  ngOnInit() {
  }
}

