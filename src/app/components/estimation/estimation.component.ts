import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as firebase from 'firebase';
import { CookieService } from 'ngx-cookie-service';
import {VariableService} from '../../services/variable.service';

@Component({
  selector: 'app-estimation',
  templateUrl: './estimation.component.html',
  styleUrls: ['./estimation.component.scss']
})
export class EstimationComponent implements OnInit {

  form: FormGroup;
  questions = [
    ["question1", "Quel est votre projet ?",
      "Création d'un site Web", 1,
      "Refonte d'un site existant", 0,
      200, 500],
    ["question2", "Souhaitez-vous une assistance à la rédaction de votre site ?",
      "Oui", 1,
      "Non, j'ai déjà mon contenu", 0,
      200, 500],
    ["question3", "Possédez-vous une maquette du site ?",
      "Oui", 2,
      "Non", 0,
      100, 200],
    ["question4", "Aurez-vous besoin de fonctionnalités telles qu'un formulaire de contact, une FAQ ou une carte ?",
      "Oui", 1,
      "Non", 0,
      300, 1000],
    ["question5", "Aurez-vous besoin de fonctionnalités telles qu'une newsletter, des comptes utilisateurs ou la gestion d'avis ?",
      "Oui", 2,
      "Non", 0,
      100, 500],
    ["question6", "Votre site sera-t-il constitué de plus de 5 pages ?",
      "Oui, j'aime voir grand", 2,
      "Non", 0,
      200, 600],
    ["question7", "Voulez-vous souscrire à une assistance mensuelle ? (Rapports mensuels des vues de votre site, changements mineurs de contenus)",
      "Oui", 3,
      "Non", 0,
      100, 300],
    ["question8", "Souhaitez-vous la création d'un nouveau logo pour votre projet ?",
      "Oui", 3,
      "Non, j'ai déjà un logo", 0,
      200, 300]
  ];
  choix: number = 1;
  min: number = 600;
  max: number = 1200;
  submitted: boolean = false;
  index: number = 0;
  largeur: number = 0;
  parsec: number;
  widthEcran: number;
  thereIsNext: boolean = false;
  thereIsPrevious: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private cookieService: CookieService,
    public variableService: VariableService) { }

  ngOnInit() {
    this.variableService.page_shadow = true;
    document.documentElement.scrollTop = 0;
    const visit_name = 'Estimation-' + this.cookieService.get('visit_dvio_cookie');
    firebase.analytics().logEvent(visit_name);
    this.widthEcran = window.innerWidth;
    this.parsec = (document.getElementById('entierParsec').offsetWidth / 7.0) - 5;
    this.form = this.formBuilder.group({
      question1: ['', Validators.required],
      question2: ['', Validators.required],
      question3: ['', Validators.required],
      question4: ['', Validators.required],
      question5: ['', Validators.required],
      question6: ['', Validators.required],
      question7: ['', Validators.required],
      question8: ['', Validators.required]
    });
  }


  next() {
    // @ts-ignore
    if (this.index < 7 && ((document.getElementById(`question${this.index + 1}_oui`) as HTMLElement).checked || (document.getElementById(`question${this.index + 1}_non`) as HTMLElement).checked)) {
      this.index++;
      for (let pas = 0; pas < this.parsec; pas++) {
        setTimeout(() => {
          this.largeur++;
          (document.getElementById('progress') as HTMLElement).style.width = this.largeur + 'px';
        }, 100);
      }
      this.thereIsPrevious = true;
      // @ts-ignore
      if (((document.getElementById(`question${this.index + 1}_oui`) as HTMLElement).checked == false && (document.getElementById(`question${this.index + 1}_non`) as HTMLElement).checked == false)) {
        this.thereIsNext = false;
      }
    }
  }
  previous() {
    if (this.index > 0) {
      this.index--;
      for (let pas = 0; pas < this.parsec; pas++) {
        setTimeout(() => {
          this.largeur--;
          (document.getElementById('progress') as HTMLElement).style.width = this.largeur + 'px';
        }, 100);
      }
      this.thereIsNext = true;
    }
    if(this.index == 0) {
      this.thereIsPrevious = false;
    }
  }
  nextForced() {
    setTimeout( () =>{
      if (this.index < 7) {
        this.index++;
        for (let pas = 0; pas < this.parsec; pas++) {
          setTimeout(() => {
            this.largeur++;
            (document.getElementById('progress') as HTMLElement).style.width = this.largeur + 'px';
          }, 100);
        }
        this.thereIsPrevious = true;
        // @ts-ignore
        if (((document.getElementById(`question${this.index + 1}_oui`) as HTMLElement).checked || (document.getElementById(`question${this.index + 1}_non`) as HTMLElement).checked)) {
          this.thereIsNext = true;
        } else {
          this.thereIsNext = false;
        }
      } else {
        for (let i = 1; i <= this.questions.length; i++) {
          this.choix = Math.max(this.choix, this.form.controls["question" + i].value);
          this.min += this.form.controls["question" + i].value > 0 ? Number(this.questions[i-1][6]) : 0;
          this.max += this.form.controls["question" + i].value > 0 ? Number(this.questions[i-1][7]) : 0;
        }
        this.submitted = true;
      }
    }, 500);
  }
}
