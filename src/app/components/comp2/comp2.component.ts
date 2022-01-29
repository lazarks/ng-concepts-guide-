import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, from, interval, Observable } from 'rxjs';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss'],
})
export class Comp2Component implements OnInit {
  searchForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      name: new FormControl(''),
    });

    this.searchForm
      .get('name')
      ?.valueChanges.pipe(debounceTime(500))
      .subscribe((data) => console.log(data));
  }

  readValue() {}
}
