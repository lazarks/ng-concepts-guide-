import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onFormSubmit(form: NgForm) {
    console.log('submited');
    console.log(form);
  }
}
