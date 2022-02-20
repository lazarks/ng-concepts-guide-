import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-ruta1',
  templateUrl: './ruta1.component.html',
  styleUrls: ['./ruta1.component.scss'],
})
export class Ruta1Component implements OnInit {
  id!: number;
  name!: string;
  page!: number;
  searchQ!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.name = data['name'];
    });
    this.route.queryParams.subscribe((data) => {
      this.page = data['page'];
      this.searchQ = data['search'];
    });
  }
}
