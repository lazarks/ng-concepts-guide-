import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-pipes',
  templateUrl: './filter-pipes.component.html',
  styleUrls: ['./filter-pipes.component.scss'],
})
export class FilterPipesComponent implements OnInit {
  users = [
    {
      name: 'Name1',
      joinDate: new Date(15, 2, 2022),
    },
    {
      name: 'Name2',
      joinDate: new Date(20, 2, 2022),
    },
    {
      name: 'Name3',
      joinDate: new Date(25, 2, 2022),
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
