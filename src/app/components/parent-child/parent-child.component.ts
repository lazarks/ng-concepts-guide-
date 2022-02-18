import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.scss'],
})
export class ParentChildComponent implements OnInit {
  users: string[];

  constructor() {
    this.users = ['user1', 'user2', 'user3'];
  }

  ngOnInit(): void {}

  addUser(event: string) {
    this.users.push(event);
  }

  removeUser(event: string) {
    this.users = this.users.filter((user) => user != event);
  }
}
