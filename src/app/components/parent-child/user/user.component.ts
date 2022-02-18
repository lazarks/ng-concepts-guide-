import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input('userName') username!: string;
  @Output() removedUser = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onUserRemoved() {
    this.removedUser.emit(this.username);
  }
}
