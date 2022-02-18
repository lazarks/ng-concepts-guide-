import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.scss'],
})
export class ParentChildComponent implements OnInit {
  users: string[];
  userExistsMessage: boolean = false;

  constructor() {
    this.users = ['user1', 'user2', 'user3'];
  }

  ngOnInit(): void {}

  addUser(event: string) {
    if (this.users.includes(event)) {
      this.userExistsMessage = true;
      return;
    }

    this.users.push(event);
    this.userExistsMessage = false;
  }

  removeUser(event: string) {
    this.users = this.users.filter((user) => user != event);
  }
}
