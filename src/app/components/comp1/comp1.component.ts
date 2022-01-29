import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, of } from 'rxjs';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component implements OnInit {
  agents!: Observable<string>;
  agentName!: string;

  studentList = ['Mark', 'Ram', 'Sita', 'Lisa'];
  students: Observable<string[]> = of(this.studentList);

  @ViewChild('validate')
  validate!: ElementRef;

  @ViewChild('linkData')
  linkData!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.students.subscribe((data) => {
      console.log(data);
    });

    this.agents = new Observable((observer) => {
      try {
        observer.next('Rita');
        setTimeout(() => observer.next('Mark'), 1000);
        setTimeout(() => observer.next('Sita'), 2000);
      } catch (err) {
        observer.error(err);
      }
    });
    this.agents.subscribe((data) => {
      this.agentName = data;
    });
  }

  rxjsEventObservable() {
    let btnObservalbe$ = fromEvent(this.validate?.nativeElement, 'click');
    btnObservalbe$.subscribe((data) => console.log(data));
  }

  getEventObservable() {
    let linkObservable$ = fromEvent(this.linkData?.nativeElement, 'mouseover');
    linkObservable$.subscribe((data) => console.log(data));
  }
}
