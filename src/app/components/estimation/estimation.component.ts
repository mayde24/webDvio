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
    ["question1", "Site vitrine : 1", 1, 200, 500],
    ["question2", "Assistance rédaction : 1", 1, 200, 500],
    ["question3", "Création de grapismes : 1", 1, 100, 200],
    ["question4", "Fonctionnalités + : 1", 1, 300, 1000],
    ["question5", "Fonctionnalités ++ : 2", 2, 100, 500],
    ["question6", "Pages > 5 : 2", 2, 200, 600],
    ["question7", "Assistance mensuelle : 3", 3, 100, 300],
    ["question8", "Logo : 3", 3, 200, 300]
  ];
  choix: number = 1;
  min: number = 800;
  max: number = 1500;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,) { }

  ngOnInit() {
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

  onSubmit() {
    for (let i = 1; i <= this.questions.length; i++) {
      this.choix = Math.max(this.choix, this.form.controls["question" + i].value);
      this.min += this.form.controls["question" + i].value > 0 ? Number(this.questions[i][3]) : 0;
      this.max += this.form.controls["question" + i].value > 0 ? Number(this.questions[i][4]) : 0;
    }
    this.submitted = true;
  }
}
