import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.scss']
})
export class DevisComponent implements OnInit {

  constructor() { }
  widthEcran: number;

  ngOnInit() {
    this.widthEcran = window.innerWidth;
  }

}
