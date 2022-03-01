import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-pipes',
  templateUrl: './filter-pipes.component.html',
  styleUrls: ['./filter-pipes.component.scss'],
})
export class FilterPipesComponent implements OnInit {
  temp: string = '?';
  status = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('data recived or smt');
    }, 3000);
  });
  filterString: string = '';

  users = [
    {
      name: 'Name',
      joinDate: new Date(2022, 1, 15),
    },
    {
      name: 'Name',
      joinDate: new Date(2022, 1, 16),
    },
    {
      name: 'Name1',
      joinDate: new Date(2022, 1, 20),
    },
    {
      name: 'Name12',
      joinDate: new Date(2022, 1, 25),
    },
    {
      name: 'Name123',
      joinDate: new Date(2022, 2, 1),
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
