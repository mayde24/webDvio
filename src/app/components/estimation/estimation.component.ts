import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-estimation',
  templateUrl: './estimation.component.html',
  styleUrls: ['./estimation.component.scss']
})
export class EstimationComponent implements OnInit {

  form: FormGroup;
  questions = [
    ["question1", "Est-ce une création de site à partir d'aucun code pré existent ?", 1, 200, 500],
    ["question2", "Aurez-vous besoin d'une assistance à la rédaction de votre site ?", 1, 200, 500],
    ["question3", "Si vous n'avez pas déjà de maquette représentant votre projet, souhaitez-vous que nous prenions en charge le design du site ? (Réalisation de maquette avec confirmation de votre part en amont)", 1, 100, 200],
    ["question4", "Est-ce que des fonctionnalités de base seront necessaires ? (Formulaire de contact, FAQ, carte Maps situant vos locaux)", 1, 300, 1000],
    ["question5", "Est-ce que des fonctionnalités avancées seront necessaires ? (Newsletter, site multilingue, création et connexion de comptes, post utilisateurs)", 2, 100, 500],
    ["question6", "Votre site sera-t-il consituté de plus de 5 pages ?", 2, 200, 600],
    ["question7", "Voulez-vous souscrire à une assistance mensuelle ? (Rapports mensuels des vues de votre site, aide à la résolution de problèmes futurs)", 3, 100, 300],
    ["question8", "Avez-vous besoin d'un logo ou d'un nouvel emblème pour votre projet ?", 3, 200, 300]
  ];
  choix: number = 1;
  min: number = 800;
  max: number = 1500;
  submitted: boolean = false;
  index: number = 1;
  largeur: number = 0;
  parsec: number;
  widthEcran: number;
  thereIsNext: boolean = false;
  thereIsPrevious: boolean = false;

  constructor(
    private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.widthEcran = window.innerWidth;
    this.parsec = (document.getElementById('entierParsec').offsetWidth / 6.0) - 5;
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
    if (this.index != 7 && ((document.getElementById(`question${this.index + 1}_oui`) as HTMLElement).checked || (document.getElementById(`question${this.index + 1}_non`) as HTMLElement).checked)) {
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
    if (this.index != 1) {
      this.index--;
      for (let pas = 0; pas < this.parsec; pas++) {
        setTimeout(() => {
          this.largeur--;
          (document.getElementById('progress') as HTMLElement).style.width = this.largeur + 'px';
        }, 100);
      }
      this.thereIsNext = true;
    }
    if(this.index == 1) {
      this.thereIsPrevious = false;
    }
  }
  nextForced() {
    setTimeout( () =>{
      if (this.index != 7) {
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
          this.min += this.form.controls["question" + i].value > 0 ? Number(this.questions[i][3]) : 0;
          this.max += this.form.controls["question" + i].value > 0 ? Number(this.questions[i][4]) : 0;
        }
        this.submitted = true;
      }
    }, 500);
  }
}
