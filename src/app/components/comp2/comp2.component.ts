import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  count,
  debounceTime,
  distinct,
  elementAt,
  filter,
  first,
  from,
  interval,
  last,
  max,
  min,
  Observable,
  of,
  skip,
  take,
  takeLast,
  takeWhile,
} from 'rxjs';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss'],
})
export class Comp2Component implements OnInit {
  searchForm!: FormGroup;

  categories = [
    'TV',
    'Mobiles',
    'Chargers',
    'Some',
    'Highlight',
    'TV',
    'Chargers',
    'TV',
    'Headphones',
  ];
  category$: Observable<string> = from(this.categories);

  ranks = [1, 56, 45, 2, 7, 33, 76, 2, 23, 43, 26, 56];
  rank$: Observable<any> = from(this.ranks);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      name: new FormControl(''),
    });

    this.searchForm
      .get('name')
      ?.valueChanges.pipe(
        // take(5),
        // takeWhile((v) => this.checkCondition(v)),
        filter((v) => this.checkCharCount(v)),
        debounceTime(500)
      )
      .subscribe((data) => {
        console.log(data);

        this.rank$
          .pipe(
            distinct(),
            filter((v) => v <= 35),
            // max()
            min()
          )
          .subscribe((data) => console.log(data));

        // this.category$.pipe(skip(2), distinct(), count()).subscribe((data) => {
        //   console.log(data);
        // });

        // this.category$
        //   .pipe(
        //     // takeLast(2),
        //     // first(),
        //     // last(),
        //     elementAt(2)
        //   )
        //   .subscribe((data2) => {
        //     console.log(data2);
        //   });
      });
  }

  checkCharCount(value: string) {
    return value.length <= 10;
  }

  checkCondition(value: string) {
    return value.length <= 5;
  }
}
